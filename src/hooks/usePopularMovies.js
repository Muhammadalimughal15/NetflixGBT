// src/hooks/useNowPlayingMovies.js
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Inline async function to avoid React warning
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();

        if (data.results) {
          dispatch(addPopularMovies(data.results));
        } else {
          console.error("❌ No results found:", data);
        }
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getPopularMovies();
  }, [dispatch]); // ✅ dispatch added as dependency
};

export default usePopularMovies;
