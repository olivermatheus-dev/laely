import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import { BoxMovie } from "../../components/BoxMovie";
import { BoxSerie } from "../../components/BoxSerie";
import { Pagination } from "../../components/Pagination";
import useLanguage from "../../components/Zustand/useLanguage";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "../../components/LoadingScreen";

export function CategoryPage() {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const languageSelect = useLanguage((state) => state.language);

  useEffect(() => {
    async function fetchContent() {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/${params.category}/${params.selection}?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}&page=${params.page}`
      );
      setSeries(response.data.results);
      setIsLoading(true);
    }

    fetchContent();
  }, [params, languageSelect]);

  return (
    <>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-zinc-800">
            {params.category === "tv" && (
              <div className=" ">
                <div className={style.containerSeries}>
                  {series.map((currentElement) => {
                    return (
                      <BoxSerie
                        key={currentElement.id}
                        id={currentElement.id}
                        backdrop_path={currentElement.backdrop_path}
                        name={currentElement.name}
                        vote_average={currentElement.vote_average}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {params.category === "movie" && (
              <div className="">
                <div className={style.containerSeries}>
                  {series.map((currentElement) => {
                    return <BoxMovie movie={currentElement} />;
                  })}
                </div>
                <Pagination
                  atualPage={params.page}
                  category={params.category}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
      {!isLoading && <LoadingScreen />}
    </>
  );
}
