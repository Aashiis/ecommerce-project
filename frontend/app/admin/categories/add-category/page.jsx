'use client'
import { useState } from "react";

export default function UploadCategory() {
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [message, setMessage] = useState('');
  const [filePath, setFilePath] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', categoryName);
    formData.append('slug', categorySlug);

    try {
      const res = await fetch('/api/add-category', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setFilePath(data.filePath);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setMessage(`Image uploading failed: ${err}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload Category
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ----------------------------------Image Upload-------------------------------------- */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Category Image
            </label>
            <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image Selected</span>
              )}
              <input
                type="file"
                id="image"
                accept=".png, .jpg"
                onChange={handleImageChange}
                className="sr-only"
              />
              <label
                htmlFor="image"
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
              >
                Choose Image
              </label>
            </div>
          </div>

          {/* ----------------------------------Category Name-------------------------------------- */}
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="mt-1 pl-1 pt-3 pb-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* ----------------------------------Category Slug-------------------------------------- */}
          <div>
            <label
              htmlFor="categorySlug"
              className="block text-sm font-medium text-gray-700"
            >
              Category Slug
            </label>
            <input
              type="text"
              id="categorySlug"
              value={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
              placeholder="Enter category slug"
              className="mt-1 pl-1 pt-3 pb-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* ----------------------------------Submit Button-------------------------------------- */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Upload Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
