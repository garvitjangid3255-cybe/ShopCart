import React from 'react'

function Wishlist({ wishlist, removeToWishlist, addToCart }) {
    return (
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
           <h1 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                My Wishlist
            </h1>

            {
                wishlist.length === 0 ? (
                    <p className="rounded-lg bg-gray-50 p-6 text-center text-gray-500">
                        Your Wishlist is empty. Add Some Product
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {wishlist.map((product) => (
                            <div
                                key={product.id}
                                className=' rounded-xl border p-4 shadow-sm'
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className=' h-40 w-full rounded-lg object-cover'
                                />

                                <h2 className=' mt-2 text-xl font-bold'>
                                    {product.name}
                                </h2>

                                <p className=' mt-2 font-bold'>
                                    ₹{product.price}
                                </p>

                                <button onClick={() => removeToWishlist(product.id)}
                                    className=' rounded-lg border px-3 py-1'
                                >Remove</button>

                                <button
                                    onClick={() => { addToCart(product) }}
                                    className=" mt-4 w-full rounded-lg border-b-4 bg-gray-300 p-2 text-red-700" > ❤️ Add to Cart
                                </button>
                            </div>

                        ))}

                    </div>

                )
            }
        </section>
    )
}

export default Wishlist