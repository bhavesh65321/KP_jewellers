import React, { useState, useEffect } from "react";
import { useRatesAdmin } from "../hooks/useProducts";
import { FaSave, FaUndo, FaLock, FaCheckCircle, FaArrowLeft, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "kp2024"; // Change this to your secret password

const AdminRatesPage = () => {
  const { rates, loading, saveRates, resetToDefault } = useRatesAdmin();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (rates) {
      setFormData({ ...rates });
    }
  }, [rates]);

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem("kp_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("kp_admin_auth", "true");
    } else {
      alert("Incorrect password");
    }
  };

  const handleRateChange = (material, purity, value) => {
    setFormData((prev) => ({
      ...prev,
      [material]: {
        ...prev[material],
        [purity]: Number(value) || 0,
      },
    }));
    setSaved(false);
  };

  const handleAddPurity = (material) => {
    const purityName = prompt(`Enter new purity for ${material.toUpperCase()} (e.g., 18K, 999):`);
    if (purityName && purityName.trim()) {
      setFormData((prev) => ({
        ...prev,
        [material]: {
          ...prev[material],
          [purityName.trim().toUpperCase()]: 0,
        },
      }));
      setSaved(false);
    }
  };

  const handleRemovePurity = (material, purity) => {
    if (window.confirm(`Remove ${purity} from ${material}?`)) {
      setFormData((prev) => {
        const updated = { ...prev };
        const materialRates = { ...updated[material] };
        delete materialRates[purity];
        updated[material] = materialRates;
        return updated;
      });
      setSaved(false);
    }
  };

  const handleSave = () => {
    saveRates(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Reset to default rates from file? This will clear all custom rates.")) {
      resetToDefault();
      setSaved(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("kp_admin_auth");
    setIsAuthenticated(false);
    setPassword("");
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full relative z-10"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200">
              <FaLock className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
            <p className="text-gray-500 text-sm mt-1">Enter password to update rates</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
          >
            Unlock
          </button>
          <Link
            to="/"
            className="block text-center text-gray-500 text-sm mt-4 hover:text-amber-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </form>
      </div>
    );
  }

  if (loading || !formData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                💰 Rate Management
              </h1>
              <p className="text-gray-400 mt-1">Update metal rates - changes reflect instantly</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-4 text-sm">
            <span className="text-amber-400">
              📅 Last Updated: {formData.lastUpdated || "Never"}
            </span>
            <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-1">
              <FaArrowLeft size={12} /> Back to Site
            </Link>
          </div>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 animate-fadeIn">
            <FaCheckCircle />
            Rates saved successfully! Refresh the shop page to see updated prices.
          </div>
        )}

        {/* Gold Rates */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-amber-600 flex items-center gap-2">
              🥇 Gold Rates <span className="text-gray-400 font-normal text-sm">(₹ per gram)</span>
            </h2>
            <button
              onClick={() => handleAddPurity("gold")}
              className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              <FaPlus size={12} /> Add Purity
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.gold || {}).map(([purity, rate]) => (
              <div key={purity} className="relative group">
                <label className="block text-sm font-medium text-gray-600 mb-1">{purity}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => handleRateChange("gold", purity, e.target.value)}
                    className="w-full pl-8 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => handleRemovePurity("gold", purity)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Rates */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-500 flex items-center gap-2">
              🥈 Silver Rates <span className="text-gray-400 font-normal text-sm">(₹ per gram)</span>
            </h2>
            <button
              onClick={() => handleAddPurity("silver")}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <FaPlus size={12} /> Add Purity
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.silver || {}).map(([purity, rate]) => (
              <div key={purity} className="relative group">
                <label className="block text-sm font-medium text-gray-600 mb-1">{purity}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => handleRateChange("silver", purity, e.target.value)}
                    className="w-full pl-8 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => handleRemovePurity("silver", purity)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platinum Rates */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-blue-600 flex items-center gap-2">
              💎 Platinum Rates <span className="text-gray-400 font-normal text-sm">(₹ per gram)</span>
            </h2>
            <button
              onClick={() => handleAddPurity("platinum")}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <FaPlus size={12} /> Add Purity
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.platinum || {}).map(([purity, rate]) => (
              <div key={purity} className="relative group">
                <label className="block text-sm font-medium text-gray-600 mb-1">{purity}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => handleRateChange("platinum", purity, e.target.value)}
                    className="w-full pl-8 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => handleRemovePurity("platinum", purity)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSave}
            className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200"
          >
            <FaSave /> Save Rates
          </button>
          <button
            onClick={handleReset}
            className="flex-1 py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
          >
            <FaUndo /> Reset to Default
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-amber-800 text-sm">
            <strong>💡 How it works:</strong> Rates are stored in your browser's local storage. 
            When you update rates here, all product prices on the website will recalculate automatically. 
            To see the changes, refresh the shop page after saving.
          </p>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          ⚠️ Note: Rates are stored per browser. Different devices will have their own rates.
        </p>
      </div>
    </div>
  );
};

export default AdminRatesPage;
