import { useNavigate } from 'react-router-dom';
function Cart({
    cart,
    removeToCart,
    increaseQuantity,
    decreaseQuantity
}) {

    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    )

    return (
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

            <h1 className="mb-8 text-3xl font-bold">
                Your Cart 🛒
            </h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">
                    Your cart is empty
                </p>
            ) : (

                <div className="space-y-4">

                    {/* Products */}
                    {cart.map((product) => (

                        <div
                            key={product.id}
                            className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                        >

                            <div>

                                <h2 className="font-semibold">
                                    {product.name}
                                </h2>

                                <p className="text-gray-500">
                                    {product.category}
                                </p>

                                {/* Product ki original price */}
                                <p className="font-bold">
                                    ₹{product.price}
                                </p>
                                <p className=' mt-2 font-semibold'>
                                    Item Total: ₹{product.price * product.quantity}
                                </p>
                                {/* Quantity */}
                                <div className="mt-3 flex items-center gap-3">

                                    <button
                                        onClick={() => decreaseQuantity(product.id)}
                                        className="rounded-lg border px-3 py-1"
                                    >
                                        −
                                    </button>

                                    <span>
                                        {product.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQuantity(product.id)}
                                        className="rounded-lg border px-3 py-1"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                            <button
                                onClick={() => removeToCart(product.id)}
                                className="rounded-lg bg-red-600 px-4 py-3 text-white"
                            >
                                Remove
                            </button>

                        </div>

                    ))}


                    {/* Total — map ke BAHAR */}
                    <div className="mt-8 border-t pt-6 sm:mt-10">
                        <h2 className="text-2xl font-bold">
                            Total Price: ₹{totalPrice}
                        </h2>

                        <button
                            onClick={() => navigate('/checkout')}
                            className=' mt-5 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-700'
                        >Proceed To Checkout
                        </button>
                    </div>

                </div>
            )}

        </section>
    )
}

export default Cart