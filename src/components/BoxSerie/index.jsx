import { Link } from "react-router-dom";

export function BoxSerie({ id, backdrop_path, name, vote_average }) {
  return (
    <Link
      to={`/tv/${id}`}
      className="group relative block bg-black w-96 h-4/5 m-2"
    >
      <img
        alt="Developer"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative pt-8 pl-8">
        <p className="text-sm font-medium uppercase tracking-widest text-violet-500">
          Série
        </p>

        <p className="text-2xl font-bold text-white">{name}</p>

        <div className="mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-base text-white font-medium mb-8">
              Nota: {vote_average}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
