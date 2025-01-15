// pages/admin/products.js
export default function ManageProducts() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Product A</td>
              <td className="border border-gray-300 px-4 py-2">$50</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  