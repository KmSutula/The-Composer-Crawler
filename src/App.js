import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

// import { CSSTransition } from "react-transition-group";
// import { getDefaultLibFilePath } from "typescript";
// import processedComposers from "./processedComposers.json";

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://gktmdqdpkghirmzppglz.supabase.co",
  "sb_publishable_8nlrXtuPBqWjKmj12tVh-Q_Q9h7eSVK"
);

export default function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [fetchedComposers, setFetchedComposers] = React.useState([]);

  //get composers from Database
  async function fetchComposers() {
    const { data, error } = await supabase.from("Composer Details").select();

    setFetchedComposers(data);
  }

  React.useEffect(() => {
    fetchComposers();
  }, []);

  //handle submission of form
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchComposers().then(() => {
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
        fetchedComposers
      );

      return setSearchResults(matchingResults);
    });
  };

  //filter composers to match query
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

  function displaySearchResults(newQuery) {
    handleSubmit(newQuery);
  }

  return (
    <>
      <Navbar />
      <Main
        searchResults={searchResults}
        displaySearchResults={displaySearchResults}
      />

      {/* <CSSTransition timeout={2000} classNames="display" appear> */}

      {/* </CSSTransition> */}
    </>
  );
}
