import { useParams } from 'react-router-dom';
import products from '../data/products';
function ProductDetails({ addToCart }) {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))
    return (
        <div className=' mx-auto max-w-5xl p-8'>
            <h1 className=' mb-4 font-bold text-3xl'>
                {product.name}
            </h1>

            <p className=' text-lg font-semibold'>
                {product.price}
            </p>

            <img
                src={product.image}
                alt={product.name}
                className=' mt-6 h-72 w-full rounded-xl object-cover'
            />

            <p className=' mt-4 text-gray-600'>
                Category : {product.category}
            </p>

            <button
                onClick={() => { addToCart(product) }}
                className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"> ❤️ Add to Cart
            </button>
        </div>
    )
}

export default ProductDetails