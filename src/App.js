import React from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import processedComposers from "./processedComposers.json";

export default function App() {
  const [searchTerms, setSearchTerms] = React.useState({
    firstName: "",
    lastName: "",
    era: "",
    nationality: "",
  });

  // const composers = processedComposers.data.map((item) => {
  //   return (
  //     <div className="container">
  //       <Result
  //         name={item.name}
  //         birthYear={item.birthYear}
  //         deathYear={item.deathYear}
  //         era={item.era}
  //         nationality={item.nationality}
  //       />
  //     </div>
  //   );
  // });
  return (
    <>
      <Search />
    </>
  );
}
