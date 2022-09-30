import processedComposers from "../processedComposers.json";

function filterComposers(composers, filterProp, filterValue) {
  composers.filter((composer) => {
    composer[filterProp].toLowercase().includes(filterValue.toLowercase());
  });
}

// const matchingResultData = [];
//     processedComposers.data.map((composer) => {
//       if (
//         composer.name
//           .toLowerCase()
//           .includes(searchResults.firstName.toLowerCase()) |
//         composer.name.includes(searchResults.lastName)
//       ) {
//         matchingResultData.push({
//           name: composer.name,
//           birthYear: composer.birthYear,
//           deathYear: composer.deathYear,
//           era: composer.era,
//           nationality: composer.nationality,
//         });
//       } else if (composer.era === "Baroque") {
//         matchingResultData.push({
//           name: composer.name,
//           birthYear: composer.birthYear,
//           deathYear: composer.deathYear,
//           era: composer.era,
//           nationality: composer.nationality,
//         });
//       } else {
//         console.log("no match");
//       }
//     });
