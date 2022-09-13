// https://en.wikipedia.org/w/api.php?action=parse&format=json&page=List_of_composers_by_name

import axios from "axios";
import { writeFile } from "fs/promises";
// const { writeFile } = require("fs/promises");

async function getData() {
  const deComposerPages = [];
  const engComposerPages = [];

  const composerNamesWithScore = [];
  const composerCategories = [];
  const composerNamesSpaces = [];
  try {
    //get the full list of composers by name with spaces (array)
    const response = await axios.get(
      "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=List_of_composers_by_name"
    );
    let composerObj = response.data.parse.links;
    //extract just the name of each composer from obj - goes into composerNamesSpaces
    for (let i = 0; i < composerObj.length; i++) {
      composerNamesSpaces.push(composerObj[i]["*"]);
    }
  } catch (error) {
    console.log(error);
  }

  //insert underscores where there are spaces
  //when i used for each on composersNamesSpaces I didn't have success getting the underscores inserted - explore this
  try {
    for (let i = 0; i < composerNamesSpaces.length; i++) {
      let name = composerNamesSpaces[i].replace(/\s/g, "_");
      composerNamesWithScore.push(name);
    }
  } catch (error) {
    console.log(error);
  }

  //if the english page does not exist, use the german page (wikipedia page)
  for (let link of composerNamesWithScore) {
    console.log(link);
    try {
      const composerData = await axios.get(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/${link}/monthly/2022070100/2022080100`
      );
      console.log(composerData);
      const eachCompData = composerData.data.items[0].views;
      if (eachCompData > 2000) {
        // link = link.replace("_", " ");

        engComposerPages.push(link);
      }
    } catch (error) {
      console.log("not english");
    }

    try {
      const composerData = await axios.get(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/${link}/monthly/2022070100/2022080100`
      );
      const eachCompData = composerData.data.items[0].views;
      if (eachCompData > 2000) {
        // link = link.replace("_", " ");
        deComposerPages.push(link);
      }
    } catch (error) {
      console.log("not german");
    }
  }
  //finally, access those pages with 1500+ views last month and save that data to new files
  //the first loop i tried initiating with the file system thats mentioned in the document, the second one I left as my initial attempt

  const engComposerData = [];
  const deComposerData = [];

  for (let name of engComposerPages) {
    try {
      const composerData = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${name}`
      );
      engComposerData.push(composerData.data.parse);
      console.log(composerData.data.parse);
      // await fs.writeFile(
      //   `./engComposers/${name}.json`,
      //   JSON.stringify(composerData)
      // );
    } catch {
      console.log("error writing file");
    }
  }

  for (let name of deComposerPages) {
    try {
      const composerData = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${name}`
      );
      deComposerData.push(composerData.data.parse);
      console.log(composerData);
      // await writeFile(
      //   `./deComposers/${name}.json`,
      //   JSON.stringify(composerData)
      // );
    } catch {
      console.log("error writing file");
    }
  }

  await writeFile("./engComposerData.json", JSON.stringify(engComposerData));
  await writeFile("./deComposerData.json", JSON.stringify(deComposerData));
  console.log("completed");
}

getData().then();
