
<h1>The Composer Crawler</h1>
<h3>Live at: https://www.thecomposercrawler.com</h3>
  
  
  <h2>📋 Summary:</h2>
The purpose of this app is to assist music students in finding facts about common composers. The unstructured data for this project was scraped from the MediaWiki API of most searched for composers in the last year, and was transformed with a mixture of JavaScript algorithms and manual editing in Supabase. The goal going forward is to expand the data offered on the site. As it stands, this app is a good resource for birth/death dates, and musical era, which are the two most tested pieces of musical data on exams. These search terms can be incorporated in any combination to access results.


<h2>⚒️ Built with:</h2>
HTML 5 <br>
CSS 3<br>
JavaScript<br>
React<br>
Supabase<br>
API (<a href="https://www.mediawiki.org/wiki/API:Main_page">MediaWiki</a> & <a href="https://wikitech.wikimedia.org/wiki/Analytics/Pageviews">WikiTech</a>)

<h2>🚧 Obstacles/What I Learned:</h2>
<p>The most difficult part of this project by far was the transformation of data acquired by API calls. I first used the WikiTech API to determine the most popular composers by page views over the last year. In order to reduce the amount of manual data entry, I then created algorithms to pull entries from the US and DE Wikipedias (via MediaWiki), using asynchronous requests to access hundreds of individual composer pages. From that data, I created algorithms to create a new object structure for each composer that pulled information about their Wikipedia page categories by using regular expressions, matches, and if statements. This allowed me to access accurate data about their nationalities, birth, and death dates, and somewhat reliable information about their musical periods.</p>
<p>After this data acquisition, I also utilized Supabase for the first time to store my data. Luckily their documentation is fantastic, and I was able to populate my database using my JSON files.</p>

<h2>📸 Screenshots:</h2>
<img src="https://user-images.githubusercontent.com/94947661/204109720-3e63df9b-8c56-485a-a994-626ffd8392bf.png">
<img src="https://user-images.githubusercontent.com/94947661/204109698-ae6af95d-2bd3-4573-a09f-18f64829a93a.png">


