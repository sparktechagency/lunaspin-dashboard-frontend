import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Search, Calendar, User } from 'lucide-react';

export default function Dashboard() {
  const [dateRange] = useState('01 Jan,2025 - 31 Jan,2025');

  const revenueData = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 2500 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 1800 },
    { month: 'May', revenue: 2100 },
    { month: 'Jun', revenue: 2800 },
    { month: 'Jul', revenue: 3200 },
    { month: 'Aug', revenue: 2900 },
    { month: 'Sep', revenue: 2600 },
    { month: 'Oct', revenue: 3100 },
    { month: 'Nov', revenue: 2700 },
    { month: 'Dec', revenue: 2400 }
  ];

  const activeUsersData = [
    { month: 'Jan', '2024': 45, '2025': 60 },
    { month: 'Feb', '2024': 52, '2025': 75 },
    { month: 'Mar', '2024': 48, '2025': 70 },
    { month: 'Apr', '2024': 61, '2025': 82 },
    { month: 'May', '2024': 55, '2025': 68 },
    { month: 'Jun', '2024': 67, '2025': 85 },
    { month: 'Jul', '2024': 72, '2025': 90 },
    { month: 'Aug', '2024': 58, '2025': 75 },
    { month: 'Sep', '2024': 64, '2025': 80 },
    { month: 'Oct', '2024': 70, '2025': 88 },
    { month: 'Nov', '2024': 59, '2025': 76 },
    { month: 'Dec', '2024': 66, '2025': 83 }
  ];

  const topClubs = [
    { id: 1, name: 'Rhythm Nation', members: 203, avatar: '🎵' },
    { id: 2, name: 'Rhythm Nation', members: 180, avatar: '🎵' },
    { id: 3, name: 'Rhythm Nation', members: 205, avatar: '🎵' },
    { id: 4, name: 'Rhythm Nation', members: 203, avatar: '🎵' }
  ];

  const statCards = [
    { label: 'Total Revenue', value: '$2500', color: 'bg-purple-100', icon: '💰' },
    { label: 'Total User', value: '11,250', color: 'bg-blue-100', icon: '👥' },
    { label: 'Total Club', value: '1,459', color: 'bg-pink-100', icon: '🏢' },
    { label: 'Active Classes', value: '6,428', color: 'bg-green-100', icon: '📚' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">      {/* Date Range */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{dateRange}</span>
        </div>
        <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-white">
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {statCards.map((card, idx) => (
          <div key={idx} className={`${card.color} rounded-lg p-6 border border-gray-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
              <span className="text-3xl">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Revenue</h2>
          <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-white">
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c4b5fd" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#c4b5fd" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="revenue" stroke="#a78bfa" strokeWidth={2} dot={{ fill: '#a78bfa', r: 4 }} fill="url(#colorRevenue)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Active Users Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Active Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activeUsersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Bar dataKey="2024" fill="#a78bfa" radius={[8, 8, 0, 0]} />
              <Bar dataKey="2025" fill="#86efac" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Clubs */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Top Clubs</h2>
          <div className="space-y-4">
            {topClubs.map((club, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {club.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{club.name}</p>
                    <p className="text-xs text-gray-500">Jan 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">+{club.members}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}