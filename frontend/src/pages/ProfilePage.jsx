import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  MapPin,
  CreditCard,
  Package,
  Heart,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Wallet,
  Settings,
  Shield,
} from "lucide-react";
import { userData, orders } from "../data/mockData";

const ProfilePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Package, label: "My Orders", subtitle: `${orders.length} orders placed`, path: "/orders" },
    { icon: MapPin, label: "Saved Addresses", subtitle: "Home, Office", path: "/addresses" },
    { icon: Wallet, label: "Wallet", subtitle: `₹${userData.wallet} balance`, path: "/wallet" },
    { icon: Heart, label: "Wishlist", subtitle: "12 items saved", path: "/wishlist" },
    { icon: CreditCard, label: "Payment Methods", subtitle: "Cards, UPI, Wallets", path: "/payments" },
    { icon: Bell, label: "Notifications", subtitle: "Manage alerts", path: "/notifications" },
    { icon: Shield, label: "Privacy & Security", subtitle: "Account security", path: "/privacy" },
    { icon: Settings, label: "Settings", subtitle: "App preferences", path: "/settings" },
    { icon: HelpCircle, label: "Help & Support", subtitle: "FAQs, Contact us", path: "/help" },
  ];

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">My Account</h1>
        </div>

        {/* Profile Info */}
        <div className="px-4 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-teal-100 text-sm">{userData.phone}</p>
            </div>
            <button className="bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{userData.orders}</p>
            <p className="text-xs text-gray-500">Orders</p>
          </div>
          <div className="text-center border-x border-gray-100">
            <p className="text-2xl font-bold text-gray-800">₹{userData.wallet}</p>
            <p className="text-xs text-gray-500">Wallet</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-xs text-gray-500">Wishlist</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 py-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Recent Orders
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {orders.slice(0, 2).map((order, index) => (
            <div
              key={order.id}
              className={`flex items-center gap-3 p-4 ${
                index !== 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800">Order #{order.id}</h4>
                <p className="text-xs text-gray-500">
                  {order.items} items • ₹{order.total}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {order.status}
                </span>
                <p className="text-xs text-gray-400 mt-1">{order.deliveryTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-2">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-semibold text-gray-800">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 rounded-xl text-red-600 font-medium hover:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* App Version */}
      <div className="text-center py-4">
        <p className="text-xs text-gray-400">10MinutesDelivery v1.0.0</p>
      </div>
    </div>
  );
};

export default ProfilePage;
