import { createClient } from "@supabase/supabase-js";
// const wiki = require('wikipedia')

const supabase = createClient(
  "https://defwlxtjheiyteeqncqz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZndseHRqaGVpeXRlZXFuY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjExOTk1NTksImV4cCI6MTk3Njc3NTU1OX0.GaNNRRH71tWtEZuf30QlaeIwfmMPX3vhS8c9LjMoUxE"
);

// let composers = [];
// let NameArrs = [];
// let firstNameArrs = [];
// let lastNameArrs = [];

// const unorderedlist = document.querySelectorAll(".worklist");
// const lists = Array.from(unorderedlist);

// const items = lists.forEach((item) => {
//   const li = item.querySelectorAll("li");
//   const listofLi = Array.from(li);
//   listofLi.forEach((item) => {
//     composers.push(item.innerText);
//   });
//   //   console.log(composers);
// });

// composers.map((composer) => {
//   const composerArrs = NameArrs.push(composer.split(","));
// });

// NameArrs.forEach((composerArr) => lastNameArrs.push(composerArr.slice(0, 1)));
// NameArrs.forEach((composerArr) => firstNameArrs.push(composerArr.slice(1)));

// const lastNames = Array.prototype.concat.apply([], lastNameArrs);
// const firstNames = Array.prototype.concat.apply([], firstNameArrs);

// const firstNamesFinal = firstNames.map((name) => {
//   return name.trim();
// });

// const lastNamesFinal = lastNames.map((name) => {
//   const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   return result;
// });

const firstNamesFinal = [
  "Carl Friedrich",
  "Adolphe-Charles",
  "John",
  "Alexander",
  "Jehan",
  "Isaac",
  "Tomaso",
  "Johann Georg",
  "x el sabio",
  "Charles-Valentin",
  "Georgio",
  "William",
  "Gioachino",
  "Jean-Henri",
  "George",
  "Jacob",
  "Thomas Augustine",
  "Malcolm",
  "Kurt",
  "Daniel-François",
  "Milton",
  "Grażyna",
  "Carl Philipp Emanuel",
  "Johann Christian",
  "Johann Sebastian",
  "Wilhelm Friedemann",
  "Samuel",
  "Ernst",
  "Jean",
  "Béla",
  "Arnold",
  "Ludwig van",
  "Vincenzo",
  "Alban",
  "Luciano",
  "Hector",
  "Leonard",
  "Franz",
  "Heinrich Ignaz",
  "Gilles",
  "Georges",
  "Ernest",
  "Luigi",
  "François-Adrien",
  "Arrigo",
  "Guillaume",
  "Alexander",
  "Pierre",
  "William",
  "Johannes",
  "Havergal",
  "Frank",
  "Benjamin",
  "Max",
  "Anton",
  "Antoine",
  "Gavin",
  "John",
  "Antoine",
  "Ferruccio",
  "Dietrich",
  "William",
  "Antonio de",
  "Giulio",
  "John",
  "Antonio",
  "Elliott",
  "Ferdinando",
  "Robert",
  "Georgi Lvovitch",
  "Emmanuel",
  "Gustave",
  "Marc-Antoine",
  "Ernest",
  "Frédéric",
  "Johannes",
  "Francesco",
  "Domenico",
  "Aaron",
  "Arcangelo",
  "Johannes",
  "Pieter",
  "William",
  "Michel",
  "François",
  "George",
  "Bernhard Henrik",
  "Luigi",
  "Franz",
  "Peter Maxwell",
  "Claude",
  "Michel Richard",
  "Léo",
  "Frederick",
  "Norman",
  "David",
  "Karl Ditters von",
  "Ernõ",
  "Gaetano",
  "John",
  "Eustache",
  "Guillaume",
  "Paul",
  "Maurice",
  "Antonín",
  "Hanns",
  "Edward",
  "Georges",
  "Ferenc",
  "Manuel de",
  "Guido Alberto",
  "Johann Friederich",
  "Gabriel",
  "Robert",
  "Morton",
  "Brian",
  "John",
  "Gerald",
  "Johann Caspar",
  "Arthur",
  "César",
  "Benjamin",
  "Girolamo",
  "Johann Jakob",
  "Walter",
  "Giovanni",
  "Niels Wilhelm",
  "Francesco",
  "George",
  "Don Carlo",
  "Orlando",
  "Alberto",
  "Umberto",
  "Mauro",
  "Philip",
  "Alexander",
  "Reinhold",
  "Mikhail",
  "Christoph Willibald",
  "Johann Gottlieb",
  "Nicholas",
  "Henryk",
  "Louis Moreau",
  "Morton",
  "Charles",
  "Percy Aldridge",
  "Enrique",
  "Edvard",
  "Charles Tomlinson",
  "Nicolas de",
  "Sofia",
  "George Frideric",
  "Howard",
  "Roy",
  "Lou",
  "Karl Amadeus",
  "Johann Adolf",
  "Franz Joseph",
  "John",
  "Pantaleon",
  "Johann David",
  "Hans Werner",
  "Paul",
  "Lee",
  "Gustav",
  "Arthur",
  "Alan",
  "Herbert",
  "Johann Nepomuk",
  "Engelbert",
  "Jacques",
  "Vincent",
  "Heinrich",
  "Charles",
  "Leos",
  "Clément",
  "John",
  "Scott",
  "Josquin",
  "Aram",
  "Tikhon",
  "William",
  "Zoltán",
  "Joonas",
  "Ernst",
  "Franz",
  "Édouard",
  "John David",
  "Francesco",
  "Pierre de",
  "Lars-Erik",
  "Orlandus",
  "William",
  "Jean Marie",
  "Franz",
  "Claude",
  "Ruggero",
  "Oscar",
  "György",
  "Douglas",
  "Magnus",
  "Franz",
  "Pietro",
  "Matthew",
  "Jean Baptiste",
  "Antonio",
  "Jean Baptiste",
  "Witold",
  "Luzzasco",
  "Edward",
  "Guillaume de",
  "James",
  "Giovanni De",
  "Gustav",
  "Francesco",
  "Marin",
  "Alessandro",
  "Frank",
  "Bohuslav",
  "Tauno",
  "Pietro",
  "Jules",
  "Felix",
  "Gian Carlo",
  "Giuseppe",
  "Claudio",
  "Olivier",
  "Giacomo",
  "Darius",
  "Ernest John",
  "Federico",
  "Claudio",
  "Christobal de",
  "Moritz",
  "Wolfgang",
  "Georg",
  "William",
  "Modest",
  "Nicolai",
  "Conlon",
  "Carl",
  "Luigi",
  "Johannes",
  "Jacques",
  "Pauline",
  "Georges",
  "Carl",
  "Buxton",
  "Johann",
  "Niccolò",
  "John Knowles",
  "Giovanni",
  "Charles Hubert Hastings",
  "Arvo",
  "Harry",
  "Francisco de",
  "Krzysztof",
  "Giovanni Battista",
  "Gustav Allan",
  "Peter",
  "Johann Georg",
  "Walter",
  "Amilcare",
  "Francis",
  "Micheal",
  "Serge",
  "Giacomo",
  "Henry",
  "Johann Joachim",
  "Sergei",
  "Jean Philippe",
  "Maurice",
  "Max",
  "Steve",
  "Anton",
  "Ottorino",
  "Silvestre",
  "Roger",
  "Josef Gabriel",
  "Terry",
  "Nikolai",
  "Giovanni Alberto",
  "Joaquín",
  "Johan Helmich",
  "Ned",
  "Antonio",
  "Arnold",
  "Gioachino",
  "Albert",
  "Miklós",
  "Edmund",
  "Alan",
  "Camille",
  "Aulis",
  "Pablo de",
  "Erik",
  "Alessandro",
  "Domenico",
  "Giacinto",
  "Franz",
  "Johann Christian",
  "Alfred",
  "Johann",
  "Arnold",
  "Franz",
  "Gunther",
  "William",
  "Robert",
  "Heinrich",
  "Alexander",
  "Peter Joshua",
  "Humphrey",
  "Jose Antonio",
  "Roger",
  "Dmitri",
  "Jean",
  "Robert",
  "Bedrich",
  "Padre Antonio",
  "Fernando",
  "Louis",
  "Carl",
  "Charles Villiers",
  "John",
  "Karlheinz",
  "Johann Sr.",
  "Johann II",
  "Richard",
  "Igor",
  "Morton",
  "Franz von",
  "Jan Pieterszoon",
  "Karol",
  "Tōru",
  "Thomas",
  "Giuseppe",
  "John Kenneth",
  "John",
  "Piotr Ilyitch",
  "Georg Philipp",
  "Ambroise",
  "Randall",
  "Virgil",
  "Michael",
  "Jehan",
  "Giuseppe",
  "Michael",
  "Charles",
  "Giovanni Maria",
  "George",
  "Eduard",
  "Joaquín",
  "Christopher",
  "Edgard",
  "Ralph",
  "Francesco Maria",
  "Giuseppe",
  "Tomás Luis de",
  "Heitor",
  "Philippe de",
  "Antonio",
  "Richard",
  "William",
  "Peter",
  "Unico Wilhelm",
  "Carl Maria von",
  "Anton",
  "Thomas",
  "Kurt",
  "Mieczysław",
  "Sylvius Leopold",
  "Alec",
  "Adrian",
  "Malcolm",
  "Hugo",
  "Oswald von",
  "Stefan",
  "Charles",
  "Yannis",
  "Eugene",
  "Jan Dismas",
  "Ellen Taaffe",
];

//LAST NAMES
const lastNamesFinal = [
  "Abel",
  "Adam",
  "Adams",
  "Agricola",
  "Alain",
  "Albeniz",
  "Albinoni",
  "Albrechtsberger",
  "Alfonso",
  "Alkan",
  "Allegri",
  "Alwyn",
  "Angelo",
  "D'anglebert",
  "Antheil",
  "Arcadelt",
  "Arne",
  "Arnold",
  "Atterberg",
  "Auber",
  "Babbitt",
  "Bacewicz",
  "Bach",
  "Bach",
  "Bach",
  "Bach",
  "Barber",
  "Bacon",
  "Barraqué",
  "Bartók",
  "Bax",
  "Beethoven",
  "Bellini",
  "Berg",
  "Berio",
  "Berlioz",
  "Bernstein",
  "Berwald",
  "Biber",
  "Binchois",
  "Bizet",
  "Bloch",
  "Boccherini",
  "Boïeldieu",
  "Boïto",
  "Boni",
  "Borodin",
  "Boulez",
  "Boyce",
  "Brahms",
  "Brian",
  "Bridge",
  "Britten",
  "Bruch",
  "Bruckner",
  "Brumel",
  "Bryars",
  "Bull",
  "Busnoys",
  "Busoni",
  "Buxtehude",
  "Byrd",
  "Cabezon",
  "Caccini",
  "Cage",
  "Caldara",
  "Carter",
  "Carulli",
  "Carver",
  "Catoire",
  "Chabrier",
  "Charpentier",
  "Charpentier",
  "Chausson",
  "Chopin",
  "Ciconia",
  "Cilèa",
  "Cimarosa",
  "Copland",
  "Corelli",
  "Cornago",
  "Cornet",
  "Cornysh",
  "Corrette",
  "Couperin",
  "Crumb",
  "Crusell",
  "Dallapiccola",
  "Danzi",
  "Davies",
  "Debussy",
  "Delalande",
  "Delibes",
  "Delius",
  "Dello joio",
  "Diamond",
  "Dittersdorf",
  "Dohnányi",
  "Donizetti",
  "Dowland",
  "Du caurroy",
  "Dufay",
  "Dukas",
  "Duruflé",
  "Dvořák",
  "Eisler",
  "Elgar",
  "Enesco",
  "Erkel",
  "Falla",
  "Fano",
  "Fasch",
  "Fauré",
  "Fayrfax",
  "Feldman",
  "Ferneyhough",
  "Field",
  "Finzi",
  "Fischer",
  "Foote",
  "Franck",
  "Frankel",
  "Frescobaldi",
  "Froberger",
  "Frye",
  "Gilbert & sullivan",
  "Gabrieli",
  "Gade",
  "Gay & pepusch",
  "Geminiani",
  "Gershwin",
  "Gesualdo",
  "Gibbons",
  "Ginastera",
  "Giordano",
  "Giuliani",
  "Glass",
  "Glazunov",
  "Glière",
  "Glinka",
  "Gluck",
  "Goldberg",
  "Gombert",
  "Górecki",
  "Gottschalk",
  "Gould",
  "Gounod",
  "Grainger",
  "Granados",
  "Gregorian chant",
  "Grieg",
  "Griffes",
  "Grigny",
  "Gubaidulina",
  "Handel",
  "Hanson",
  "Harris",
  "Harrison",
  "Hartmann",
  "Hasse",
  "Haydn",
  "Hebden",
  "Hebenstreit",
  "Heinichen",
  "Henze",
  "Hildegard von bingen",
  "Hindemith",
  "Hoiby",
  "Holst",
  "Honegger",
  "Hovhaness",
  "Howells",
  "Hummel",
  "Humperdinck",
  "Ibert",
  "D'indy",
  "Isaac",
  "Ives",
  "Janácek",
  "Janequin",
  "Jenkins",
  "Joplin",
  "Des prez",
  "Khachaturian",
  "Khrennikov",
  "Kinloch",
  "Kodály",
  "Kokkonen",
  "Krenek",
  "Krommer",
  "Lalo",
  "Lamb",
  "Landini",
  "La rue",
  "Larsson",
  "Lassus",
  "Lawes",
  "Leclair",
  "Lehár",
  "Le jeune",
  "Leoncavallo",
  "Levant",
  "Ligeti",
  "Lilburn",
  "Lindberg",
  "Liszt",
  "Locatelli",
  "Locke",
  "Loeillet",
  "Lotti",
  "Lully",
  "Lutoslawski",
  "Luzzaschi",
  "Macdowell",
  "Machaut",
  "Macmillan",
  "Macque",
  "Mahler",
  "Manfredini",
  "Marais",
  "Marcello",
  "Martin",
  "Martinu",
  "Marttinen",
  "Mascagni",
  "Massenet",
  "Medieval music collections",
  "Mendelssohn",
  "Menotti",
  "Mercadante",
  "Merulo",
  "Messiaen",
  "Meyerbeer",
  "Milhaud",
  "Moeran",
  "Mompou",
  "Monteverdi",
  "Morales",
  "Moszkowski",
  "Mozart",
  "Muffat",
  "Mundy",
  "Mussorgsky",
  "Myaskovsky",
  "Nancarrow",
  "Nielsen",
  "Nono",
  "Ockeghem",
  "Offenbach",
  "Oliveros",
  "Onslow",
  "Orff",
  "Orr",
  "Pachelbel",
  "Paganini",
  "Paine",
  "Palestrina",
  "Parry",
  "Pärt",
  "Partch",
  "Peñalosa",
  "Penderecki",
  "Pergolesi",
  "Perotin",
  "Pettersson",
  "Philips",
  "Pisendel",
  "Piston",
  "Ponchielli",
  "Poulenc",
  "Praetorius",
  "Prokofieff",
  "Puccini",
  "Purcell",
  "Quantz",
  "Rachmaninoff",
  "Rameau",
  "Ravel",
  "Reger",
  "Reich",
  "Reicha",
  "Renaissance music collections",
  "Respighi",
  "Revueltas",
  "Reynolds",
  "Rheinberger",
  "Riley",
  "Rimsky-korsakov",
  "Ristori",
  "Rodrigo",
  "Roman",
  "Rorem",
  "Rosetti",
  "Rosner",
  "Rossini",
  "Roussel",
  "Rózsa",
  "Rubbra",
  "Rawsthorne",
  "Saint-saëns",
  "Sallinen",
  "Sarasate",
  "Satie",
  "Scarlatti",
  "Scarlatti",
  "Scelsi",
  "Schmidt",
  "Schmidt",
  "Schnittke",
  "Schobert",
  "Schoenberg",
  "Schubert",
  "Schuller",
  "Schuman",
  "Schumann",
  "Schutz",
  "Scriabin",
  "Sculthorpe",
  "Searle",
  "Seixas",
  "Sessions",
  "Shostakovich",
  "Sibelius",
  "Simpson",
  "Smetana",
  "Soler",
  "Sor",
  "Spohr",
  "Stamitz",
  "Stanford",
  "Stanley",
  "Stockhausen",
  "Strauss",
  "Strauss",
  "Strauss",
  "Stravinsky",
  "Subotnick",
  "Suppé",
  "Sweelinck",
  "Szymanowski",
  "Takemitsu",
  "Tallis",
  "Tartini",
  "Tavener",
  "Taverner",
  "Tchaikovsky",
  "Telemann",
  "Thomas",
  "Thompson",
  "Thomson",
  "Tippett",
  "Titelouze",
  "Torelli",
  "Torke",
  "Tournemire",
  "Trabaci",
  "Tsontakis",
  "Tubin",
  "Turina",
  "Tye",
  "Varese",
  "Vaughan williams",
  "Veracini",
  "Verdi",
  "Victoria",
  "Villa-lôbos",
  "Vitry",
  "Vivaldi",
  "Wagner",
  "Walton",
  "Warlock",
  "Wassenaer",
  "Weber",
  "Webern",
  "Weelkes",
  "Weill",
  "Weinberg",
  "Weiss",
  "Wilder",
  "Willaert",
  "Williamson",
  "Wolf",
  "Wolkenstein",
  "Wolpe",
  "Wuorinen",
  "Xenakis",
  "Ysaÿe",
  "Zelenka",
  "Zwilich",
];

const composerNames = firstNamesFinal.map((firstName, i) => {
  return { firstName, lastName: lastNamesFinal[i] };
});
async function insertRows() {
  const { data, error } = await supabase
    .from("Composer Details")
    .insert(composerNames);
}
insertRows().then();

// FULL NAMES

// [
//   "ABEL, Carl Friedrich",
//   "ADAM, Adolphe-Charles",
//   "ADAMS, John",
//   "AGRICOLA, Alexander",
//   "ALAIN, Jehan",
//   "ALBENIZ, Isaac",
//   "ALBINONI, Tomaso",
//   "ALBRECHTSBERGER, Johann Georg",
//   'ALFONSO X "El Sabio"',
//   "ALKAN, Charles-Valentin",
//   "ALLEGRI, Georgio",
//   "ALWYN, William",
//   "ANGELO, Gioachino",
//   "D'ANGLEBERT, Jean-Henri",
//   "ANTHEIL, George",
//   "ARCADELT, Jacob",
//   "ARNE, Thomas Augustine",
//   "ARNOLD, Malcolm",
//   "ATTERBERG, Kurt",
//   "AUBER, Daniel-François",
//   "BABBITT, Milton",
//   "BACEWICZ, Grażyna",
//   "BACH, Carl Philipp Emanuel",
//   "BACH, Johann Christian",
//   "BACH, Johann Sebastian",
//   "BACH, Wilhelm Friedemann",
//   "BARBER, Samuel",
//   "BACON, Ernst",
//   "BARRAQUÉ, Jean",
//   "BARTÓK, Béla",
//   "BAX, Arnold",
//   "BEETHOVEN, Ludwig van",
//   "BELLINI, Vincenzo",
//   "BERG, Alban",
//   "BERIO, Luciano",
//   "BERLIOZ, Hector",
//   "BERNSTEIN, Leonard",
//   "BERWALD, Franz",
//   "BIBER, Heinrich Ignaz",
//   "BINCHOIS, Gilles",
//   "BIZET, Georges",
//   "BLOCH, Ernest",
//   "BOCCHERINI, Luigi",
//   "BOÏELDIEU, François-Adrien",
//   "BOÏTO, Arrigo",
//   "BONI, Guillaume",
//   "BORODIN, Alexander",
//   "BOULEZ, Pierre",
//   "BOYCE, William",
//   "BRAHMS, Johannes",
//   "BRIAN, Havergal",
//   "BRIDGE, Frank",
//   "BRITTEN, Benjamin",
//   "BRUCH, Max",
//   "BRUCKNER, Anton",
//   "BRUMEL, Antoine",
//   "BRYARS, Gavin",
//   "BULL, John",
//   "BUSNOYS, Antoine",
//   "BUSONI, Ferruccio",
//   "BUXTEHUDE, Dietrich",
//   "BYRD, William",
//   "CABEZON, Antonio de",
//   "CACCINI, Giulio",
//   "CAGE, John",
//   "CALDARA, Antonio",
//   "CARTER, Elliott",
//   "CARULLI, Ferdinando",
//   "CARVER, Robert",
//   "CATOIRE, Georgi Lvovitch",
//   "CHABRIER, Emmanuel",
//   "CHARPENTIER, Gustave",
//   "CHARPENTIER, Marc-Antoine",
//   "CHAUSSON, Ernest",
//   "CHOPIN, Frédéric",
//   "CICONIA, Johannes",
//   "CILÈA, Francesco",
//   "CIMAROSA, Domenico",
//   "COPLAND, Aaron",
//   "CORELLI, Arcangelo",
//   "CORNAGO, Johannes",
//   "CORNET, Pieter",
//   "CORNYSH, William",
//   "CORRETTE, Michel",
//   "COUPERIN, François",
//   "CRUMB, George",
//   "CRUSELL, Bernhard Henrik",
//   "DALLAPICCOLA, Luigi",
//   "DANZI, Franz",
//   "DAVIES, Peter Maxwell",
//   "DEBUSSY, Claude",
//   "DELALANDE, Michel Richard",
//   "DELIBES, Léo",
//   "DELIUS, Frederick",
//   "DELLO JOIO, Norman",
//   "DIAMOND, David",
//   "DITTERSDORF, Karl Ditters von",
//   "DOHNÁNYI, Ernõ",
//   "DONIZETTI, Gaetano",
//   "DOWLAND, John",
//   "DU CAURROY, Eustache",
//   "DUFAY, Guillaume",
//   "DUKAS, Paul",
//   "DURUFLÉ, Maurice",
//   "DVOŘÁK, Antonín",
//   "EISLER, Hanns",
//   "ELGAR, Edward",
//   "ENESCO, Georges",
//   "ERKEL, Ferenc",
//   "FALLA, Manuel de",
//   "FANO, Guido Alberto",
//   "FASCH, Johann Friederich",
//   "FAURÉ, Gabriel",
//   "FAYRFAX, Robert",
//   "FELDMAN, Morton",
//   "FERNEYHOUGH, Brian",
//   "FIELD, John",
//   "FINZI, Gerald",
//   "FISCHER, Johann Caspar",
//   "FOOTE, Arthur",
//   "FRANCK, César",
//   "FRANKEL, Benjamin",
//   "FRESCOBALDI, Girolamo",
//   "FROBERGER, Johann Jakob",
//   "FRYE, Walter",
//   "GILBERT & SULLIVAN",
//   "GABRIELI, Giovanni",
//   "GADE, Niels Wilhelm",
//   "GAY & PEPUSCH",
//   "GEMINIANI, Francesco",
//   "GERSHWIN, George",
//   "GESUALDO, Don Carlo",
//   "GIBBONS, Orlando",
//   "GINASTERA, Alberto",
//   "GIORDANO, Umberto",
//   "GIULIANI, Mauro",
//   "GLASS, Philip",
//   "GLAZUNOV, Alexander",
//   "GLIÈRE, Reinhold",
//   "GLINKA, Mikhail",
//   "GLUCK, Christoph Willibald",
//   "GOLDBERG, Johann Gottlieb",
//   "GOMBERT, Nicholas",
//   "GÓRECKI, Henryk",
//   "GOTTSCHALK, Louis Moreau",
//   "GOULD, Morton",
//   "GOUNOD, Charles",
//   "GRAINGER, Percy Aldridge",
//   "GRANADOS, Enrique",
//   "Gregorian Chant",
//   "GRIEG, Edvard",
//   "GRIFFES, Charles Tomlinson",
//   "GRIGNY, Nicolas de",
//   "GUBAIDULINA, Sofia",
//   "HANDEL, George Frideric",
//   "HANSON, Howard",
//   "HARRIS, Roy",
//   "HARRISON, Lou",
//   "HARTMANN, Karl Amadeus",
//   "HASSE, Johann Adolf",
//   "HAYDN, Franz Joseph",
//   "HEBDEN, John",
//   "HEBENSTREIT, Pantaleon",
//   "HEINICHEN, Johann David",
//   "HENZE, Hans Werner",
//   "HILDEGARD von Bingen",
//   "HINDEMITH, Paul",
//   "HOIBY, Lee",
//   "HOLST, Gustav",
//   "HONEGGER, Arthur",
//   "HOVHANESS, Alan",
//   "HOWELLS, Herbert",
//   "HUMMEL, Johann Nepomuk",
//   "HUMPERDINCK, Engelbert",
//   "IBERT, Jacques",
//   "D'INDY, Vincent",
//   "ISAAC, Heinrich",
//   "IVES, Charles",
//   "JANÁCEK, Leos",
//   "JANEQUIN, Clément",
//   "JENKINS, John",
//   "JOPLIN, Scott",
//   "DES PREZ, Josquin",
//   "KHACHATURIAN, Aram",
//   "KHRENNIKOV, Tikhon",
//   "KINLOCH, William",
//   "KODÁLY, Zoltán",
//   "KOKKONEN, Joonas",
//   "KRENEK, Ernst",
//   "KROMMER, Franz",
//   "LALO, Édouard",
//   "LAMB, John David",
//   "LANDINI, Francesco",
//   "LA RUE, Pierre de",
//   "LARSSON, Lars-Erik",
//   "LASSUS, Orlandus",
//   "LAWES, William",
//   "LECLAIR, Jean Marie",
//   "LEHÁR, Franz",
//   "LE JEUNE, Claude",
//   "LEONCAVALLO, Ruggero",
//   "LEVANT, Oscar",
//   "LIGETI, György",
//   "LILBURN, Douglas",
//   "LINDBERG, Magnus",
//   "LISZT, Franz",
//   "LOCATELLI, Pietro",
//   "LOCKE, Matthew",
//   "LOEILLET, Jean Baptiste",
//   "LOTTI, Antonio",
//   "LULLY, Jean Baptiste",
//   "LUTOSLAWSKI, Witold",
//   "LUZZASCHI, Luzzasco",
//   "MacDOWELL, Edward",
//   "MACHAUT, Guillaume de",
//   "MacMILLAN, James",
//   "MACQUE, Giovanni De",
//   "MAHLER, Gustav",
//   "MANFREDINI, Francesco",
//   "MARAIS, Marin",
//   "MARCELLO, Alessandro",
//   "MARTIN, Frank",
//   "MARTINU, Bohuslav",
//   "MARTTINEN, Tauno",
//   "MASCAGNI, Pietro",
//   "MASSENET, Jules",
//   "Medieval Music Collections",
//   "MENDELSSOHN, Felix",
//   "MENOTTI, Gian Carlo",
//   "MERCADANTE, Giuseppe",
//   "MERULO, Claudio",
//   "MESSIAEN, Olivier",
//   "MEYERBEER, Giacomo",
//   "MILHAUD, Darius",
//   "MOERAN, Ernest John",
//   "MOMPOU, Federico",
//   "MONTEVERDI, Claudio",
//   "MORALES, Christobal de",
//   "MOSZKOWSKI, Moritz",
//   "MOZART, Wolfgang",
//   "MUFFAT, Georg",
//   "MUNDY, William",
//   "MUSSORGSKY, Modest",
//   "MYASKOVSKY, Nicolai",
//   "NANCARROW, Conlon",
//   "NIELSEN, Carl",
//   "NONO, Luigi",
//   "OCKEGHEM, Johannes",
//   "OFFENBACH, Jacques",
//   "OLIVEROS, Pauline",
//   "ONSLOW, Georges",
//   "ORFF, Carl",
//   "ORR, Buxton",
//   "PACHELBEL, Johann",
//   "PAGANINI, Niccolò",
//   "PAINE, John Knowles",
//   "PALESTRINA, Giovanni",
//   "PARRY, Charles Hubert Hastings",
//   "PÄRT, Arvo",
//   "PARTCH, Harry",
//   "PEÑALOSA, Francisco de",
//   "PENDERECKI, Krzysztof",
//   "PERGOLESI, Giovanni Battista",
//   "PEROTIN",
//   "PETTERSSON, Gustav Allan",
//   "PHILIPS, Peter",
//   "PISENDEL, Johann Georg",
//   "PISTON, Walter",
//   "PONCHIELLI, Amilcare",
//   "POULENC, Francis",
//   "PRAETORIUS, Micheal",
//   "Prokofieff, Serge",
//   "PUCCINI, Giacomo",
//   "PURCELL, Henry",
//   "QUANTZ, Johann Joachim",
//   "RACHMANINOFF, Sergei",
//   "RAMEAU, Jean Philippe",
//   "RAVEL, Maurice",
//   "REGER, Max",
//   "REICH, Steve",
//   "REICHA, Anton",
//   "Renaissance Music Collections",
//   "RESPIGHI, Ottorino",
//   "REVUELTAS, Silvestre ",
//   "REYNOLDS, Roger",
//   "RHEINBERGER, Josef Gabriel",
//   "RILEY, Terry",
//   "RIMSKY-KORSAKOV, Nikolai",
//   "RISTORI, Giovanni Alberto",
//   "RODRIGO, Joaquín",
//   "ROMAN, Johan Helmich",
//   "ROREM, Ned ",
//   "ROSETTI, Antonio",
//   "ROSNER, Arnold ",
//   "ROSSINI, Gioachino",
//   "ROUSSEL, Albert",
//   "RÓZSA, Miklós ",
//   "RUBBRA, Edmund",
//   "RAWSTHORNE, Alan ",
//   "SAINT-SAËNS, Camille",
//   "SALLINEN, Aulis",
//   "SARASATE, Pablo de",
//   "SATIE, Erik",
//   "SCARLATTI, Alessandro",
//   "SCARLATTI, Domenico",
//   "SCELSI, Giacinto",
//   "SCHMIDT, Franz",
//   "SCHMIDT, Johann Christian",
//   "SCHNITTKE, Alfred",
//   "SCHOBERT, Johann",
//   "SCHOENBERG, Arnold",
//   "SCHUBERT, Franz",
//   "SCHULLER, Gunther",
//   "SCHUMAN, William",
//   "SCHUMANN, Robert",
//   "SCHUTZ, Heinrich",
//   "SCRIABIN, Alexander",
//   "SCULTHORPE, Peter Joshua",
//   "SEARLE, Humphrey",
//   "SEIXAS, Jose Antonio",
//   "SESSIONS, Roger",
//   "SHOSTAKOVICH, Dmitri",
//   "SIBELIUS, Jean",
//   "SIMPSON, Robert",
//   "SMETANA, Bedrich",
//   "SOLER, Padre Antonio",
//   "SOR, Fernando",
//   "SPOHR, Louis",
//   "STAMITZ, Carl",
//   "STANFORD, Charles Villiers",
//   "STANLEY, John",
//   "STOCKHAUSEN, Karlheinz",
//   "STRAUSS, Johann Sr.",
//   "STRAUSS, Johann II",
//   "STRAUSS, Richard",
//   "STRAVINSKY, Igor",
//   "SUBOTNICK, Morton",
//   "SUPPÉ, Franz von",
//   "SWEELINCK, Jan Pieterszoon",
//   "SZYMANOWSKI, Karol",
//   "TAKEMITSU, Tōru",
//   "TALLIS, Thomas",
//   "TARTINI, Giuseppe",
//   "TAVENER, John Kenneth",
//   "TAVERNER, John",
//   "TCHAIKOVSKY, Piotr Ilyitch",
//   "TELEMANN, Georg Philipp",
//   "THOMAS, Ambroise",
//   "THOMPSON, Randall",
//   "THOMSON, Virgil",
//   "TIPPETT, Michael",
//   "TITELOUZE, Jehan",
//   "TORELLI, Giuseppe",
//   "TORKE, Michael",
//   "TOURNEMIRE, Charles",
//   "TRABACI, Giovanni Maria",
//   "TSONTAKIS, George",
//   "TUBIN, Eduard",
//   "TURINA, Joaquín",
//   "TYE, Christopher",
//   "VARESE, Edgard",
//   "VAUGHAN WILLIAMS, Ralph",
//   "VERACINI, Francesco Maria",
//   "VERDI, Giuseppe",
//   "VICTORIA, Tomás Luis de",
//   "VILLA-LÔBOS, Heitor",
//   "VITRY, Philippe de",
//   "VIVALDI, Antonio",
//   "WAGNER, Richard",
//   "WALTON, William",
//   "WARLOCK, Peter",
//   "WASSENAER, Unico Wilhelm",
//   "WEBER, Carl Maria von",
//   "WEBERN, Anton",
//   "WEELKES, Thomas",
//   "WEILL, Kurt",
//   "WEINBERG, Mieczysław",
//   "WEISS, Sylvius Leopold",
//   "WILDER, Alec",
//   "WILLAERT, Adrian",
//   "WILLIAMSON, Malcolm",
//   "WOLF, Hugo",
//   "WOLKENSTEIN, Oswald von",
//   "WOLPE, Stefan",
//   "WUORINEN, Charles",
//   "XENAKIS, Yannis",
//   "YSAŸE, Eugene",
//   "ZELENKA, Jan Dismas",
//   "ZWILICH, Ellen Taaffe",
// ];