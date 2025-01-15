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
                <Sidebar active="Reviews" />
                <div className=" w-full h-screen overflow-x-hidden overflow-y-scroll">
                    <div className="mt-10">
                        <ProductSearchBar onSearch={handleSearch} />
                    </div>
                    <div className="flex mt-10 mb-2 ml-5 mr-5">
                        <h1 className=" text-3xl ">Reviews</h1>
                        {/* <Link href="/admin/categories/add-review" className="bg-blue-600 p-2 rounded ml-auto pmw hover:bg-blue-500 h-10">Add Category</Link> */}
                    </div>
                    <div className="mx-auto rounded-lg border overflow-x-scroll bg-white shadow-lg ml-5 mr-5">
                        <table className=" mx-auto min-w-full table-auto">
                            <thead className="bg-gray-200 text-sm text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left">Review Id</th>
                                    <th className="px-4 py-3 text-left">Rating</th>
                                    <th className="px-4 py-3 text-left">Product Id</th>
                                    <th className="px-4 py-3 text-left">User Id</th>
                                    <th className="px-4 py-3 text-left">Comment Id</th>
                                    <th className="px-4 py-3 text-left">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <tr key={review.review_id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">{review.review_id}</td>
                                        <td className="px-4 py-3">{review.rating}⭐</td>
                                        <td className="px-4 py-3">{review.product_id}</td>
                                        <td className="px-4 py-3">{review.user_id}</td>
                                        <td className="px-4 py-3">{review.comment}</td>
                                        

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
                    placeholder="Search reviews..."
                    className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FiSearch size={20} />
                </span>
            </form>
        </div>
    );
};



const reviews = [
    {
        "review_id": "R001",
        "rating": 5,
        "product_id": "P1001",
        "user_id": "U5001",
        "comment": "Excellent product! Exceeded my expectations."
    },
    {
        "review_id": "R002",
        "rating": 4,
        "product_id": "P1002",
        "user_id": "U5002",
        "comment": "Very good quality but delivery was a bit late."
    },
    {
        "review_id": "R003",
        "rating": 3,
        "product_id": "P1001",
        "user_id": "U5003",
        "comment": "Product is decent but not as described in the details."
    },
    {
        "review_id": "R004",
        "rating": 2,
        "product_id": "P1003",
        "user_id": "U5004",
        "comment": "Not satisfied with the product. It arrived damaged."
    },
    {
        "review_id": "R005",
        "rating": 1,
        "product_id": "P1004",
        "user_id": "U5005",
        "comment": "Terrible experience. Completely disappointed."
    }
]
