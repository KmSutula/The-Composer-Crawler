import React from "react";
import "../index.css";

export default function Result({
  name,
  birthYear,
  deathYear,
  era,
  nationality,
}) {
  return (
    <div className="resultsContainer">
      <div id="firstNameAndResult">
        <h1>First Name</h1>
        <p>{name}</p>
      </div>
      <div id="lastNameAndResult">
        <h1 id="lastName">Last Name</h1>
        <p>{name}</p>
      </div>
      <div id="birthYearAndResult">
        <h2 id="birthYear">Year of Birth</h2>
        <p>{birthYear}</p>
      </div>
      <div id="deathYearAndResult">
        <h2 id="deathYear">Year of Death</h2>
        <p>{deathYear}</p>
      </div>
      <div id="nationalityAndResult">
        <h2 id="nationality">Nationality</h2>
        <p>{nationality}</p>
      </div>
      <div id="eraAndResult">
        <h2 id="era">Era</h2>
        <p>{era}</p>
      </div>
    </div>
  );
}
