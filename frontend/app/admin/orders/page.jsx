'use client'
import Sidebar from "@/components/admin_components/Sidebar"
import Link from "next/link"
import { useState } from "react";
import { FiEdit, FiTrash, FiSearch } from "react-icons/fi"

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
                <Sidebar active="Orders" />
                <div className=" w-full h-screen overflow-x-hidden overflow-y-scroll">
                    <div className="mt-10">
                        <ProductSearchBar onSearch={handleSearch} />
                    </div>
                    <div className="flex mt-10 mb-2 ml-5 mr-5">
                        <h1 className=" text-3xl ">Orders</h1>
                        {/* <Link href="/admin/categories/add-order" className="bg-blue-600 p-2 rounded ml-auto pmw hover:bg-blue-500 h-10">Add Category</Link> */}
                    </div>
                    <div className="mx-auto rounded-lg border overflow-x-scroll bg-white shadow-lg ml-5 mr-5">
                        <table className=" mx-auto min-w-full table-auto">
                            <thead className="bg-gray-200 text-sm text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left">Order Image</th>
                                    <th className="px-4 py-3 text-left">Order Id</th>
                                    <th className="px-4 py-3 text-left">User Id</th>
                                    <th className="px-4 py-3 text-left">User Name</th>
                                    <th className="px-4 py-3 text-left">User Email</th>
                                    <th className="px-4 py-3 text-left">Ordered Date</th>
                                    <th className="px-4 py-3 text-left">Order Status</th>
                                    <th className="px-4 py-3 text-left">Payment Status</th>
                                    <th className="px-4 py-3 text-left">Payment Method</th>
                                    <th className="px-4 py-3 text-left">Product Id</th>
                                    <th className="px-4 py-3 text-left">Product Name</th>
                                    <th className="px-4 py-3 text-left">Quantity</th>
                                    <th className="px-4 py-3 text-left">Price per unit</th>
                                    <th className="px-4 py-3 text-left">Total Price</th>
                                    <th className="px-4 py-3 text-left">Tracking Number</th>
                                    <th className="px-4 py-3 text-left">Created At</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.orderId} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <img
                                                src={order.productImage}
                                                alt={order.userName}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-4 py-3">{order.orderId}</td>
                                        <td className="px-4 py-3">{order.userId}</td>
                                        <td className="px-4 py-3">{order.userName}</td>
                                        <td className="px-4 py-3">{order.userEmail}</td>
                                        <td className="px-4 py-3">{order.orderDate}</td>
                                        <td className="px-4 py-3">{order.orderStatus}</td>
                                        <td className="px-4 py-3">{order.paymentStatus}</td>
                                        <td className="px-4 py-3">{order.paymentMethod}</td>
                                        <td className="px-4 py-3">{order.productId}</td>
                                        <td className="px-4 py-3">{order.productName}</td>
                                        <td className="px-4 py-3">{order.quantity}</td>
                                        <td className="px-4 py-3">{order.pricePerUnit}</td>
                                        <td className="px-4 py-3">{order.totalPrice}</td>
                                        <td className="px-4 py-3">{order.trackingNumber}</td>
                                        <td className="px-4 py-3">{order.createdAt}</td>

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
                    placeholder="Search orders..."
                    className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FiSearch size={20} />
                </span>
            </form>
        </div>
    );
};



const orders = [
    {
        "orderId": "ORD12345",
        "userId": "USR001",
        "userName": "John Doe",
        "userEmail": "johndoe@example.com",
        "orderDate": "2024-12-19T14:35:00Z",
        "orderStatus": "Processing",
        "paymentStatus": "Paid",
        "paymentMethod": "Credit Card",
        "productId": "PRD001",
        "productName": "Wireless Headphones",
        "productImage": "/products/gaming-mouse.webp",
        "quantity": 1,
        "pricePerUnit": 99.99,
        "totalPrice": 99.99,
        "trackingNumber": "TRACK123456",
        "createdAt": "2024-12-19T14:35:00Z"
    },
    {
        "orderId": "ORD12346",
        "userId": "USR001",
        "userName": "John Doe",
        "userEmail": "johndoe@example.com",
        "orderDate": "2024-12-19T14:40:00Z",
        "orderStatus": "Processing",
        "paymentStatus": "Paid",
        "paymentMethod": "Credit Card",
        "productId": "PRD002",
        "productName": "Bluetooth Speaker",
        "productImage": "/products/smart-watch.webp",
        "quantity": 1,
        "pricePerUnit": 150.00,
        "totalPrice": 150.00,
        "trackingNumber": "TRACK123457",
        "createdAt": "2024-12-19T14:40:00Z"
    },
    {
        "orderId": "ORD12347",
        "userId": "USR001",
        "userName": "John Doe",
        "userEmail": "johndoe@example.com",
        "orderDate": "2024-12-19T14:40:00Z",
        "orderStatus": "Processing",
        "paymentStatus": "Paid",
        "paymentMethod": "Credit Card",
        "productId": "PRD002",
        "productName": "Bluetooth Speaker",
        "productImage": "/products/wireless-headphone.webp",
        "quantity": 1,
        "pricePerUnit": 150.00,
        "totalPrice": 150.00,
        "trackingNumber": "TRACK123457",
        "createdAt": "2024-12-19T14:40:00Z"
    },
]  