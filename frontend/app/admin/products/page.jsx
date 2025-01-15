import AllProducts from "@/components/admin_components/AllProducts"
import Sidebar from "@/components/admin_components/Sidebar"

const page = () => {
    return (
        <div className="flex h-screen">
            <Sidebar active="Products" />
            <AllProducts />
        </div>
    )
}

export default page
