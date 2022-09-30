import React from "react";
import "../index.css";

export default function Result({ searchResults }) {
  return searchResults.map((item) => {
    return (
      <div className="result">
        <div id="nameAndResult">
          <h1>Name</h1>
          <p>{item.name}</p>
        </div>
        <div id="birthYearAndResult">
          <h2 id="birthYear">Year of Birth</h2>
          <p>{item.birthYear}</p>
        </div>
        <div id="deathYearAndResult">
          <h2 id="deathYear">Year of Death</h2>
          <p>{item.deathYear}</p>
        </div>
        <div id="nationalityAndResult">
          <h2 id="nationality">Nationality</h2>
          <p>{item.nationality}</p>
        </div>
        <div id="eraAndResult">
          <h2 id="era">Era</h2>
          <p>{item.era}</p>
        </div>
      </div>
    );
  });
}
