import { useState, useEffect } from 'react';
import * as api from '../services/api';

// Generic hook for fetching data
export const useData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, dependencies);

  return { data, loading, error, refetch: () => setData(null) };
};

// Specific hooks for each data type
export const useProducts = () => useData(api.getProducts);
export const useCategories = () => useData(api.getCategories);
export const useBanners = () => useData(api.getBanners);
export const useDoctors = () => useData(api.getDoctors);
export const useLabTests = () => useData(api.getLabTests);
export const useOrders = () => useData(api.getOrders);
export const useAddresses = () => useData(api.getAddresses);
export const useHealthTips = () => useData(api.getHealthTips);
export const useQuickActions = () => useData(api.getQuickActions);

// Hook for single product
export const useProduct = (id) => {
  return useData(() => api.getProductById(id), [id]);
};

// Hook for search
export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    const searchDebounced = setTimeout(async () => {
      setLoading(true);
      const data = await api.searchProducts(query);
      setResults(data);
      setLoading(false);
    }, 300);

    return () => clearTimeout(searchDebounced);
  }, [query]);

  return { results, loading };
};
