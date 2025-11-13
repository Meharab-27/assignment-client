
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = React.useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto mt-4">
            <div className="navbar bg-white/70 backdrop-blur-md shadow-lg border border-white/30 rounded-full px-4 py-3 transition-all duration-300 hover:shadow-xl flex justify-between items-center">
                
                {/* Navbar Start */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-purple-600 font-bold text-xl">
                        The Book Haven
                    </Link>

                    {/* Hamburger menu for mobile */}
                    <button
                        className="md:hidden text-purple-600 p-2 rounded hover:bg-purple-100 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navbar Center - Desktop */}
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-gray-700 font-medium">
                        <li>
                            <NavLink to="/" className="flex items-center gap-2 hover:text-purple-600 transition">
                                <GoHomeFill /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-books" className="hover:text-purple-600 transition">All Books</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addBook" className="hover:text-purple-600 transition">Add Book</NavLink>
                        </li>
                        <li>
                            <NavLink to="/myBooks" className="hover:text-purple-600 transition">My Books</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar End - User / Auth buttons */}
                <div className="flex items-center gap-3">
                    {user && (
                        <div className="group relative hidden md:block">
                            <img
                                className="w-10 h-10 rounded-full border-2 border-purple-400 shadow-md cursor-pointer hover:scale-105 transition-transform"
                                src={user.photoURL || ''}
                                alt={user.displayName || 'User'}
                            />
                            <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {user.displayName || 'User'}
                            </span>
                        </div>
                    )}

                    {user ? (
                        <button
                            onClick={signOutUser}
                            className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition text-sm md:text-base"
                        >
                            Log Out
                        </button>
                    ) : (
                        <div className="hidden md:flex gap-2">
                            <Link
                                to="/auth/login"
                                className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition text-sm md:text-base"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="bg-white text-purple-600 border-2 border-purple-500 px-4 py-2 rounded-full font-semibold hover:bg-purple-50 transition text-sm md:text-base"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200 md:hidden z-50">
                        <ul className="flex flex-col gap-2 p-4 text-gray-700 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className="flex items-center gap-2 hover:text-purple-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <GoHomeFill /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/all-books"
                                    className="hover:text-purple-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    All Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addBook"
                                    className="hover:text-purple-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Add Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myBooks"
                                    className="hover:text-purple-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    My Books
                                </NavLink>
                            </li>
                            {!user && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <Link
                                        to="/auth/login"
                                        className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition text-sm"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        className="bg-white text-purple-600 border-2 border-purple-500 px-4 py-2 rounded-full font-semibold hover:bg-purple-50 transition text-sm"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;









