"use client";

import { wrap } from "popmotion";
import { createContext, useContext, useState } from "react";
import { browsers } from "./browsers";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, browsers.length, page);
  const [darkTheme, setDarkTheme] = useState(false);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <AppContext.Provider
      value={{
        browsers,
        index,
        page,
        direction,
        paginate,
        darkTheme,
        toggleDarkTheme,
      }}
    >
      <div className={darkTheme ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
};
