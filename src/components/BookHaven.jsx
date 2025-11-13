// import React from 'react';

// const BookHaven = () => {
//   return (
//     <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//           About The Book Haven
//         </h2>
//         <p className="text-gray-600 text-base sm:text-lg">
//           Welcome to <span className="font-semibold">The Book Haven</span>, your cozy corner to discover, share, and explore books of all genres. 
//           Whether you're a passionate reader or just curious, find your next favorite read and connect with a community that loves books as much as you do.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default BookHaven;


import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const BookHaven = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          About The Book Haven
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Welcome to{' '}
          <span
            id="bookHavenTooltip"
            className="font-semibold cursor-pointer underline"
          >
            The Book Haven
          </span>
          , your cozy corner to discover, share, and explore books of all genres.
          Whether you're a passionate reader or just curious, find your next favorite
          read and connect with a community that loves books as much as you do.
        </p>
        {/* Tooltip */}
        <Tooltip anchorId="bookHavenTooltip" place="top" content="Your ultimate book community!" />
      </div>
    </section>
  );
};

export default BookHaven;

