// components/Sidebar.js
import storeInfo from "@/app/config/storeInfo";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ active }) {
    return (
        <div className="w-64  pbg pmw flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">{storeInfo.name}</h2>
            <nav className="flex flex-col gap-4 w-60 overflow-y-scroll overflow-x-hidden">
                <p className="font-mono text-gray-400">General</p>
                <SidebarItem href="/admin/dashboard" title="Dashboard" icon="/icons/dashboard.svg" active={active} />
                <SidebarItem href="/admin/products" title="Products" icon="/icons/products.svg" active={active} />
                <SidebarItem href="/admin/categories" title="Categories" icon="/icons/categories.svg" active={active} />
                <SidebarItem href="/admin/orders" title="Orders" icon="/icons/orders.svg" active={active} />
                <SidebarItem href="/admin/settings" title="Settings" icon="/icons/settings.svg" active={active} />
                <p className="font-mono text-gray-400">Users</p>
                {/* <SidebarItem href="/admin/profile" title="Profile" icon="/icons/profile.svg" active={active} /> */}
                <SidebarItem href="/admin/customers" title="Customers" icon="/icons/customers.svg" active={active} />
                <SidebarItem href="/admin/sellers" title="Sellers" icon="/icons/sellers.svg" active={active} />
                <p className="font-mono text-gray-400">Others</p>
                <SidebarItem href="/admin/reviews" title="Reviews" icon="/icons/reviews.svg" active={active} />
                <SidebarItem href="" title="" />
            </nav>
        </div>
    );
}

const SidebarItem = ({ href, title, icon, active }) => {
    return (
        <>

            {active == title ? (<Link
                className="flex items-center gap-2 px-4 py-2 bg-black rounded-md shadow-lg pmw   hover:text-blue-500 hover:shadow-xl transition-all duration-300 ease-in-out"
                href={href}
            >
                {/* Icon Section */}
                {icon && <span className="text-xl text-blue-500 group-hover:text-white"><Image className=" fill-white" src={icon} width={24} height={24} alt="" /></span>}

                {/* Title Section */}
                {title}
            </Link>) :
                (<Link
                    className="flex items-center gap-2 px-4 py-2  rounded-md shadow-lg pmw   hover:text-blue-500 hover:shadow-xl transition-all duration-300 ease-in-out"
                    href={href}
                >
                    {/* Icon Section */}
                    {icon && <span className="text-xl text-blue-500 group-hover:text-white"><Image className=" fill-white" src={icon} width={24} height={24} alt="" /></span>}

                    {/* Title Section */}
                    {title}
                </Link>)}

        </>
    )
}
