'use client'
import Sidebar from "@/components/admin_components/Sidebar"
import CircularProgressIndicator from "@/components/base_components/CircularProgressIndicator";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi"

const page = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "/api/product-categories";

        // Fetch data from API
        fetch(API_URL)
            .then((response) => response.json())
            .then((json) => {
                setCategories(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch data", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return (<>
        {/* <Navbar /> */}
        <div className=" page-container">
            <CircularProgressIndicator />
        </div>
        {/* <Footer /> */}
    </>);
    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <div className="flex h-screen">
            <Sidebar active="Categories" />
            <div className=" w-full h-screen overflow-x-hidden overflow-y-scroll">
                <div className="flex mt-10 mb-2 ml-5 mr-5">
                    <h1 className=" text-3xl ">Categories</h1>
                    <Link href="/admin/categories/add-category" className="bg-blue-600 p-2 rounded ml-auto pmw hover:bg-blue-500 h-10">Add Category</Link>
                </div>
                <div className="mx-auto rounded-lg border bg-white shadow-lg ml-5 mr-5">
                    <table className=" mx-auto min-w-full table-auto">
                        <thead className="bg-gray-200 text-sm text-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-left">Category Image</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Slug</th>
                                <th className="px-4 py-3 text-left">Added Date</th>

                                <th className="px-4 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.category_id} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <img
                                            src={category.image_url}
                                            alt={category.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3">{category.name}</td>
                                    <td className="px-4 py-3">{category.slug}</td>
                                    <td className="px-4 py-3">{category.added_date}</td>

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
    )
}

export default page