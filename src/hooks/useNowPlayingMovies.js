// src/hooks/useNowPlayingMovies.js
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect  } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    // ✅ Only fetch if not already available
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      const fetchNowPlaying = async () => {
        try {
          const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            API_OPTIONS
          );
          const data = await response.json();

          if (data.results) {
            dispatch(addNowPlayingMovies(data.results));
          } else {
            console.error("❌ No results found:", data);
          }
        } catch (error) {
          console.error("⚠️ Error fetching now playing movies:", error);
        }
      };

      fetchNowPlaying();
    }
  }, [dispatch, nowPlayingMovies]); // ✅ dependency added

};

export default useNowPlayingMovies;
