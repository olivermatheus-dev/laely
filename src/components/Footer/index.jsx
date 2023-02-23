import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-zinc-900 text-center lg:text-left w-full">
        <div className="text-violet-600 text-center p-4 pt-7">
          © 2023 Copyright:
          <p className="text-violet-600 font-medium mb-5">
            Laely Movies - Create by Oliver Matheus
          </p>
        </div>
      </div>
    </motion.div>
  );
}
