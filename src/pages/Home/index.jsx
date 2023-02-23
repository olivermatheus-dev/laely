import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { motion, AnimatePresence } from "framer-motion";

export function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-zinc-800 w-full h-screen"
      >
        <h1>Home</h1>
      </motion.div>
    </AnimatePresence>
  );
}
