import React from 'react';

const BookOfTheWeek = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
                
                {/* Book Image */}
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://i.ibb.co.com/NdrKmQvb/book-7543386-640.jpg" 
                        alt="Book of the Week" 
                        className="w-full h-auto rounded shadow-lg"
                    />
                </div>

                {/* Book Details */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Book of the Week
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        The Great Adventure
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Dive into the thrilling world of "The Great Adventure," a story full of mystery, excitement, and unforgettable characters. Perfect for readers of all ages who love a good journey.
                    </p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Read More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BookOfTheWeek;
