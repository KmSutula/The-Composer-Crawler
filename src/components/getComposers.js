// const { createClient } = require("@supabase/supabase-js");
// const { supabase } = require("@supabase/supabase-js");

// const { data, error } = await supabase.from("countries").select();

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const savedSearchResultsObj = event.target.elements;
//   const matchingResults = Array.from(savedSearchResultsObj).reduce(
//     (composers, searchField) => {
//       if (searchField.value) {
//         const findComposers = filterComposers(
//           composers,
//           searchField.id,
//           searchField.value
//         );
//         searchField.value = null;
//         return findComposers;
//       } else {
//         return composers;
//       }
//     },
//     processedComposers
//   );

//   return setSearchResults(matchingResults);
// };
