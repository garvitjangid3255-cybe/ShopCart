import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ cart = [] }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        Boolean(localStorage.getItem('token'))
    );
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setMenuOpen(false);
        navigate('/');
    };

    const closeMenu = () => setMenuOpen(false);

    const linkClass = 'block py-2 hover:text-blue-600';

    return (
        <nav className="relative bg-white px-4 py-4 shadow-md sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold text-gray-900"
                >
                    ShopCart 🛒
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    <Link className={linkClass} to="/">Home</Link>
                    <Link className={linkClass} to="/products">Products</Link>
                    <Link className={linkClass} to="/wishlist">Wishlist</Link>
                    <Link className={linkClass} to="/cart">
                        Cart ({cart.length})
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <Link className={linkClass} to="/profile">
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    className="rounded-lg border px-3 py-2 text-xl md:hidden"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile navigation */}
            {menuOpen && (
                <div className="mt-4 border-t pt-3 md:hidden">
                    <Link onClick={closeMenu} className={linkClass} to="/">Home</Link>
                    <Link onClick={closeMenu} className={linkClass} to="/products">Products</Link>
                    <Link onClick={closeMenu} className={linkClass} to="/wishlist">Wishlist</Link>
                    <Link onClick={closeMenu} className={linkClass} to="/cart">
                        Cart ({cart.length})
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <Link onClick={closeMenu} className={linkClass} to="/profile">
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="mt-2 w-full rounded-lg bg-red-600 px-4 py-2 text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            onClick={closeMenu}
                            to="/login"
                            className="mt-2 block rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
