export function HeaderContentPage({ movie }) {
  return (
    <div>
      <section
        className="relative  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Nota: {movie.vote_average}
            </p>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              {movie.original_title}
            </h1>
            {/* <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-violet-800">
              {movie.genres[0].name} / {movie.genres[1].name} /{" "}
              {movie.genres[2].name}
            </p> */}
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              {movie.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
