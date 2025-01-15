'use client'
import Navbar from "@/components/base_components/Navbar";
import Caraousel from "@/components/base_components/Caraousel";
import ProductList from "@/components/base_components/ProductList";
import ListName from "@/components/base_components/ListName";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/base_components/Footer";
import { useEffect, useState } from "react";
import CircularProgressIndicator from "@/components/base_components/CircularProgressIndicator";

export default function Home() {
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
    <>
      <Navbar />
      <Caraousel />
      <ListName listname="New Arrival" />
      <ProductList />
      <div className="mt-10 hidden sm:block">
        <ListName listname="Categories" />
      </div>
      <div className="ml-10 mr-10 mb-10">
        <Categories categories={categories} />
      </div>
      <ListName listname="Top Selling" />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <Footer />
    </>
  );
}
