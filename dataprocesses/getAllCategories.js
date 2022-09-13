import { writeFile, readFile } from "fs/promises";
// import { deathYear } from "./regex";

async function processComposers() {
  const deComposersString = await (
    await readFile("./deComposerData.json")
  ).toString();
  const deComposers = JSON.parse(deComposersString);
  const allCategories = new Set();
  deComposers.forEach((composer) => {
    composer.categories.forEach((category) => {
      allCategories.add(category["*"]);
    });
  });
  const sortedCategories = [...allCategories].sort((a, b) => {
    return a.localeCompare(b);
  });
  await writeFile("allCategoriesDe.txt", sortedCategories.join("\n"));
}

processComposers().then();
