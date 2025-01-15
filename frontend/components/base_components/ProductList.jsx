import ProductItem from "./ProductItem";

const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description: 'Experience high-quality sound with these noise-cancelling headphones.',
        price: 5000,
        discount: 20,
        image: 'products/wireless-headphone.webp', // Example image
    },
    {
        id: 2,
        name: 'Smartwatch',
        description: 'Track your fitness and stay connected on the go.',
        price: 8000,
        image: 'products/smart-watch.webp',
    },
    {
        id: 3,
        name: 'Gaming Mouse',
        description: 'Enhance your gaming experience with precision and comfort.',
        price: 7000,
        discount: 10,
        image: 'products/gaming-mouse.webp',
    },
    {
        id: 4,
        name: 'Smartwatch',
        description: 'Track your fitness and stay connected on the go.',
        price: 9000,
        image: 'products/smart-watch.webp',
    },
    {
        id: 5,
        name: 'Gaming Mouse',
        description: 'Enhance your gaming experience with precision and comfort.',
        price: 6000,
        discount: 10,
        image: 'products/gaming-mouse.webp',
    },
    {
        id: 6,
        name: 'Gaming Mouse',
        description: 'Enhance your gaming experience with precision and comfort.',
        price: 6000,
        discount: 10,
        image: 'products/gaming-mouse.webp',
    },
];

const ProductList = () => {
    return (
        <>
            <div className=" flex flex-wrap justify-center gap-4 mb-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
