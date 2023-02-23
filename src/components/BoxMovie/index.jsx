import { Link } from "react-router-dom";
import useLanguage from "../Zustand/useLanguage";

export function BoxMovie({ movie }) {
  const language = useLanguage((state) => state.language);

  let translateMovie;

  switch (language) {
    case "pt-BR":
      translateMovie = "filme";
      break;
    case "es":
      translateMovie = "pelicula";
      break;
    case "en-US":
      translateMovie = "movie";
      break;
    default:
      translateMovie = "filme";
      break;
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative block bg-black w-96 h-300px m-2 hover:scale-105 transition duration-200"
    >
      <img
        alt="Poster Movie"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative pt-8 pl-8 pr-8">
        <div className="flex justify-between">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-700 rounded-full bg-black inline-flex items-center px-2 py-0.5">
            {translateMovie}
          </p>
          {/* <p className="text-xl font-bold uppercase tracking-widest text-white">
            {movie.vote_average}
          </p> */}
          <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-0.5 text-base font-semibold text-white">
            {Number(movie.vote_average).toFixed(1)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-violet-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>

        <p className="text-2xl font-bold text-white">{movie.title}</p>
        <p className="mb-64"></p>

        <div className="mt-64">
          <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mb-8 line-clamp-3 text-base text-white font-medium">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
