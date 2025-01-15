'use client'
import Sidebar from "@/components/admin_components/Sidebar"
import Link from "next/link"
import { useState } from "react";
import { FiEdit, FiTrash, FiSearch } from "react-icons/fi"
import { FaCircleUser } from "react-icons/fa6";

const page = () => {

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
        <div>
            <div className="flex h-screen">
                <Sidebar active="Customers" />
                <div className=" w-full h-screen overflow-x-hidden overflow-y-scroll">
                    <div className="mt-10">
                        <ProductSearchBar onSearch={handleSearch} />
                    </div>
                    <div className="flex mt-10 mb-2 ml-5 mr-5">
                        <h1 className=" text-3xl ">Customers</h1>
                        {/* <Link href="/admin/categories/add-customer" className="bg-blue-600 p-2 rounded ml-auto pmw hover:bg-blue-500 h-10">Add Category</Link> */}
                    </div>
                    <div className="mx-auto rounded-lg border overflow-x-scroll bg-white shadow-lg ml-5 mr-5">
                        <table className=" mx-auto min-w-full table-auto">
                            <thead className="bg-gray-200 text-sm text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left">Profile Pic</th>
                                    <th className="px-4 py-3 text-left">Customer Id</th>
                                    <th className="px-4 py-3 text-left">First Name</th>
                                    <th className="px-4 py-3 text-left">Last Name</th>
                                    <th className="px-4 py-3 text-left">User Email</th>
                                    <th className="px-4 py-3 text-left">Phone</th>
                                    <th className="px-4 py-3 text-left">Password</th>
                                    <th className="px-4 py-3 text-left">Address</th>
                                    <th className="px-4 py-3 text-left">Alternate phone</th>
                                    <th className="px-4 py-3 text-left">Preferences</th>
                                    <th className="px-4 py-3 text-left">Created At</th>
                                    <th className="px-4 py-3 text-left">Updated At</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.customerId} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            {customer.profilePic == null || customer.profilePic == "" ? (<FaCircleUser />
                                                )
                                                :(<img
                                                src={customer.profilePic}
                                                alt={customer.userName}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />)}
                                        </td>
                                        <td className="px-4 py-3">{customer.customerId}</td>
                                        <td className="px-4 py-3">{customer.firstName}</td>
                                        <td className="px-4 py-3">{customer.lastName}</td>
                                        <td className="px-4 py-3">{customer.email}</td>
                                        <td className="px-4 py-3">{customer.phone}</td>
                                        <td className="px-4 py-3">{customer.password}</td>
                                        <td className="px-4 py-3">{JSON.stringify(customer.address)}</td>
                                        <td className="px-4 py-3">{customer.alternatePhone}</td>
                                        <td className="px-4 py-3">{JSON.stringify(customer.preferences)}</td>
                                        <td className="px-4 py-3">{customer.createdAt}</td>
                                        <td className="px-4 py-3">{customer.updatedAt}</td>

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
                    placeholder="Search customers..."
                    className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FiSearch size={20} />
                </span>
            </form>
        </div>
    );
};



const customers = [
    {
        "profilePic": "",
        "customerId": "CUST001",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "phone": "+1-123-456-7890",
        "password": "hashed_password_here",
        "address": {
            "province": "Gandaki",
            "city": "Kawasoti",
            "zone": "Thana Chowk",
            "address": "Hupsekot 1 jugepani",
        },
        "alternatePhone": "+1-987-654-3210",
        "preferences": {
            "newsletterSubscription": true,
            "preferredPaymentMethod": "Credit Card"
        },
        "createdAt": "2024-12-19T14:35:00Z",
        "updatedAt": "2024-12-19T15:00:00Z"
    },
    {
        "profilePic": "",
        "customerId": "CUST002",
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "janesmith@example.com",
        "phone": "+1-234-567-8901",
        "password": "hashed_password_here",
        "address": {
            "province": "Gandaki",
            "city": "Kawasoti",
            "zone": "Thana Chowk",
            "address": "Hupsekot 1 jugepani",
        },
        "alternatePhone": null,
        "preferences": {
            "newsletterSubscription": false,
            "preferredPaymentMethod": "PayPal"
        },
        "createdAt": "2024-12-19T14:40:00Z",
        "updatedAt": "2024-12-19T15:10:00Z"
    }
]