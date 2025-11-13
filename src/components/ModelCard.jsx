
// import React from "react";
// import { Link } from "react-router";

// const ModelCardTable = ({ book }) => {
//   const { title, author, genre, rating, coverImage, _id } = book;
//   // const navigate = useNavigate();

//   // const handleViewDetails = () => {
//   //   navigate(`/books/${id}`);
//   // };

//   return (
//     <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 flex">
//       {/* Cover Image */}
//       <div className="w-1/3">
//         <img
//           src={coverImage}
//           alt={title}
//           className="w-full h-full object-cover rounded-l-2xl"
//         />
//       </div>

//       {/* Table Content */}
//       <div className="w-2/3">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider text-sm">
//                 Title
//               </th>
//               <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider text-sm">
//                 Author
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             <tr className="hover:bg-gray-50 transition-all">
//               <td className="py-4 px-6 text-gray-800 font-medium">{title}</td>
//               <td className="py-4 px-6 text-gray-600">{author}</td>
//             </tr>
//             <tr className="bg-gray-50">
//               <td className="py-4 px-6 text-gray-600" colSpan={2}>
//                 <div>
//                   <strong>Rating:</strong> {rating}
//                 </div>
//                 <div className="text-sm text-gray-800 mt-1">
//                   Genre: {genre}
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td className="py-4 px-6" colSpan={2}>
//                 <Link to={`/book-details/${_id}`}
                  
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition"
//                 >
//                   View Details
//                 </Link>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ModelCardTable;


import React from "react";
import { Link } from "react-router";

const ModelCardTable = ({ book }) => {
  const { title, author, genre, rating, coverImage, _id } = book;

  return (
    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 flex">
      {/* Cover Image */}
      <div className="w-1/3">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      {/* Table Content with Scroll */}
      <div className="w-2/3 overflow-x-auto max-h-64">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider text-sm">
                Title
              </th>
              <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider text-sm">
                Author
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-all">
              <td className="py-4 px-6 text-gray-800 font-medium">{title}</td>
              <td className="py-4 px-6 text-gray-600">{author}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-gray-600" colSpan={2}>
                <div>
                  <strong>Rating:</strong> {rating}
                </div>
                <div className="text-sm text-gray-800 mt-1">
                  Genre: {genre}
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6" colSpan={2}>
                <Link
                  to={`/book-details/${_id}`}
                  className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition"
                >
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelCardTable;























