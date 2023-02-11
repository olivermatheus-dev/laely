import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderContentPage } from "../../components/HeaderContentPage";

export function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9b0bf59083345bf6f6a1b1a347761971&language=pt-BR`
      );

      setMovie(res.data);
    }
    fetchMovie();
  }, []);

  return (
    <>
      <HeaderContentPage movie={movie} />
    </>
  );
}
