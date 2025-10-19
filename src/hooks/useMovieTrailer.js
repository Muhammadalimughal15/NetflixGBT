import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = await response.json();

        const filterData = data.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    if (movieId) fetchTrailer(); // only fetch if movieId exists
  }, [dispatch, movieId]); // ✅ dependencies added
};

export default useMovieTrailer;
