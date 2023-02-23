import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLanguage from "../Zustand/useLanguage";
import { ModalSearch } from "../ModalSearch";
import { motion } from "framer-motion";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);
  const params = useParams();
  console.log(params.category);

  const languageSelect = useLanguage((state) => state.language);
  useEffect(() => {
    async function fetchContent() {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/search/movie?api_key=9b0bf59083345bf6f6a1b1a347761971&language=${languageSelect}&query=${search}&page=1&include_adult=false`
      );
      setResults(
        response.data.results.filter((results) => results.backdrop_path)
      );
    }
    fetchContent();
  }, [search]);

  return (
    <>
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="w-screen h-screen flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 bg-black opacity-30 -z-30"
        ></motion.div>
      )}

      <div className="flex flex-col fixed right-40 top-1 w-60 z-10">
        <div className="w-60 absolute">
          <label
            HTMLfor="searchBar"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-violet-600"
          >
            <input
              type="email"
              id="searchBar"
              placeholder="Email"
              className="text-slate-100 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setSearch(e.target.value.replaceAll(" ", "%20"))}
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-violet-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-600 peer-focus:text-violet-800 peer-focus:top-2 peer-focus:text-xs">
              <p>Search</p>
            </span>
          </label>
        </div>
        <div className="flex flex-col h-auto mt-16 w-60 gap-2">
          {results.length > 0 &&
            results.map((movie) => {
              return <ModalSearch movie={movie} className="" />;
            })}
        </div>
      </div>
    </>
  );
}
