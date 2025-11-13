
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import BookHaven from '../../components/BookHaven';
import Book from '../../components/Book';

const Home = () => {
    const data = useLoaderData();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    // ✅ Load theme from localStorage when page loads
    useEffect(() => {
        const html = document.querySelector('html');
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <div className="w-10/12 mx-auto  min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 mt-40 ">
            {/* Banner */}
            <Banner />

            {/* Theme Toggle */}
            <div className="flex justify-center my-6">
                <label className="flex items-center space-x-2">
                    <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                    <input 
                        onChange={(e) => handleTheme(e.target.checked)} 
                        type="checkbox" 
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle"
                    />
                </label>
            </div>

            {/* Latest Books Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 sm:mb-10">
                        Latest Books
                    </h2>

                    {/* Books Grid - 1 Column Mobile, 2 Tablet, 3 Desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {data && data.length > 0 ? (
                            data.map((book) => (
                                <Card key={book._id || book.id} book={book} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-lg">
                                No books available at the moment.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* BookHaven Section */}
            <div className="px-4 sm:px-6 lg:px-8 mt-12">
                <BookHaven />
            </div>

            {/* Book of the Week Section */}
            <div className="px-4 sm:px-6 lg:px-8 mt-12 mb-12">
                <Book />
            </div>
        </div>
    );
};

export default Home;





