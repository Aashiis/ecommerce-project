"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
    const images = [
        "/caraousel/caraousel1.png",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-8 mb-8">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg shadow-md">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full flex-shrink-0"
                            style={{ width: "100%", height: "400px" }}
                        >
                            <Image
                                src={image}
                                // src="/caraousel/caraousel1.png"
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Previous Button */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
                &#10095;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
