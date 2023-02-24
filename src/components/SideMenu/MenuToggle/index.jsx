import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import useLanguage from "../../Zustand/useLanguage";
import DropDownButton from "../../Buttons/DropDownButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuToggle() {
  const languageSelect = useLanguage((state) => state.language);
  const changeEnglish = useLanguage((state) => state.english);
  const changePortuguese = useLanguage((state) => state.portuguese);
  const changeSpanish = useLanguage((state) => state.spanish);

  let translateMovies;
  let translateTopRated;
  let nowPlaying;
  let englishTraduction;
  let portugueseTraduction;
  let spanishTraduction;

  switch (languageSelect) {
    case "pt-BR":
      translateMovies = "Filmes";
      translateTopRated = "Melhores";
      nowPlaying = "Lançamentos";
      englishTraduction = "Inglês";
      portugueseTraduction = "Português";
      spanishTraduction = "Espanhol";
      break;
    case "es":
      translateMovies = "Peliculas";
      translateTopRated = "Mejores ";
      nowPlaying = "Lanzamientos";
      englishTraduction = "Inglés";
      portugueseTraduction = "Portugués";
      spanishTraduction = "Español";
      break;
    case "en-US":
      translateMovies = "Movies";
      translateTopRated = "Top Rated ";
      nowPlaying = "Releases";
      englishTraduction = "English";
      portugueseTraduction = "Portuguese";
      spanishTraduction = "Spanish";
      break;
    default:
      translateMovies = "Filmes";
      translateTopRated = "Melhores";
      nowPlaying = "Lançamentos";
      englishTraduction = "Inglês";
      portugueseTraduction = "Português";
      spanishTraduction = "Espanhol";
      break;
  }
  return (
    <Menu as="div" className="relative inline-block text-left sm:hidden">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-violet-700 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm sm:hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  className={classNames(
                    active ? "" : "text-gray-900",
                    "block px-4 py-1 text-xs font-semibold"
                  )}
                >
                  Categories
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/popular/1"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {translateMovies}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/top_rated/1"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {translateTopRated}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {nowPlaying}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  className={classNames(
                    active ? "" : "text-gray-900",
                    "block px-4 py-1 text-xs font-semibold"
                  )}
                >
                  Language
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  onClick={changePortuguese}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {portugueseTraduction}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  onClick={changeEnglish}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {englishTraduction}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/movie/now_playing/1"
                  onClick={changeSpanish}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {spanishTraduction}
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
