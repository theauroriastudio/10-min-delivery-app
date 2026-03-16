// Mock data for Medinos App Clone

export const userData = {
  name: "Rahul Kumar",
  phone: "+91 9876543210",
  address: "530/9ka, Kapoorthla, Sector A, Aliganj, Lucknow",
  wallet: 150,
  orders: 12
};

export const categories = [
  { id: 1, name: "Medicines", icon: "Pill", color: "#0D9488" },
  { id: 2, name: "Healthcare", icon: "Heart", color: "#EC4899" },
  { id: 3, name: "Personal Care", icon: "Sparkles", color: "#8B5CF6" },
  { id: 4, name: "Baby Care", icon: "Baby", color: "#F59E0B" },
  { id: 5, name: "Ayurveda", icon: "Leaf", color: "#22C55E" },
  { id: 6, name: "Homeopathy", icon: "FlaskConical", color: "#3B82F6" },
  { id: 7, name: "Diabetes", icon: "Droplets", color: "#EF4444" },
  { id: 8, name: "Nutrition", icon: "Apple", color: "#F97316" }
];

export const banners = [
  {
    id: 1,
    title: "Flat ₹50 OFF",
    subtitle: "On your first order",
    code: "FIRST50",
    bgColor: "#0D9488",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"
  },
  {
    id: 2,
    title: "Up to 25% OFF",
    subtitle: "On Healthcare Products",
    code: "HEALTH25",
    bgColor: "#1E40AF",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400"
  },
  {
    id: 3,
    title: "Free Consultation",
    subtitle: "With Expert Doctors",
    code: "FREEDOC",
    bgColor: "#7C3AED",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
  }
];

export const quickActions = [
  {
    id: 1,
    title: "Upload Prescription",
    subtitle: "Get medicines delivered",
    icon: "FileUp",
    color: "#0D9488"
  },
  {
    id: 2,
    title: "Consult Doctor",
    subtitle: "Instant consultation",
    icon: "Stethoscope",
    color: "#3B82F6"
  },
  {
    id: 3,
    title: "Lab Tests",
    subtitle: "Book at home",
    icon: "TestTube",
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "Health Packages",
    subtitle: "Full body checkup",
    icon: "Package",
    color: "#F59E0B"
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: "Dolo 650mg Tablet",
    description: "Strip of 15 tablets",
    price: 32,
    mrp: 35,
    discount: 9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    prescription: false,
    rating: 4.5
  },
  {
    id: 2,
    name: "Crocin Advance 500mg",
    description: "Strip of 20 tablets",
    price: 45,
    mrp: 52,
    discount: 13,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop",
    prescription: false,
    rating: 4.3
  },
  {
    id: 3,
    name: "Pan D Capsule",
    description: "Strip of 10 capsules",
    price: 125,
    mrp: 145,
    discount: 14,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
    prescription: true,
    rating: 4.6
  },
  {
    id: 4,
    name: "Azithral 500mg",
    description: "Strip of 5 tablets",
    price: 98,
    mrp: 115,
    discount: 15,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
    prescription: true,
    rating: 4.4
  },
  {
    id: 5,
    name: "Volini Spray 100ml",
    description: "Pain relief spray",
    price: 215,
    mrp: 250,
    discount: 14,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
    prescription: false,
    rating: 4.2
  },
  {
    id: 6,
    name: "Vitamin D3 Tablets",
    description: "Bottle of 60 tablets",
    price: 320,
    mrp: 400,
    discount: 20,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
    prescription: false,
    rating: 4.7
  }
];

export const popularCategories = [
  { id: 1, name: "Fever & Pain", count: 245, icon: "Thermometer" },
  { id: 2, name: "Cold & Cough", count: 189, icon: "Wind" },
  { id: 3, name: "Stomach Care", count: 156, icon: "Pill" },
  { id: 4, name: "Skin Care", count: 312, icon: "Sparkles" },
  { id: 5, name: "Vitamins", count: 278, icon: "Zap" },
  { id: 6, name: "First Aid", count: 134, icon: "Cross" }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    experience: "12 years",
    rating: 4.8,
    consultations: 2450,
    fee: 299,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200"
  },
  {
    id: 2,
    name: "Dr. Amit Verma",
    specialty: "Dermatologist",
    experience: "8 years",
    rating: 4.6,
    consultations: 1890,
    fee: 399,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200"
  },
  {
    id: 3,
    name: "Dr. Sneha Gupta",
    specialty: "Pediatrician",
    experience: "15 years",
    rating: 4.9,
    consultations: 3200,
    fee: 349,
    available: false,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200"
  }
];

export const labTests = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    description: "28 parameters",
    price: 299,
    mrp: 450,
    discount: 34,
    homeCollection: true,
    reportTime: "6 hours"
  },
  {
    id: 2,
    name: "Thyroid Profile (T3, T4, TSH)",
    description: "3 parameters",
    price: 399,
    mrp: 600,
    discount: 33,
    homeCollection: true,
    reportTime: "12 hours"
  },
  {
    id: 3,
    name: "Diabetes Screening",
    description: "HbA1c + Fasting Sugar",
    price: 449,
    mrp: 700,
    discount: 36,
    homeCollection: true,
    reportTime: "8 hours"
  },
  {
    id: 4,
    name: "Full Body Checkup",
    description: "72 parameters",
    price: 999,
    mrp: 2500,
    discount: 60,
    homeCollection: true,
    reportTime: "24 hours"
  }
];

export const orders = [
  {
    id: "MED123456",
    date: "2025-07-12",
    status: "Delivered",
    items: 3,
    total: 456,
    deliveryTime: "28 mins"
  },
  {
    id: "MED123455",
    date: "2025-07-10",
    status: "Delivered",
    items: 2,
    total: 234,
    deliveryTime: "32 mins"
  },
  {
    id: "MED123454",
    date: "2025-07-08",
    status: "Delivered",
    items: 5,
    total: 789,
    deliveryTime: "25 mins"
  }
];

export const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink 8-10 glasses of water daily for better health",
    icon: "Droplets"
  },
  {
    id: 2,
    title: "Regular Exercise",
    description: "30 minutes of daily exercise boosts immunity",
    icon: "Activity"
  },
  {
    id: 3,
    title: "Balanced Diet",
    description: "Include fruits and vegetables in every meal",
    icon: "Apple"
  }
];
