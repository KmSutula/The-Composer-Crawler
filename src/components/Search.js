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
            <label htmlFor="nationality">Nationality</label>
            <select id="nationality" name="nationality">
              <option value="">Any</option>
              <option value="American">American</option>
              <option value="Argentinian">Argentinian</option>
              <option value="Austrian">Austrian</option>
              <option value="Belgian">Belgian</option>
              <option value="Austrian">British</option>
              <option value="Canadian">Canadian</option>
              <option value="Czech">Czech</option>
              <option value="English">English</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Indian">Indian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Polish">Polish</option>
              <option value="Russian">Russian</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Swedish">Swedish</option>
              <option value="Swiss">Swiss</option>
              <option value="Ukranian">Ukranian</option>
            </select>
          </span>
          <span id="eraLabel">
            <label htmlFor="era">Musical Era:</label>
            <select id="era" name="era">
              <option value="">Any</option>
              <option value="medieval">Medieval</option>
              <option value="renaissance">Renaissance</option>
              <option value="baroque">Baroque</option>
              <option value="classical">Classical</option>
              <option value="romantic">Romantic</option>
              <option value="modern">Modern</option>
              <option value="20th century">20th Century</option>
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
