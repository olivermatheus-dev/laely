import { SimilarMoviesCard } from "../SimilarMoviesCard";

export function HeaderContentPage({ movie, similarMovies }) {
  console.log(movie);
  return (
    <div>
      <section
        className="relative  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/60 to-white/5"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ml-2 mr-10 text-left">
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Nota: {Number(movie.vote_average).toFixed(1)}
            </p>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              {movie.title}
            </h1>
            <div className="mt-4 max-w-lg font-bold sm:text-xl sm:leading-relaxed text-zinc-200 sm:text-violet-800 flex gap-4">
              {movie.genres[0] && movie.genres[0].name && (
                <p> {movie.genres[0].name}</p>
              )}{" "}
              /
              {movie.genres[1] && movie.genres[1].name && (
                <p> {movie.genres[1].name}</p>
              )}{" "}
              /
              {movie.genres[2] && movie.genres[2].name && (
                <p> {movie.genres[2].name}</p>
              )}
            </div>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              {movie.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
          </div>
        </div>
      </section>
      <div className="flex justify-center gap-4 sm:gap-8 mt-4 flex-wrap sm:text-xl sm:leading-relaxed text-white pt-5 px-2 sm:p-10 ">
        {similarMovies.map((movie) => {
          return <SimilarMoviesCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}
