const { createClient } = require("@supabase/supabase-js");
const processComposers = require("./processComposers.js");

const supabase = createClient(
  "https://defwlxtjheiyteeqncqz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZndseHRqaGVpeXRlZXFuY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjExOTk1NTksImV4cCI6MTk3Njc3NTU1OX0.GaNNRRH71tWtEZuf30QlaeIwfmMPX3vhS8c9LjMoUxE"
);

async function insertRows() {
  const { data, error } = await supabase
    .from("Composer Details")
    .insert(await processComposers());
}

insertRows()
  .then()
  .catch((error) => console.log(error));
