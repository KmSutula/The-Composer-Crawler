import React from "react";
import Search from "./components/Search";
import Result from "./components/Result";

// import { CSSTransition } from "react-transition-group";
// import { getDefaultLibFilePath } from "typescript";
// import processedComposers from "./processedComposers.json";

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://defwlxtjheiyteeqncqz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZndseHRqaGVpeXRlZXFuY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjExOTk1NTksImV4cCI6MTk3Njc3NTU1OX0.GaNNRRH71tWtEZuf30QlaeIwfmMPX3vhS8c9LjMoUxE"
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
      <Search displaySearchResults={displaySearchResults} />
      <div className="resultsContainer">
        {/* <CSSTransition timeout={2000} classNames="display" appear> */}
        <Result searchResults={searchResults} />
        {/* </CSSTransition> */}
      </div>
    </>
  );
}
