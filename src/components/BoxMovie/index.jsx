import { Link } from "react-router-dom";

export function BoxMovie({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative block bg-black w-96 h-300px m-2"
    >
      <img
        alt="Poster Movie"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative pt-8 pl-8 pr-8">
        <div className="flex justify-between">
          <p className="text-sm font-medium uppercase tracking-widest text-red-500">
            Filme
          </p>
          <p className="text-xl font-bold uppercase tracking-widest text-white">
            {movie.vote_average}
          </p>
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
