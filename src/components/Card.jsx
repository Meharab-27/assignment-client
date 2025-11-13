
import React from 'react';

const Card = ({ book }) => {
    const { title, author, genre, rating, summary, coverImage, userEmail } = book;

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`text-base sm:text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-xs sm:max-w-sm mx-auto sm:mx-2 my-4">
            {/* Book Cover */}
            <div className="relative h-48 sm:h-64 bg-linear-to-br from-blue-50 to-indigo-100">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center p-2 sm:p-4">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 sm:w-32 h-40 sm:h-48 mx-auto mb-2 sm:mb-3"></div>
                            <p className="text-gray-500 text-xs sm:text-sm">No Cover</p>
                        </div>
                    </div>
                )}
                {/* Genre Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-indigo-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-xs font-semibold shadow-md">
                    {genre}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-5">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 line-clamp-1" title={title}>
                    {title}
                </h3>

                {/* Author */}
                <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                    by {author}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex">{renderStars(rating)}</div>
                    <span className="ml-2 text-xs sm:text-sm text-gray-600 font-medium">{rating}/5</span>
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                    {summary || 'No summary available.'}
                </p>

                {/* User Email (small badge) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-xs text-gray-500 gap-1 sm:gap-0">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">
                        👤 {userEmail}
                    </span>
                    <span className="italic text-xs">Added by user</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
