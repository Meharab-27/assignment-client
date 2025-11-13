
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const BookDetailsCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://assignment-server-red.vercel.app/books/${id}`);
        setBook(res.data.result);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [user, id, refetch]);

  if (loading || !book) {
    return (
      <div className="flex justify-center items-center h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 w-24 h-24 border-8 border-pink-500 rounded-full animate-ping"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500 border-opacity-30 overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-purple-500 hover:shadow-2xl">

          {/* Header */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute top-6 right-6 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
              <span className="text-3xl">⭐</span> {book.rating}
            </div>

            <div className="absolute bottom-6 left-6 bg-linear-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl animate-slide-in-left border-2 border-white border-opacity-30">
              #{book.genre}
            </div>
          </div>

          {/* Content */}
          <div className="p-10 text-white">
            <h1 className="text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x">
              {book.title}
            </h1>
            <p className="text-2xl text-cyan-300 mb-8 font-light tracking-wider">
              ✍️ {book.author}
            </p>

            {/* Summary */}
            <div className="mb-10 bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-8 border border-purple-500 border-opacity-30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center gap-3">
                <span className="text-3xl">📖</span> Summary
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg tracking-wide">
                {book.summary}
              </p>
            </div>

            {/* Comments */}
            <div className="mt-12 bg-opacity-5 backdrop-blur-md rounded-2xl p-8 border border-cyan-500 border-opacity-30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                💬 Comments
              </h3>

              {user ? (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target;
                    const commentText = form.comment.value.trim();
                    if (!commentText) return;

                    const newComment = {
                      bookId: book._id,
                      userName: user.displayName,
                      userPhoto: user.photoURL,
                      comment: commentText,
                    };

                    try {
                      await axios.post("https://assignment-server-red.vercel.app/comments", newComment);
                      form.reset();
                      setRefetch(!refetch);
                    } catch (err) {
                      console.error("Error posting comment:", err);
                    }
                  }}
                  className="flex items-center gap-3 mb-8"
                >
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-10 h-10 rounded-full border border-cyan-400"
                  />
                  <input
                    type="text"
                    name="comment"
                    placeholder="Write a comment..."
                    className="flex-1 bg-transparent border border-cyan-400 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-xl text-white font-semibold transition-all"
                  >
                    Post
                  </button>
                </form>
              ) : (
                <p className="text-gray-400 mb-8">Please login to post a comment.</p>
              )}

              <CommentList bookId={book._id} refetch={refetch} />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-purple-500 border-opacity-30">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-400">Added by</p>
                <p className="text-lg font-semibold text-cyan-300 glow-text">{book.userEmail}</p>
              </div>

              <button className="relative group overflow-hidden bg-linear-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-bold text-xl py-5 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none">
                <span className="relative z-10 flex items-center gap-3">
                  Read Now <span className="text-3xl">✨</span>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ------------------- Comment List Component -------------------
const CommentList = ({ bookId, refetch }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`https://assignment-server-red.vercel.app/comments/${bookId}`);
        setComments(res.data);
      } catch (err) {
        console.error("Error loading comments:", err);
      }
    };
    fetchComments();

    const interval = setInterval(fetchComments, 2000);
    return () => clearInterval(interval);
  }, [bookId, refetch]);

  return (
    <div className="space-y-5">
      {comments.length === 0 ? (
        <p className="text-gray-400">No comments yet.</p>
      ) : (
        comments.map((c) => (
          <div
            key={c._id}
            className="flex items-start gap-4 bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-700"
          >
            <img
              src={c.userPhoto}
              alt={c.userName}
              className="w-10 h-10 rounded-full border border-cyan-400"
            />
            <div>
              <h4 className="font-semibold text-cyan-300">{c.userName}</h4>
              <p className="text-gray-200">{c.comment}</p>
              <small className="text-gray-500">
                {new Date(c.createdAt).toLocaleString()}
              </small>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookDetailsCard;


