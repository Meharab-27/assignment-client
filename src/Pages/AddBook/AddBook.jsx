
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import
import { AuthContext } from '../../context/AuthContext';

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const [coverPreview, setCoverPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: e.target.rating.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userName: user?.displayName || "Unknown User",
      userEmail: user?.email || "No Email",
      created_at: new Date().toISOString(),
    };

    axios.post('https://assignment-server-red.vercel.app/books', formData, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`
      },
    })
    .then(res => {
      console.log(res.data);
      setLoading(false); 
      e.target.reset(); 
      setCoverPreview('');

      // ✅ Success Alert
      Swal.fire({
        icon: 'success',
        title: 'Book Added!',
        text: 'Your book has been successfully added to the library.',
        confirmButtonColor: '#6B21A8', // Purple shade
      });
    })
    .catch(err => {
      console.log(err);
      setLoading(false); 

      // ✅ Error Alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
        confirmButtonColor: '#EF4444', // Red shade
      });
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-95 border border-white/20">
          {/* Header */}
          <div className="bg-linear-to-r from-purple-600 to-pink-600 p-8 text-white">
            <h2 className="text-3xl font-bold text-center tracking-tight">Add New Book</h2>
            <p className="text-center mt-2 text-purple-100">
              Share your favorite read with the community
            </p>
          </div>

          <div className="p-8 lg:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Title */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter book title"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Author */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Genre */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Genre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="genre"
                  placeholder="e.g. Fiction, Mystery, Sci-Fi, Romance"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Rating */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    placeholder="1-5"
                    className="w-24 px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 font-bold text-center text-xl"
                  />
                  <div className="flex gap-1 text-3xl">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-gray-300 transition-all duration-300 hover:text-yellow-500 hover:scale-110"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">Your rating out of 5</span>
                </div>
              </div>

              {/* Summary */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="summary"
                  rows="5"
                  placeholder="Write a short summary about the book..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Cover Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Image URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="coverImage"
                  required
                  placeholder="https://example.com/image.jpg"
                  onChange={(e) => setCoverPreview(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 font-medium"
                />
                {coverPreview && (
                  <img
                    src={coverPreview}
                    alt="Cover Preview"
                    className="mt-4 w-32 h-48 object-cover rounded-xl shadow-md"
                  />
                )}
              </div>

              {/* User Info */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <label className="block text-sm font-semibold text-gray-600 mb-3">Added By</label>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user?.displayName?.slice(0, 2)?.toUpperCase() || "UU"}
                  </div>
                  <div>
                    <input
                      type="text"
                      value={user?.displayName || "Unknown User"}
                      disabled
                      className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 font-medium"
                    />
                    <input
                      type="email"
                      value={user?.email || "No Email"}
                      disabled
                      className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg text-gray-600 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-5 px-8 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl transform transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-2xl ${
                  loading ? 'cursor-not-allowed opacity-70' : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Adding...
                  </div>
                ) : (
                  'Add Book to Library'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

