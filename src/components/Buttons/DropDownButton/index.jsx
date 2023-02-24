import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useLanguage from "../../Zustand/useLanguage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DropDownButton() {
  const languageSelect = useLanguage((state) => state.language);
  const changeEnglish = useLanguage((state) => state.english);
  const changePortuguese = useLanguage((state) => state.portuguese);
  const changeSpanish = useLanguage((state) => state.spanish);

  let englishTraduction;
  let portugueseTraduction;
  let spanishTraduction;

  switch (languageSelect) {
    case "pt-BR":
      englishTraduction = "Inglês";
      portugueseTraduction = "Português";
      spanishTraduction = "Espanhol";
      break;
    case "es":
      englishTraduction = "Inglés";
      portugueseTraduction = "Portugués";
      spanishTraduction = "Español";
      break;
    case "en-US":
      englishTraduction = "English";
      portugueseTraduction = "Portuguese";
      spanishTraduction = "Spanish";
      break;
    default:
      break;
  }

  return (
    <Menu as="div" className="relative hidden sm:block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-violet-700 transition-all px-4 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {languageSelect}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-sm"
            aria-hidden="true"
          />
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
        <Menu.Items className="border-none absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-violet-700 shadow-lg ring-1 ring-violet-500 ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={changeEnglish}
                  className={classNames(
                    active
                      ? "bg-zinc-800 text-violet-900  font-semibold  shadow-xl"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm w-full transition-all  "
                  )}
                >
                  {englishTraduction}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={changeSpanish}
                  href="#"
                  className={classNames(
                    active
                      ? "bg-zinc-800 text-violet-900  font-semibold  shadow-xl"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm w-full transition-all  "
                  )}
                >
                  {spanishTraduction}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={changePortuguese}
                  href="#"
                  className={classNames(
                    active
                      ? "bg-zinc-800 text-violet-900  font-semibold  shadow-xl"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm w-full transition-all  "
                  )}
                >
                  {portugueseTraduction}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
