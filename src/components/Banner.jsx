
import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    const goToAllBooks = () => {
        window.location.href = "/all-books"; // page reload
    };

    const goToAddBook = () => {
        window.location.href = "/addBook"; // page reload
    };

    return (
        <div className="relative bg-linear-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
            {/* Background animation */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute bg-white opacity-10 rounded-full w-48 h-48 -top-16 -left-16 animate-pulse sm:w-72 sm:h-72 sm:-top-20 sm:-left-20"></div>
                <div className="absolute bg-white opacity-9 rounded-full w-72 h-73 -bottom-20 -right-20 animate-ping sm:w-96 sm:h-96 sm:-bottom-28 sm:-right-28"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                    Welcome to My Library
                </h1>
                <p className="text-base sm:text-lg md:text-2xl mb-8 animate-fadeIn delay-200">
                    Explore, Add & Manage Your Favorite Books
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-400">
                    <Link to="/all-books"
                        onClick={goToAllBooks}
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition text-center"
                    >
                        All Books
                    </Link>
                    <Link to="/addBook"
                        onClick={goToAddBook}
                        className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition text-center"
                    >
                        Create Book
                    </Link>
                </div>
            </div>

            {/* Optional decorative overlay */}
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-t from-indigo-600 to-transparent"></div>
        </div>
    );
};

export default Banner;







