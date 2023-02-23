import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

export function SeriePage() {
  const params = useParams();
  const [serie, setSerie] = useState({});

  useEffect(() => {
    async function fetchSerie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=9b0bf59083345bf6f6a1b1a347761971&language=pt-BR`
      );
      setSerie(res.data);
    }

    fetchSerie();
  }, []);

  return (
    <>
      <h1>{serie.name}</h1>
      <p>{serie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
        alt="Poster da série"
      />
    </>
  );
}
