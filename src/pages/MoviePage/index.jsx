import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderContentPage } from "../../components/HeaderContentPage";
import useLanguage from "../../components/Zustand/useLanguage";
import { LoadingScreen } from "../../components/LoadingScreen";
import { motion } from "framer-motion";

export function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState();

  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);
  const languageSelect = useLanguage((state) => state.language);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}`
        );
        setMovie(res.data);
        setLoad1(true);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    fetchMovie();

    async function fetchSimilarMovies() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}`
        );
        //abaixo filtrando apenas filmes semelhantes que possuem imagem, descrição e ordenando por popularidade
        const similarMoviesFiltered = res.data.results
          .filter((e) => e.backdrop_path !== null && e.overview)
          .sort((a, b) => Number(a.popularity) > Number(b.popularity));
        setSimilarMovies(similarMoviesFiltered);
        setLoad2(true);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    fetchSimilarMovies();
  }, [languageSelect, params]);

  return (
    <>
      {load1 && load2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-zinc-800"
        >
          <HeaderContentPage movie={movie} similarMovies={similarMovies} />
        </motion.div>
      )}
      {!load1 && !load2 && <LoadingScreen />}
    </>
  );
}
