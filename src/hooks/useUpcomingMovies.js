// src/hooks/useTopRatedMovies.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();

        if (data.results) {
          dispatch(addUpcomingMovies(data.results));
        } else {
          console.error("❌ No top-rated movies found:", data);
        }
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

   getUpcomingMovies();
  }, [dispatch]);
};

export default  useUpcomingMovies;
