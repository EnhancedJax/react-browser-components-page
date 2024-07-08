"use client";

import { motion } from "framer-motion";
import { useAppContext } from "../providers/provider";

const ThemeSwitcher = () => {
  const { darkTheme, toggleDarkTheme } = useAppContext();

  return (
    <div className="flex items-center justify-center w-full gap-4 p-4 text-sm">
      Theme:
      <div
        className="relative flex gap-8 px-8 py-2 bg-gray-200 rounded-full cursor-pointer dark:bg-gray-700"
        onClick={toggleDarkTheme}
      >
        <motion.div
          className="absolute w-1/2 h-6 bg-white rounded-full shadow-md top-1.5 left-2"
          animate={{ x: darkTheme ? "calc(100% - 16px)" : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
        <span className="z-10">Light</span>
        <span className={`z-10 ${darkTheme ? "text-black" : ""}`}>Dark</span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
