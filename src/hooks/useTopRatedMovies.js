// src/hooks/useTopRatedMovies.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();

        if (data.results) {
          dispatch(addTopRatedMovies(data.results));
        } else {
          console.error("❌ No top-rated movies found:", data);
        }
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

   getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
