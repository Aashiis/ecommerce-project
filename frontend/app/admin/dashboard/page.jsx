import Dashboard from "@/components/admin_components/Dashboard";
import Sidebar from "@/components/admin_components/Sidebar";
import Head from "next/head";

const page = () => {
    return (
        <div className="flex h-screen">
            <Sidebar active="Dashboard" />
            <Dashboard />
        </div>
    )
}

export default page
