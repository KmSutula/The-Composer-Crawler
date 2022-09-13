import React from "react";
import "../index.css";
import processedComposers from "../processedComposers.json";

export default function Search({ setSearchTerms }) {
  const [tempSearchInput, setTempSearchInput] = React.useState({
    firstName: "",
    lastName: "",
    era: "",
    nationality: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const savedSearchResultsObj = event.target.elements;
    const searchResults = Array.from(savedSearchResultsObj).reduce(
      (acc, el) => {
        if (el.value) {
          acc[el.id] = el.value;
        }
        return acc;
      },
      {}
    );
    const matchingResultData = [];
    processedComposers.data.map((composer) => {
      if (
        composer.name
          .toLowerCase()
          .includes(searchResults.firstName.toLowerCase()) |
        composer.name.includes(searchResults.lastName)
      ) {
        matchingResultData.push({
          name: composer.name,
          birthYear: composer.birthYear,
          deathYear: composer.deathYear,
          era: composer.era,
          nationality: composer.nationality,
        });
      } else if (composer.era === "Baroque") {
        matchingResultData.push({
          name: composer.name,
          birthYear: composer.birthYear,
          deathYear: composer.deathYear,
          era: composer.era,
          nationality: composer.nationality,
        });
      } else {
        console.log("no match");
      }
    });
    setTempSearchInput(matchingResultData);
    console.log(matchingResultData);
  };

  // function lookForResults(searchResults) {
  //   const matchingResultData = [];
  //   processedComposers.data.map((composer) => {
  //     if (
  //       composer.name.includes(
  //         searchResults.firstName.valueOf | searchResults.lastName.valueOf
  //       )
  //     ) {
  //       matchingResultData.push(new Object({ name: composer.name }));
  //     }
  //     return matchingResultData;
  //   });
  // }

  return (
    <div className="searchContainer">
      <h1>
        Who's That <small>(com)</small>Poser?
      </h1>
      <form onSubmit={handleSubmit}>
        <span id="firstNameLabel">
          <label htmlFor="firstName">Composer First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </span>

        <span id="lastNameLabel">
          <label htmlFor="lastName">Composer Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </span>
        <span id="eraLabel">
          <label htmlFor="era">Musical Period</label>
          <br />
          <select id="era" name="era" type="text">
            <option value=""></option>
            <option value="medieval">Medieval</option>
            <option value="renaissance">Renaissance</option>
            <option value="baroque">Baroque</option>
            <option value="classical">Classical</option>
            <option value="romantic">Romantic</option>
            <option value="modern">Modern</option>
          </select>
        </span>
        <span id="nationalityLabel">
          <label htmlFor="nationality">Country of Birth:</label>
          <br />
          <input type="text" id="nationality" name="nationality" />
        </span>
        <button id="submit">Find them!</button>
      </form>
    </div>
  );
}
