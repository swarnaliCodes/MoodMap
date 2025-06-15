import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {
  const sentimentData = [
    { name: 'Positive', value: 65, color: '#22c55e' },
    { name: 'Negative', value: 20, color: '#ef4444' },
    { name: 'Neutral', value: 15, color: '#71717a' }
  ];

  const monthlyData = [
    { month: 'Jan', positive: 120, negative: 30, neutral: 25 },
    { month: 'Feb', positive: 135, negative: 25, neutral: 30 },
    { month: 'Mar', positive: 150, negative: 35, neutral: 20 },
    { month: 'Apr', positive: 140, negative: 20, neutral: 35 },
    { month: 'May', positive: 165, negative: 15, neutral: 25 },
    { month: 'Jun', positive: 180, negative: 25, neutral: 30 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analytics <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real-time insights from our sentiment analysis engine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pie Chart */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sentiment Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              {sentimentData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Monthly Trends
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="positive" fill="#22c55e" name="Positive" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="negative" fill="#ef4444" name="Negative" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="neutral" fill="#71717a" name="Neutral" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-gradient-to-r from-positive-500 to-positive-400 p-6 rounded-xl text-white text-center">
            <div className="text-3xl font-bold mb-2">1,247</div>
            <div className="text-positive-100">Positive Reviews</div>
          </div>
          <div className="bg-gradient-to-r from-negative-500 to-negative-400 p-6 rounded-xl text-white text-center">
            <div className="text-3xl font-bold mb-2">384</div>
            <div className="text-negative-100">Negative Reviews</div>
          </div>
          <div className="bg-gradient-to-r from-neutral-500 to-neutral-400 p-6 rounded-xl text-white text-center">
            <div className="text-3xl font-bold mb-2">289</div>
            <div className="text-neutral-100">Neutral Reviews</div>
          </div>
          <div className="bg-gradient-to-r from-primary-500 to-primary-400 p-6 rounded-xl text-white text-center">
            <div className="text-3xl font-bold mb-2">94.2%</div>
            <div className="text-primary-100">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;