import React from 'react'
import ProductList from '../components/ProductList';
function Home({ addToCart, addToWishlist }) {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gray-100 px-4 py-12 text-center sm:px-8 sm:py-16">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl"> <span className='  text-blue-600 hover:text-green-500
                 transition-all'>Shop Smart.</span> Shop Bettet.</h1>

                <p className=' mt-4 text-gray-600 text-lg'>Find the best products at the best prices.</p>

                <button className=' rounded-lg mt-4 px-6 bg-yellow-700 py-3 text-white'>Shop Now</button>
            </section>

            {/* Categorirs */}
            <section className="px-4 py-8 sm:px-8 sm:py-12">
                <h2 className=' mb-8 font-bold text-3xl'>Shop By Category</h2>

                <div className=' grid grid-cols-2 gap-5 md:grid-cols-4'>

                    <div className=' rounded-xl bg-gray-100 p-8 text-center'>
                        💻
                        <h3 className=' mt-2 font-semibold'>Laptop</h3>
                    </div>

                    <div className="rounded-xl bg-gray-100 p-8 text-center">
                        📱
                        <h3 className="mt-2 font-semibold">Mobiles</h3>
                    </div>

                    <div className="rounded-xl bg-gray-100 p-8 text-center">
                        🎧
                        <h3 className="mt-2 font-semibold">Headphones</h3>
                    </div>

                    <div className="rounded-xl bg-gray-100 p-8 text-center">
                        ⌚
                        <h3 className="mt-2 font-semibold">Accessories</h3>
                    </div>
                </div>
            </section>
            {/* iska matlab ye hai "ProductList, ye function le ja aur zarurat padne par use kar." */}
            <ProductList
                addToCart={addToCart}
                addToWishlist={addToWishlist}
            />
        </main>
    )
}

export default Home