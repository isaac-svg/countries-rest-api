import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import CountriesPage from "./CountriesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCountry from "./SingleCountry";
import Navbar from "./Navbar";
//
const MainPage = () => {
  const { isDark } = useContext(ThemeContext);
  if (isDark) {
    localStorage.setItem("isDark", isDark);
  } else {
    localStorage.setItem("isLight", !isDark);
  }
  return (
    <main className={isDark ? "darkTheme" : "lightTheme"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/:countryName" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default MainPage;
