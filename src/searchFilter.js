import processedComposers from "../processedComposers.json";

function filterComposers(composers, filterProp, filterValue) {
  composers.filter((composer) => {
    composer[filterProp].toLowercase().includes(filterValue.toLowercase());
  });
}
