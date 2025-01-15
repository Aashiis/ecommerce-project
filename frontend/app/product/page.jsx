'use client'
import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Footer from "@/components/base_components/Footer";
import Navbar from "@/components/base_components/Navbar";
import ProductList from "@/components/base_components/ProductList";

const ProductPage = () => {

    const product = {
        id: 1,
        name: "Awesome Product",
        image: "/products/gaming-mouse.webp",
        short_desc: "This is a short description of the product. It's an amazing item with excellent features and a sleek design.",
        long_desc: "This is the detailed description of the product. It includes all the necessary information, features, and specifications about the product to help users make informed decisions.",
        brand: "No Brand",
        price: 999,
        discount: 11,
        seller: "",
        rating: 3,
        reviews: 3,
    }

    // Calculate discounted price if discount is provided
    const discountedPrice = product.discount
        ? (product.price * (100 - product.discount)) / 100
        : null;

    const [showZoom, setShowZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, cursorX: 0, cursorY: 0 });

    const handleMouseEnter = () => setShowZoom(true);
    const handleMouseLeave = () => setShowZoom(false);
    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100; // Zoom position X
        const y = ((e.clientY - rect.top) / rect.height) * 100; // Zoom position Y
        const cursorX = e.clientX - rect.left; // Cursor X relative to the image
        const cursorY = e.clientY - rect.top; // Cursor Y relative to the image
        setZoomPosition({ x, y, cursorX, cursorY });
    };


    const [quantity, setQuantity] = useState(1);
    const reviews = [
        { name: "John Doe", rating: 5, comment: "Excellent product! Highly recommended." },
        { name: "Jane Smith", rating: 4, comment: "Great quality but slightly expensive." },
        { name: "David Lee", rating: 3, comment: "Good product, but delivery took longer than expected." },
    ];

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };


    const [currentImage, setCurrentImage] = useState(product.image)

    const mouseEnteredToImage = (image) => setCurrentImage(image);

    const image_links = ["/products/gaming-mouse.webp", "/products/smart-watch.webp", "/products/gaming-mouse.webp", "/products/wireless-headphone.webp"];
    const other_images = [];
    for (let i = 0; i < image_links.length; i++) {
        other_images.push(<img className="mt-3 ml-3 border hover:border-red-400" src={image_links[i]} key={i} height={90} width={90} onMouseEnter={() => mouseEnteredToImage(image_links[i])} />)
    }


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
                <div className="max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Top Section */}

                    <div className="flex flex-col lg:flex-row">
                        
                        <div className="hidden sm:block h-full w-aut90">
                            {other_images}
                        </div>
                        {/* Product Image */}
                        <div className="lg:w-1/2 p-4 relative">
                            <div
                                className="overflow-hidden rounded-lg group"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                <img
                                    // src="https://via.placeholder.com/400"
                                    src={currentImage}
                                    alt="Product"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Zoom Lens */}
                                {showZoom && (
                                    <div
                                        className="absolute pointer-events-none w-20 h-20 border-2 border-gray-300 rounded-full bg-no-repeat bg-white opacity-75"
                                        style={{
                                            backgroundImage: `url('${currentImage}')`,
                                            backgroundSize: "200%",
                                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                            top: `${zoomPosition.cursorY - 40}px`,
                                            left: `${zoomPosition.cursorX - 40}px`,
                                        }}
                                    ></div>
                                )}
                            </div>


                            {/* Zoomed Popup */}
                            {showZoom && (
                                <div
                                    className="absolute top-0 left-full ml-4 w-[50vw] h-full border border-gray-300 bg-white rounded-lg shadow-lg overflow-hidden"
                                    style={{
                                        // backgroundImage: "url('https://via.placeholder.com/400')",
                                        backgroundImage: `url('${currentImage}')`,
                                        backgroundSize: "200%",
                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                    }}
                                ></div>
                            )}
                        </div>
                        {/* </div> */}

                        {/* Product Details */}
                        <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                            {/* Title and Description */}
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    {product.short_desc}
                                </p>
                                {/* Ratings */}
                                <div className="flex">
                                    {"⭐".repeat(product.rating)}  <h6 className=" text-xs">{product.reviews} Ratings</h6>
                                </div>

                                {/* Brand */}
                                <div className="flex mt-2">
                                    <h6 className=" text-xs">Brand:</h6>  <h6 className=" text-xs">{product.brand}</h6>
                                </div>


                            </div>
                            <div >
                                <div className="flex gap-2">


                                    {product.discount && (
                                        <div className="text-xl text-red-600 font-bold">
                                            {product.discount}% OFF
                                        </div>
                                    )}
                                    {/* Rupees */}
                                    {product.discount && (
                                        <span className="line-through text-2xl text-gray-400">
                                            Rs.{product.price}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-4xl text-orange-500">Rs.{discountedPrice || product.price}</h1>
                                </div>

                            </div>

                            {/* Quantity Selector and Buttons */}
                            <div>
                                <div className="mb-6 flex items-center space-x-4">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-medium text-gray-800">{quantity}</span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex space-x-4">
                                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-500">
                                        Buy Now
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg shadow hover:bg-gray-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-px mr-5 mt-2 bg-gray-300">

                        </div>
                        <div className=" hidden lg:block">
                            <DeliveryInfo deliveryCharge={10} sellerName={"SuperSeller Pvt. Ltd."} />
                        </div>
                    </div>

                    {/* Full Description */}
                    <div className="mt-6 p-6 bg-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Full Description</h2>
                        <p className="text-gray-600">
                            {product.long_desc}
                        </p>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-6 p-6 bg-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
                        {reviews.map((review, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-blue-500 font-bold text-lg mr-2">
                                        {"★".repeat(review.rating)}
                                    </span>
                                    <span className="text-gray-600">{review.name}</span>
                                </div>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-5">
                <h1>Related Products:</h1>
            </div>
            <ProductList />
            <Footer />
        </>
    );
};

export default ProductPage;
