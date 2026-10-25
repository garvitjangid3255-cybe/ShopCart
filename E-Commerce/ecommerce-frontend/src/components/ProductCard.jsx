function ProductCard({ product, addToWishlist, addToCart }) {
    return (
        <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <img
                src={product.image}
                alt={product.name}
                className="h-44 w-full object-contain bg-gray-50 p-3 sm:h-52"
            />

            <div className=" p-4">
                <h2 className=" text-xl font-semibold">{product.name}</h2>

                <p className=" mt-2 text-gray-500">
                    {product.category}
                </p>

                <p className=" mt-2 text-xl font-bold">
                    ₹{product.price}
                </p>

                <button
                    onClick={() => { addToCart(product) }}
                    className=" mt-4 w-full rounded-lg bg-black p-2 text-white" >Add to Cart
                </button>

                <button
                    onClick={() => { addToWishlist(product) }}
                    className=" mt-2 w-full rounded-lg border  py-2 border-red-500 " >❤️ Add to Wishlist
                </button>
            </div>
        </div>
    )
}

export default ProductCard

