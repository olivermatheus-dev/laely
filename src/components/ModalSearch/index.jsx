import { Link } from "react-router-dom";

export function ModalSearch({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="w-60 h-20 block relative overflow-hidden rounded-sm  bg-cover bg-center bg-no-repeat  transition duration-300 shadow-lg hover:scale-105 hover:shadow-violet-900"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className=" inset-0 bg-black/25"></div>

      <div className=" flex items-center justify-start pl-2 pt-2">
        <div className=" text-white ">
          <h3 className="text-sm font-bold sm:text-sm">{movie.title}</h3>

          <p className="text-sm"></p>
        </div>

        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
          {Number(movie.vote_average).toFixed(1)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-violet-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
