import Link from "next/link";

// const categories = [
//   { id: 1, name: "Electronics", image: "/category-image/electronics.jpg", link: "/category?name=electronics" },// added
//   { id: 2, name: "Skincare", image: "/category-image/face-care.jpg", link: "/category?name=skincare" },
//   { id: 3, name: "Groceries", image: "/category-image/foods.jpg", link: "/category?name=groceries" },
//   { id: 4, name: "Books & Stationery", image: "/category-image/books.jpg", link: "/category?name=books-stationery" },
//   { id: 5, name: "Technology", image: "/category-image/tech-category.jpg", link: "/category?name=tech-category" },
//   { id: 6, name: "Fitness Equipment", image: "/category-image/fitness.jpg", link: "/category?name=fitness-equipment" },
//   { id: 7, name: "Educational Supplies", image: "/category-image/educational-supplies.jpg", link: "/category?name=educational-supplies" },
//   { id: 8, name: "Beauty Products", image: "/category-image/beauty-products.jpg", link: "/category?name=beauty-products" },
//   { id: 9, name: "Sports Gear", image: "/category-image/sports-gear.jpg", link: "/category?name=sports-gear" },
//   { id: 10, name: "Artwork & Crafts", image: "/category-image/art-crafts.jpg", link: "/category?name=artwork-crafts" },
//   { id: 11, name: "Men's Clothing", image: "/category-image/mens-clothing.jpg", link: "/category?name=mens-clothing" },
//   { id: 12, name: "Women's Clothing", image: "/category-image/womens-clothing.jpg", link: "/category?name=womens-clothing" },
//   { id: 13, name: "Kids' Products", image: "/category-image/kids-products.jpg", link: "/category?name=kids-products" },
//   { id: 14, name: "Toys & Games", image: "/category-image/toys-games.jpg", link: "/category?name=toys-games" },
//   { id: 15, name: "Smartphones", image: "/category-image/smartphones.jpg", link: "/category?name=smartphones" },
//   { id: 16, name: "Furniture", image: "/category-image/furniture.jpg", link: "/category?name=furniture" },
// ];


const Categories = ({categories}) => {

  return (
    <div className="grid-cols-8 gap-0 border border-gray-200 hidden sm:grid">
      {categories.map((category) => (
        <Link
          key={category.category_id}
          href={`/category?name=${category.slug}`}
          className="relative h-40 border border-gray-300 group"
        >
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm font-medium px-2 py-1 rounded">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
