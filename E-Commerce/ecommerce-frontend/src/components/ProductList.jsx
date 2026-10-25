import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

function ProductList({ addToCart, addToWishlist }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filterProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                Featured Products
            </h2>

            <div className="mb-6">
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-6 w-full rounded-lg border p-3 sm:max-w-xs"
            >
                <option value="All">All Categories</option>
                <option value="Laptop">Laptop</option>
                <option value="Mobile">Mobile</option>
                <option value="Computer">Computer</option>
                <option value="Tablet">Tablet</option>
                <option value="Audio">Audio</option>
            </select>

            {filterProducts.length === 0 ? (
                <p className="py-8 text-center text-gray-500">
                    No products found. Try another search or category.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {filterProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            addToWishlist={addToWishlist}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProductList;
