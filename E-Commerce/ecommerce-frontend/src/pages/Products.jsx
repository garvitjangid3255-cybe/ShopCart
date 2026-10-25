import React from 'react'
import ProductList from '../components/ProductList'

function Products({ addToCart, addToWishlist }) {
    return (
        <main>
            <h1 className=' px-8 pt-10 text-3xl font-bold'>
                All Products
            </h1>
            <ProductList
                addToCart={addToCart}
                addToWishlist={addToWishlist}

            />
        </main>
    )
}

export default Products