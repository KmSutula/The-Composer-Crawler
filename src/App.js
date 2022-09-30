import React from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import processedComposers from "./processedComposers.json";

export default function App() {
  const [searchResults, setSearchResults] = React.useState([]);

  function filterComposers(composers, filterProp, filterValue) {
    if (filterProp === "firstName" || filterProp === "lastName") {
      filterProp = "name";
    }
    return composers.filter((composer) => {
      if (composer[filterProp]) {
        return composer[filterProp]
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else {
        return false;
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedSearchResultsObj = event.target.elements;
    const matchingResults = Array.from(savedSearchResultsObj).reduce(
      (composers, searchField) => {
        if (searchField.value) {
          const findComposers = filterComposers(
            composers,
            searchField.id,
            searchField.value
          );
          searchField.value = null;
          return findComposers;
        } else {
          return composers;
        }
      },
      processedComposers
    );

    return setSearchResults(matchingResults);
  };

  function displaySearchResults(newQuery) {
    handleSubmit(newQuery);
  }

  // return <>{composers}</>;

  // setSearchTerms((searchTerms) => {
  //   searchTerms.forEach();
  // });
  // function transferData(event) {
  //   const { name, value, type } = event.target;
  //   setSearchTerms({
  //     firstName: name,
  //     lastName: name,
  //     era: "",
  //     nationality: "",
  //   });
  // }

  return (
    <>
      <Search displaySearchResults={displaySearchResults} />
      <div className="resultsContainer">
        <Result searchResults={searchResults} />
      </div>
    </>
  );
}
