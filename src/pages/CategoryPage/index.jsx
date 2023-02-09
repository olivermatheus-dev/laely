import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import { BoxMovie } from "../../components/BoxMovie";
import { BoxSerie } from "../../components/BoxSerie";

export function CategoryPage() {
  const [series, setSeries] = useState([]);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    async function fetchContent() {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/${params.category}/popular?api_key=9b0bf59083345bf6f6a1b1a347761971&language=pt-BR`
      );
      console.log(response.data.results);
      setSeries(response.data.results);
    }

    fetchContent();
  }, [params]);

  return (
    <>
      {params.category === "tv" && (
        <div className={style.containerSeries}>
          {series.map((currentElement) => {
            return (
              <BoxSerie
                id={currentElement.id}
                backdrop_path={currentElement.backdrop_path}
                name={currentElement.name}
                vote_average={currentElement.vote_average}
              />
            );
          })}
        </div>
      )}
      {params.category === "movie" && (
        <div className={style.containerSeries}>
          {series.map((currentElement) => {
            return (
              <BoxMovie
                id={currentElement.id}
                backdrop_path={currentElement.backdrop_path}
                original_title={currentElement.original_title}
                vote_average={currentElement.vote_average}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
