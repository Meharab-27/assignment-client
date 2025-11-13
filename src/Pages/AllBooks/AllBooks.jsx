
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import ModelCard from '../../components/ModelCard';

const AllBooks = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data);
  const [sortOrder, setSortOrder] = useState('');


  useEffect(() => {
    if (sortOrder) {
      axios
        .get(`https://assignment-server-red.vercel.app/books/sort/${sortOrder}`)
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err));
    }
  }, [sortOrder]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">Explore All Books</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Books are gateways to new worlds, offering knowledge, adventure, and inspiration with every page.
          <br />
          Reading broadens our imagination, deepens our understanding of life, and allows us to explore cultures,
          ideas, and perspectives beyond our own.
        </p>
      </div>

      {/* 🔽 Sort Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-5 gap-3 mt-4">
        <button
          onClick={() => setSortOrder('asc')}
          className={`btn w-full sm:w-auto ${sortOrder === 'asc' ? 'btn-primary' : 'btn-outline'}`}
        >
          Sort by Rating (Low → High)
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`btn w-full sm:w-auto ${sortOrder === 'desc' ? 'btn-primary' : 'btn-outline'}`}
        >
          Sort by Rating (High → Low)
        </button>
      </div>

      {/* 🧾 Books List */}
      <div className="mt-3 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <ModelCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;






