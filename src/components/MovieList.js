
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   return (
//     <div className="relative z-10 mt-[32rem] px-6 md:px-12 pb-10 bg-gradient-to-b from-transparent to-black">
//       {/* Section Title */}
//       <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h2>

//       {/* Horizontal Scrollable Movie Row */}
//       <div className="flex space-x-5 overflow-x-auto scrollbar-hide">
//         {movies && movies.length > 0 ? (
//           movies.map((movie) => (
//             <div key={movie.id} className="flex-shrink-0 w-40 md:w-48 lg:w-52">
//               <MovieCard movie={movie} />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-300">No movies found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative z-10 px-6 md:px-12 pb-10 text-white">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

      {/* Horizontal Scrollable Movie Row */}
      <div className="flex gap-6 overflow-x-auto py-2">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-44 md:w-52 lg:w-56"
            >
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p className="text-gray-300">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
