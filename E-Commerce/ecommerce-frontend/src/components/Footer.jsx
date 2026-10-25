import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="mt-16 bg-gray-900 text-gray-300">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">

                <div>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                        ShopCart 🛒
                    </h2>
                    <p className="text-sm leading-6">
                        Your one-stop shop for everyday essentials.
                        Discover products and enjoy a simple shopping experience.
                    </p>
                </div>

                <div>
                    <h3 className="mb-3 font-semibold text-white">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="hover:text-white" to="/">Home</Link></li>
                        <li><Link className="hover:text-white" to="/products">Products</Link></li>
                        <li><Link className="hover:text-white" to="/cart">Cart</Link></li>
                        <li><Link className="hover:text-white" to="/wishlist">Wishlist</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-3 font-semibold text-white">
                        Customer Support
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>Help Center</li>
                        <li>Shipping Information</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-3 font-semibold text-white">
                        Contact
                    </h3>
                    <p className="text-sm">Email: support@shopcart.example</p>
                    <p className="mt-2 text-sm">
                        Happy shopping! 😊
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-700 px-6 py-4 text-center text-sm">
                © {new Date().getFullYear()} ShopCart. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
