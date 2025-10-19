import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={IMG_CDN_URL + movie.poster_path}
        alt={movie.title}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
