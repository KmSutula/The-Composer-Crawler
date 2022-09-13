const { readFile } = require("fs/promises");

async function processComposers() {
  const processedComposers = [];
  const deComposersString = await (
    await readFile("./data/deComposerData.json")
  ).toString();
  const engComposersString = await (
    await readFile("./data/engComposerData.json")
  ).toString();
  const engComposers = JSON.parse(engComposersString);
  const deComposers = JSON.parse(deComposersString);

  const allComposers = [...engComposers, ...deComposers];

  allComposers.forEach((composer) => {
    const birthRegex = /^(\d{3,4})_births$/;
    const deathRegex = /^(\d{3,4})_deaths$/;
    const eraRegex =
      /(renaissance|classical|neoclassical|romantic|baroque|medieval|modern|modernist|postmodern)_composers$/i;
    const nationalityRegex =
      /(hungarian|german|english|french|italian|norwegian|austrian|slovenian|american|canadian|finnish|indian)_composers$/i;
    const composerInfo = {
      name: composer.title,
      birthYear: findMatchingCategory(composer.categories, birthRegex),
      deathYear: findMatchingCategory(composer.categories, deathRegex),
      era: findMatchingCategory(composer.categories, eraRegex),
      nationality: findMatchingCategory(composer.categories, nationalityRegex),
    };
    if (composerInfo.birthYear && composerInfo.deathYear) {
      processedComposers.push(composerInfo);
    }
  });
  return processedComposers;
}

function findMatchingCategory(categories, regexPattern) {
  const foundCategory = categories.find((category) =>
    category["*"].match(regexPattern)
  );
  return foundCategory ? foundCategory["*"].match(regexPattern)[1] : undefined;
}

module.exports = processComposers;
