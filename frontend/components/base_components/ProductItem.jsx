import Link from 'next/link';

const ProductItem = ({ product }) => {
    // Calculate discounted price if discount is provided
    const discountedPrice = product.discount
        ? (product.price * (100 - product.discount)) / 100
        : null;

    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-48 h-72 flex flex-col">
            <Link href={`/product?id=${product.id}`}>
                <div
                    className="w-full h-40 text-center bg-gray-100 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${product.image})` }}
                >
                    {product.discount && (
                        <div className="text-xs text-red-600 absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-white rounded">
                            {product.discount}% OFF
                        </div>
                    )}
                </div>
            </Link>
            <div className="p-2 flex-grow flex flex-col justify-between">
                <Link href={`/product?id=${product.id}`}>
                    <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors text-center">
                        {product.name}
                    </h3>
                </Link>
                <div className="h-6 overflow-hidden" title={product.description}>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                        {product.description.substring(0, 30)}...
                    </p>
                </div>
                <div className="mt-2 text-center">

                    <div className="text-sm font-bold text-blue-600 flex justify-center gap-1">
                        {product.discount && (
                            <span className="line-through text-gray-400">
                                Rs.{product.price}
                            </span>
                        )}
                        <span>Rs.{discountedPrice || product.price}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <Link href={`/product?id=${product.id}`}>
                    <button  className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition">
                        Get
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
