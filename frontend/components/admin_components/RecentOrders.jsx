// components/RecentOrders.js

import React from 'react';

const orders = [
  {
    id: 'ORD12345',
    date: '2024-12-15',
    productImage: '/products/wireless-headphone.webp',
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield',
    paymentType: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'ORD12346',
    date: '2024-12-14',
    productImage: '/products/gaming-mouse.webp',
    customerName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    address: '456 Oak Rd, Springfield',
    paymentType: 'PayPal',
    status: 'Processing',
  },
  {
    id: 'ORD12347',
    date: '2024-12-15',
    productImage: '/products/smart-watch.webp',
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield',
    paymentType: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'ORD12348',
    date: '2024-12-14',
    productImage: '/products/gaming-mouse.webp',
    customerName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    address: '456 Oak Rd, Springfield',
    paymentType: 'PayPal',
    status: 'Processing',
  },
  // Add more orders as needed
];

const RecentOrders = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Recent Orders</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-sm text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">
                  <img
                    src={order.productImage}
                    alt={order.id}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3">{order.customerName}</td>
                <td className="px-4 py-3">{order.email}</td>
                <td className="px-4 py-3">{order.phone}</td>
                <td className="px-4 py-3">{order.address}</td>
                <td className="px-4 py-3">{order.paymentType}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      order.status === 'Completed' ? 'bg-green-200 text-green-600' : 'bg-orange-200 text-orange-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
