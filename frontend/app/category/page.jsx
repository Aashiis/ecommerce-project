'use client'
import CircularProgressIndicator from "@/components/base_components/CircularProgressIndicator";
import Footer from "@/components/base_components/Footer";
import Navbar from "@/components/base_components/Navbar";
import { useSearchParams } from "next/navigation"

const page = () => {
    const category = useSearchParams();
    const category_name = category.get("name");
  return (
    <>
    <Navbar />
    <div className="h-[90vh]">
        So, You clicked "{category_name}" But, currently this Page is in development process so be patient.
        <div className="body-for-rotator page-container">
      <CircularProgressIndicator />
    </div>
    </div>
    <Footer />
    
    </>
  )
}

export default page
