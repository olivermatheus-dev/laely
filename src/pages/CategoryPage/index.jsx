import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";

export function CategoryPage() {
  const [series, setSeries] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function fetchSeries() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9b0bf59083345bf6f6a1b1a347761971"
      );
      console.log(response);
      setSeries(response.data.results);
    }

    fetchSeries();
  }, []);

  return (
    <div className={style.containerSeries}>
      {series.map((currentSerie) => {
        return (
          <Link
            to={`/tv/${currentSerie.id}`}
            className="group relative block bg-black w-96 h-4/5 m-2"
          >
            <img
              alt="Developer"
              src={`https://image.tmdb.org/t/p/original${currentSerie.backdrop_path}`}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative pt-8 pl-8">
              <p className="text-sm font-medium uppercase tracking-widest text-violet-500">
                Série
              </p>

              <p className="text-2xl font-bold text-white">
                {currentSerie.name}
              </p>

              <div className="mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-base text-white font-medium mb-8">
                    Nota: {currentSerie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
