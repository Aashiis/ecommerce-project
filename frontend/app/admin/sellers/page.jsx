'use client'
import Sidebar from '@/components/admin_components/Sidebar'
import React, { useState } from 'react'
import { FiEdit, FiSearch, FiTrash } from 'react-icons/fi'

const page = () => {

    const handleSearch = (term) => {
        // Simulate a search action (e.g., filter products or call an API)
        console.log('Searching for:', term);
        // Example of setting filtered results (you can implement actual search logic)
        setSearchResults([
            // Filter your products based on the search term
        ]);
    };


    return (
        <div>
            <div className="flex h-screen">
                <Sidebar active="Sellers" />
                <div className=" w-full h-screen overflow-x-hidden overflow-y-scroll">
                    <div className="mt-10">
                        <ProductSearchBar onSearch={handleSearch} />
                    </div>
                    <div className="flex mt-10 mb-2 ml-5 mr-5">
                        <h1 className=" text-3xl ">Sellers</h1>
                        {/* <Link href="/admin/categories/add-customer" className="bg-blue-600 p-2 rounded ml-auto pmw hover:bg-blue-500 h-10">Add Category</Link> */}
                    </div>
                    <div className="mx-auto rounded-lg border overflow-x-scroll bg-white shadow-lg ml-5 mr-5">
                        <table className=" mx-auto min-w-full table-auto">
                            <thead className="bg-gray-200 text-sm text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left">Profile Pic</th>
                                    <th className="px-4 py-3 text-left">Seller Id</th>
                                    <th className="px-4 py-3 text-left">Full Name</th>
                                    <th className="px-4 py-3 text-left">Email</th>
                                    <th className="px-4 py-3 text-left">Phone</th>
                                    <th className="px-4 py-3 text-left">Password</th>
                                    <th className="px-4 py-3 text-left">Banner</th>
                                    <th className="px-4 py-3 text-left">Store Name</th>
                                    <th className="px-4 py-3 text-left">Website Url</th>
                                    <th className="px-4 py-3 text-left">Verification</th>
                                    <th className="px-4 py-3 text-left">Created At</th>
                                    <th className="px-4 py-3 text-left">Updated At</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellers.map((seller) => (
                                    <tr key={seller.sellerId} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            {seller.profilePic == null || seller.profilePic == "" ? (<FaCircleUser />
                                            )
                                                : (<img
                                                    src={seller.profilePic}
                                                    alt={seller.userName}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />)}
                                        </td>
                                        <td className="px-4 py-3">{seller.sellerId}</td>
                                        <td className="px-4 py-3">{seller.fullName}</td>
                                        <td className="px-4 py-3">{seller.email}</td>
                                        <td className="px-4 py-3">{seller.phone}</td>
                                        <td className="px-4 py-3">{seller.password}</td>
                                        <td className="px-4 py-3">{seller.bannerPic}</td>
                                        <td className="px-4 py-3">{seller.storeName}</td>
                                        <td className="px-4 py-3">{seller.websiteUrl}</td>
                                        <td className="px-4 py-3"><span
                                            className={`inline-block px-2 py-1 rounded-full text-xs ${seller.verification === 'Verified' ? 'bg-green-200 text-green-600' : 'bg-orange-200 text-orange-600'
                                                }`}
                                        >
                                            {seller.verification}
                                        </span></td>
                                        <td className="px-4 py-3">{seller.createdAt}</td>
                                        <td className="px-4 py-3">{seller.updatedAt}</td>

                                        <td className="px-4 py-3 flex space-x-2">
                                            <button className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                                                <FiEdit size={15} />
                                            </button>
                                            <button className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600">
                                                <FiTrash size={15} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

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
                    placeholder="Search sellers..."
                    className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FiSearch size={20} />
                </span>
            </form>
        </div>
    );
};

const sellers = [
    {
        "profilePic": "https://example.com/path/to/profile.jpg", // Optional
        "sellerId": "001",  // Auto-generated by the system
        "fullName": "John Doe",
        "email": "johndoe@example.com",
        "phone": "+1234567890",
        "password": "hashed_password_here",
        "bannerPic": "https://example.com/path/to/profile.jpg", // Optional
        "storeName": "Doe Enterprises",
        "websiteUrl": "https://doeenterprises.com", // Optional
        "verification": "Verified", // Default status, can be 'Approved' or 'Rejected'
        "createdAt": "2024-12-20T07:00:00Z", // Auto-generated timestamp
        "updatedAt": null // Updated timestamp after manual verification
    },
    {
        "profilePic": "https://example.com/path/to/profile.jpg", // Optional
        "sellerId": "002",  // Auto-generated by the system
        "fullName": "John Cena",
        "email": "johncena@example.com",
        "phone": "+1234567890",
        "password": "hashed_password_here",
        "bannerPic": "https://example.com/path/to/profile.jpg", // Optional
        "storeName": "Doe Enterprises",
        "websiteUrl": "https://doeenterprises.com", // Optional
        "verification": "Pending", // Default status, can be 'Approved' or 'Rejected'
        "createdAt": "2024-12-20T07:00:00Z", // Auto-generated timestamp
        "updatedAt": null // Updated timestamp after manual verification
    },

]