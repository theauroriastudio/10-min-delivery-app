-- =============================================
-- 10MinutesDelivery Database Schema for Supabase
-- =============================================
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- CATEGORIES TABLE
-- =============================================
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(50) NOT NULL,
  color VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, icon, color) VALUES
  ('Medicines', 'Pill', '#0D9488'),
  ('Healthcare', 'Heart', '#EC4899'),
  ('Personal Care', 'Sparkles', '#8B5CF6'),
  ('Baby Care', 'Baby', '#F59E0B'),
  ('Ayurveda', 'Leaf', '#22C55E'),
  ('Homeopathy', 'FlaskConical', '#3B82F6'),
  ('Diabetes', 'Droplets', '#EF4444'),
  ('Nutrition', 'Apple', '#F97316');

-- =============================================
-- PRODUCTS TABLE
-- =============================================
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  mrp DECIMAL(10, 2) NOT NULL,
  discount INTEGER DEFAULT 0,
  image VARCHAR(500),
  prescription BOOLEAN DEFAULT FALSE,
  rating DECIMAL(2, 1) DEFAULT 0,
  category_id INTEGER REFERENCES categories(id),
  in_stock BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default products
INSERT INTO products (name, description, price, mrp, discount, image, prescription, rating) VALUES
  ('Dolo 650mg Tablet', 'Strip of 15 tablets', 32, 35, 9, 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop', FALSE, 4.5),
  ('Crocin Advance 500mg', 'Strip of 20 tablets', 45, 52, 13, 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop', FALSE, 4.3),
  ('Pan D Capsule', 'Strip of 10 capsules', 125, 145, 14, 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop', TRUE, 4.6),
  ('Azithral 500mg', 'Strip of 5 tablets', 98, 115, 15, 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop', TRUE, 4.4),
  ('Volini Spray 100ml', 'Pain relief spray', 215, 250, 14, 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop', FALSE, 4.2),
  ('Vitamin D3 Tablets', 'Bottle of 60 tablets', 320, 400, 20, 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop', FALSE, 4.7);

-- =============================================
-- BANNERS TABLE
-- =============================================
CREATE TABLE banners (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  subtitle VARCHAR(200),
  code VARCHAR(50),
  bg_color VARCHAR(20) DEFAULT '#0D9488',
  image VARCHAR(500),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default banners
INSERT INTO banners (title, subtitle, code, bg_color, image) VALUES
  ('Flat ₹50 OFF', 'On your first order', 'FIRST50', '#0D9488', 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'),
  ('Up to 25% OFF', 'On Healthcare Products', 'HEALTH25', '#1E40AF', 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400'),
  ('Free Consultation', 'With Expert Doctors', 'FREEDOC', '#7C3AED', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400');

-- =============================================
-- DOCTORS TABLE
-- =============================================
CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialty VARCHAR(100) NOT NULL,
  experience VARCHAR(50),
  rating DECIMAL(2, 1) DEFAULT 0,
  consultations INTEGER DEFAULT 0,
  fee DECIMAL(10, 2) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  image VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default doctors
INSERT INTO doctors (name, specialty, experience, rating, consultations, fee, available, image) VALUES
  ('Dr. Priya Sharma', 'General Physician', '12 years', 4.8, 2450, 299, TRUE, 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200'),
  ('Dr. Amit Verma', 'Dermatologist', '8 years', 4.6, 1890, 399, TRUE, 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200'),
  ('Dr. Sneha Gupta', 'Pediatrician', '15 years', 4.9, 3200, 349, FALSE, 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200');

-- =============================================
-- LAB TESTS TABLE
-- =============================================
CREATE TABLE lab_tests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  mrp DECIMAL(10, 2) NOT NULL,
  discount INTEGER DEFAULT 0,
  home_collection BOOLEAN DEFAULT TRUE,
  report_time VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default lab tests
INSERT INTO lab_tests (name, description, price, mrp, discount, home_collection, report_time) VALUES
  ('Complete Blood Count (CBC)', '28 parameters', 299, 450, 34, TRUE, '6 hours'),
  ('Thyroid Profile (T3, T4, TSH)', '3 parameters', 399, 600, 33, TRUE, '12 hours'),
  ('Diabetes Screening', 'HbA1c + Fasting Sugar', 449, 700, 36, TRUE, '8 hours'),
  ('Full Body Checkup', '72 parameters', 999, 2500, 60, TRUE, '24 hours');

-- =============================================
-- ADDRESSES TABLE
-- =============================================
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  type VARCHAR(50) NOT NULL,
  address TEXT NOT NULL,
  landmark VARCHAR(200),
  pincode VARCHAR(10),
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default addresses
INSERT INTO addresses (type, address) VALUES
  ('Home', '530/9ka, Kapoorthla, Sector A, Aliganj, Lucknow'),
  ('Work', 'Tech Park, Gomti Nagar, Lucknow'),
  ('Other', 'City Mall, Hazratganj, Lucknow');

-- =============================================
-- ORDERS TABLE
-- =============================================
CREATE TABLE orders (
  id VARCHAR(20) PRIMARY KEY,
  user_id UUID,
  date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(50) DEFAULT 'Pending',
  items INTEGER DEFAULT 0,
  total DECIMAL(10, 2) DEFAULT 0,
  delivery_time VARCHAR(50),
  address_id INTEGER REFERENCES addresses(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default orders
INSERT INTO orders (id, date, status, items, total, delivery_time) VALUES
  ('ORD123456', '2025-07-12', 'Delivered', 3, 456, '8 mins'),
  ('ORD123455', '2025-07-10', 'Delivered', 2, 234, '10 mins'),
  ('ORD123454', '2025-07-08', 'Delivered', 5, 789, '9 mins');

-- =============================================
-- HEALTH TIPS TABLE
-- =============================================
CREATE TABLE health_tips (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default health tips
INSERT INTO health_tips (title, description, icon) VALUES
  ('Stay Hydrated', 'Drink 8-10 glasses of water daily for better health', 'Droplets'),
  ('Regular Exercise', '30 minutes of daily exercise boosts immunity', 'Activity'),
  ('Balanced Diet', 'Include fruits and vegetables in every meal', 'Apple');

-- =============================================
-- QUICK ACTIONS TABLE
-- =============================================
CREATE TABLE quick_actions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  subtitle VARCHAR(200),
  icon VARCHAR(50),
  color VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default quick actions
INSERT INTO quick_actions (title, subtitle, icon, color) VALUES
  ('Upload Prescription', 'Get medicines delivered', 'FileUp', '#0D9488'),
  ('Consult Doctor', 'Instant consultation', 'Stethoscope', '#3B82F6'),
  ('Lab Tests', 'Book at home', 'TestTube', '#8B5CF6'),
  ('Health Packages', 'Full body checkup', 'Package', '#F59E0B');

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================
-- Enable RLS on all tables (optional - for public read access)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_actions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON banners FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON doctors FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON lab_tests FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON addresses FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON orders FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON health_tips FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON quick_actions FOR SELECT USING (true);
