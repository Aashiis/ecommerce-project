// components/AllProducts.js
'use client'
import { FiEye, FiEdit, FiTrash } from 'react-icons/fi'; // Importing icons
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Search icon from react-icons
import Link from 'next/link';

const products = [
  {
    id: 'P001',
    image: '/products/smart-watch.webp',
    name: 'Product 1',
    price: '$100',
    stock: 50,
    sold: 20,
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 'P002',
    image: '/products/gaming-mouse.webp',
    name: 'Product 2',
    price: '$200',
    stock: 30,
    sold: 15,
    category: 'Clothing',
    rating: 4.0,
  },
  {
    id: 'P003',
    image: '/products/wireless-headphone.webp',
    name: 'Product 3',
    price: '$150',
    stock: 70,
    sold: 40,
    category: 'Home',
    rating: 4.8,
  },
  {
    id: 'P004',
    image: '/products/smart-watch.webp',
    name: 'Product 1',
    price: '$100',
    stock: 50,
    sold: 20,
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 'P005',
    image: '/products/gaming-mouse.webp',
    name: 'Product 2',
    price: '$200',
    stock: 30,
    sold: 15,
    category: 'Clothing',
    rating: 4.0,
  },
  {
    id: 'P006',
    image: '/products/wireless-headphone.webp',
    name: 'Product 3',
    price: '$150',
    stock: 70,
    sold: 40,
    category: 'Home',
    rating: 4.8,
  },
  // Add more products as needed
];

const AllProducts = () => {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Simulate a search action (e.g., filter products or call an API)
    console.log('Searching for:', term);
    // Example of setting filtered results (you can implement actual search logic)
    setSearchResults([
      // Filter your products based on the search term
    ]);
  };


  return (
    <div className=" pfg h-screen w-full overflow-x-hidden overflow-y-scroll">
      <div className='h-10'></div>
      <ProductSearchBar onSearch={handleSearch} />

      <div className=" mx-auto my-10 max-w-4xl">
        <div className="flex mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">All Products</h2>
          <div className='ml-auto'>
            <Link href="/admin/products/add-product" className="bg-blue-600 p-2 rounded pmw hover:bg-blue-500">Add Product</Link>
          </div>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Product Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Sold</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.price}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3">{product.sold}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.rating}⭐</td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                      <FiEye size={20} />
                    </button>
                    <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                      <FiEdit size={20} />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                      <FiTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;


// --------------------------------------product search bar---------------------------------------------------------
const ProductSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass the search term to parent component
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search products..."
          className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FiSearch size={20} />
        </span>
      </form>
    </div>
  );
};