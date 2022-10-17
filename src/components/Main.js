import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Search from "../pages/Search";

export default function Main({ searchResults, displaySearchResults }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Search
              searchResults={searchResults}
              displaySearchResults={displaySearchResults}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
