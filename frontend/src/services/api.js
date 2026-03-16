import { supabase, isSupabaseConfigured } from '../lib/supabase';
import * as mockData from '../data/mockData';

// Generic fetch function with fallback to mock data
const fetchFromSupabase = async (tableName, mockFallback) => {
  if (!isSupabaseConfigured()) {
    console.log(`Using mock data for ${tableName}`);
    return mockFallback;
  }

  try {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) throw error;
    return data && data.length > 0 ? data : mockFallback;
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    return mockFallback;
  }
};

// Products
export const getProducts = async () => {
  return fetchFromSupabase('products', mockData.featuredProducts);
};

export const getProductById = async (id) => {
  if (!isSupabaseConfigured()) {
    return mockData.featuredProducts.find(p => p.id === parseInt(id));
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return mockData.featuredProducts.find(p => p.id === parseInt(id));
  }
};

// Categories
export const getCategories = async () => {
  return fetchFromSupabase('categories', mockData.categories);
};

// Banners
export const getBanners = async () => {
  return fetchFromSupabase('banners', mockData.banners);
};

// Doctors
export const getDoctors = async () => {
  return fetchFromSupabase('doctors', mockData.doctors);
};

// Lab Tests
export const getLabTests = async () => {
  return fetchFromSupabase('lab_tests', mockData.labTests);
};

// Orders
export const getOrders = async () => {
  return fetchFromSupabase('orders', mockData.orders);
};

// User Data
export const getUserData = async () => {
  return fetchFromSupabase('users', mockData.userData);
};

// Addresses
export const getAddresses = async () => {
  const defaultAddresses = [
    { id: 1, type: "Home", address: "530/9ka, Kapoorthla, Sector A, Aliganj, Lucknow" },
    { id: 2, type: "Work", address: "Tech Park, Gomti Nagar, Lucknow" },
    { id: 3, type: "Other", address: "City Mall, Hazratganj, Lucknow" },
  ];
  return fetchFromSupabase('addresses', defaultAddresses);
};

// Health Tips
export const getHealthTips = async () => {
  return fetchFromSupabase('health_tips', mockData.healthTips);
};

// Quick Actions
export const getQuickActions = async () => {
  return fetchFromSupabase('quick_actions', mockData.quickActions);
};

// Search Products
export const searchProducts = async (query) => {
  if (!isSupabaseConfigured()) {
    return mockData.featuredProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    return mockData.featuredProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Add to Cart (for future use with user authentication)
export const addToCart = async (productId, quantity = 1) => {
  if (!isSupabaseConfigured()) {
    console.log('Cart stored locally');
    return { success: true, local: true };
  }

  try {
    const { data, error } = await supabase
      .from('cart_items')
      .upsert({ product_id: productId, quantity });
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error adding to cart:', error);
    return { success: false, error };
  }
};
