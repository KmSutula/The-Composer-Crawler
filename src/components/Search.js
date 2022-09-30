import React from "react";
import "../index.css";
export default function Search({ displaySearchResults }) {
  function expand(e) {
    if (e.target.parentElement.classList.contains("open")) {
      e.target.parentElement.classList.remove("open");
      e.target.style.transform = "rotate(-90deg)";
    } else {
      e.target.parentElement.classList.add("open");
      e.target.style.transform = "rotate(0deg)";
    }
  }
  return (
    <>
      <div id="title">
        <h1>The Composer Crawler</h1>
        <h2>Fill out some or all of the fields below, then press submit!</h2>
      </div>
      <div className="searchContainer open">
        <i onClick={expand} className="fa-solid fa-chevron-down"></i>
        <form onSubmit={displaySearchResults}>
          <span id="firstNameLabel">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </span>
          <span id="nationalityLabel">
            <label htmlFor="nationality">Country of Birth:</label>
            <input type="text" id="nationality" name="nationality" />
          </span>
          <span id="eraLabel">
            <label htmlFor="era">Musical Era:</label>
            <select id="era" name="era" type="text">
              <option value="">Any</option>
              <option value="medieval">Medieval</option>
              <option value="renaissance">Renaissance</option>
              <option value="baroque">Baroque</option>
              <option value="classical">Classical</option>
              <option value="romantic">Romantic</option>
              <option value="modern">Modern</option>
            </select>
          </span>

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
