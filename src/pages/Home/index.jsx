import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import useLoadingStore from "../../components/Zustand/useLoadingStore";

export function Home() {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const changeStatusLoading = useLoadingStore(
    (state) => state.changeStatusLoading
  );

  console.log(isLoading);

  return (
    <>
      <h1> Zustand {isLoading}</h1>
      <button onClick={changeStatusLoading}>Change Status</button>
    </>
  );
}
