import storeInfo from "@/app/config/storeInfo"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          {storeInfo.name}
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Products
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md pl-4 pr-10 py-2 w-40 sm:w-72 text-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button className="absolute right-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m-3.65 1.35A7 7 0 1117 10.65a7 7 0 01-3.65 7z"
              />
            </svg>
          </button>
        </div>

        {/* Cart and Account */}
        <div className="flex items-center space-x-4">
          <a
            href="/cart"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" /><circle cx="7" cy="22" r="2" /><circle cx="17" cy="22" r="2" /></svg>

          </a>
          <a
            href="/account"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>


          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
