import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderContentPage } from "../../components/HeaderContentPage";
import useLanguage from "../../components/Zustand/useLanguage";

export function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const languageSelect = useLanguage((state) => state.language);

  useEffect(() => {
    async function fetchMovie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}`
      );

      setMovie(res.data);
    }
    fetchMovie();
    async function fetchSimilarMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}`
      );
      //abaixo filtrando apenas filmes semelhantes que possuem imagem, descrição e ordenando por popularidade
      const similarMoviesFiltered = res.data.results
        .filter((e) => e.backdrop_path !== null && e.overview)
        .sort((a, b) => Number(a.popularity) > Number(b.popularity));
      setSimilarMovies(similarMoviesFiltered);
      console.log(similarMoviesFiltered);
      setIsLoading(true);
    }
    fetchSimilarMovies();
  }, [languageSelect, params]);

  return (
    <>
      {isLoading && (
        <HeaderContentPage movie={movie} similarMovies={similarMovies} />
      )}
    </>
  );
}
