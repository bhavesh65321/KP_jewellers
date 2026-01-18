import { useState, useEffect, useMemo, useCallback } from "react";
import { loadProductsCSV, loadRates, clearCache } from "../utils/csvLoader";
import {
  parseAllProducts,
  filterProducts,
  getUniqueMaterials,
  getUniqueCategories,
} from "../utils/parseProduct";
import { getPriceRange } from "../utils/priceCalculator";

const RATES_STORAGE_KEY = "kp_jewellers_rates";

/**
 * Hook to load and manage product data
 * Loads rates and products from Google Sheets or local files
 */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Load rates and products in parallel
      const [ratesData, csvData] = await Promise.all([
        loadRates(),
        loadProductsCSV(),
      ]);

      setRates(ratesData);

      // Parse all products with rates
      const parsedProducts = parseAllProducts(csvData, ratesData);

      // Add price range to each product
      const productsWithPriceRange = parsedProducts.map((product) => ({
        ...product,
        priceRange: getPriceRange(product.variants),
      }));

      setProducts(productsWithPriceRange);
    } catch (err) {
      console.error("Error loading product data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Function to refresh data (clears cache and reloads)
  const refresh = useCallback(() => {
    clearCache();
    loadData();
  }, [loadData]);

  return { products, rates, loading, error, refresh };
}

// Preferred sort order for materials (common ones first)
const MATERIAL_ORDER = ["gold", "silver", "platinum"];

// Preferred sort order for categories (common ones first)
const CATEGORY_ORDER = [
  "rings",
  "earrings",
  "pendants",
  "bangles",
  "bracelets",
  "necklaces",
  "nose-pins",
  "coins",
];

/**
 * Sort items by preferred order, then alphabetically for new items
 */
function sortByPreferredOrder(items, preferredOrder) {
  return items.sort((a, b) => {
    const indexA = preferredOrder.indexOf(a);
    const indexB = preferredOrder.indexOf(b);

    // Both in preferred order - sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // Only A is in preferred order - A comes first
    if (indexA !== -1) return -1;
    // Only B is in preferred order - B comes first
    if (indexB !== -1) return 1;
    // Neither in preferred order - sort alphabetically
    return a.localeCompare(b);
  });
}

/**
 * Hook to get filtered products based on URL params (material, category, search)
 */
export function useFilteredProducts(material, category, search) {
  const { products, rates, loading, error, refresh } = useProducts();

  const filtered = useMemo(() => {
    if (!products.length) return [];
    return filterProducts(products, { material, category, search });
  }, [products, material, category, search]);

  // Get unique materials and categories, sorted by preferred order
  const materials = useMemo(() => {
    const unique = getUniqueMaterials(products);
    return sortByPreferredOrder(unique, MATERIAL_ORDER);
  }, [products]);

  const categories = useMemo(() => {
    const unique = getUniqueCategories(products);
    return sortByPreferredOrder(unique, CATEGORY_ORDER);
  }, [products]);

  return {
    products: filtered,
    allProducts: products,
    rates,
    materials,
    categories,
    loading,
    error,
    searchQuery: search,
    refresh,
  };
}

/**
 * Hook to get a single product by ID
 */
export function useProduct(productId) {
  const { products, rates, loading, error } = useProducts();

  const product = useMemo(() => {
    if (!products.length || !productId) return null;
    return products.find((p) => p.id === productId);
  }, [products, productId]);

  return { product, rates, loading, error };
}

/**
 * Hook to get rates only (for components that just need rates)
 */
export function useRates() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await loadRates();
        setRates(data);
        setLastUpdated(data.lastUpdated);
      } catch (err) {
        console.error("Error loading rates:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { rates, loading, lastUpdated };
}

/**
 * Hook for admin panel to get and update rates (localStorage only)
 */
export function useRatesAdmin() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRates()
      .then(setRates)
      .finally(() => setLoading(false));
  }, []);

  const saveRates = (newRates) => {
    const dataToSave = {
      ...newRates,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
    localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(dataToSave));
    setRates(dataToSave);
    clearCache(); // Clear cache so next load gets new rates
    return true;
  };

  const resetToDefault = async () => {
    localStorage.removeItem(RATES_STORAGE_KEY);
    clearCache();
    try {
      const response = await fetch("/data/rates.json");
      const defaultRates = await response.json();
      setRates(defaultRates);
    } catch (err) {
      console.error("Error loading default rates:", err);
    }
  };

  return { rates, loading, saveRates, resetToDefault };
}
