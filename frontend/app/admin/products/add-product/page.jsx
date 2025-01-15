'use client'
import CircularProgressIndicator from '@/components/base_components/CircularProgressIndicator';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ProductForm = () => {

  // -----------------------------fetching categories from the server-----------------------------------

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



  // ------------------------------------------Handling form submit-----------------------------------------------
  const [formData, setFormData] = useState({
    product_id: '',//no need
    name: '',
    short_desc: '',
    full_desc: '',
    category_id: '',
    brand: '',
    price: 0,
    discount: 0,
    stock_quantity: 0,
    sku: '',
    image_url: '',
    added_date: '',//no need
    last_updated: '', //no need
    is_featured: false,
    is_new_arrival: false,
    rating: '', //no need
    review_count: '',//no need
    tags: '',
    seller_id: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setFormData({
          product_id: '',//no need
          name: '',
          short_desc: '',
          full_desc: '',
          category_id: '',
          brand: '',
          price: 0,
          discount: 0,
          stock_quantity: 0,
          sku: '',
          image_url: '',
          added_date: '',//no need
          last_updated: '', //no need
          is_featured: false,
          is_new_arrival: false,
          rating: '', //no need
          review_count: '',//no need
          tags: '',
          seller_id: ''
        });
      } else {
        alert('Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // ---------------------------------Fetching categories------------------------------------
  if (loading) return (<>
    {/* <Navbar /> */}
    <div className=" page-container">
      <CircularProgressIndicator />
    </div>
    {/* <Footer /> */}
  </>);
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <form onSubmit={handleSubmit} className="product-form mx-auto p-6 bg-gray-100 shadow-lg rounded-lg max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ------------------------------------------name-------------------------------------- */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {/* -----------------------------------------short desc---------------------------------- */}
        <div className="col-span-2">
          <label className="block font-medium">Short Description</label>
          <textarea
            name="short_desc"
            value={formData.short_desc}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        {/* -----------------------------------------------full desc----------------------------------- */}
        <div className="col-span-2">
          <label className="block font-medium">Full Description</label>
          <textarea
            name="full_desc"
            value={formData.full_desc}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        {/* ---------------------------------------category selector------------------------------------------------ */}
        <div className="mb-4">
          <label htmlFor="category_id" className="block text-gray-700 font-semibold mb-2">
            Select Category
          </label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" typeof='number' disabled>-- Choose a Category --</option>
            {categories.map((category)=>(
              <option key={category.category_id} value={category.category_id} >{category.name}</option>
            ))}
          </select>
        </div>

        {/* ---------------------------------------------brand---------------------------------------------- */}
        <div>
          <label className="block font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* ---------------------------------------------price----------------------------------------------------- */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            min={0}
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {/* --------------------------------------------------discount-------------------------------------------------------- */}
        <div>
          <label className="block font-medium">Discount</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* ---------------------------------------------------stock quantity---------------------------------------------------- */}
        <div>
          <label className="block font-medium">Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* -------------------------------------------------------sku---------------------------------------------------- */}
        <div>
          <label className="block font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* --------------------------------------------------------image url---------------------------------------------- */}
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* ---------------------------------------------------------is featured------------------------------------------------------------ */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_featured"
            checked={formData.is_featured}
            onChange={handleChange}
            className="form-checkbox"
          />
          <label className="font-medium">Is Featured</label>
        </div>
        {/* -------------------------------------------------------------is new arrival------------------------------------------------------------- */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_new_arrival"
            checked={formData.is_new_arrival}
            onChange={handleChange}
            className="form-checkbox"
          />
          <label className="font-medium">Is New Arrival</label>
        </div>
        {/* -----------------------------------------------------------tags------------------------------------------------------- */}
        <div className="col-span-2">
          <label className="block font-medium">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* ----------------------------------------------------------seller id--------------------------------------------------------- */}
        <div>
          <label className="block font-medium">Seller ID</label>
          <input
            type="text"
            name="seller_id"
            value={formData.seller_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      {/* ----------------------------------------------------------submit button------------------------------------------------------- */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Product
        </button>
      </div>
      {/* ----------------------------------------------------go back button-------------------------------------------------------- */}
      <div className="mt-6 text-center">
        <Link
          href="/admin/products"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Go Back
        </Link>
      </div>
    </form>
  );
};

export default ProductForm;
