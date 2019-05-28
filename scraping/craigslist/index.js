const request = require('request-promise');
const cheerio = require('cheerio');

const url = "https://boardgamegeek.com/boardgame/224517/brass-birmingham";

const scrapeSample = {
    Item: "Star Wars Rebellion board game by Fantasy Flight Games",
  condition:
    "Used",
  dateListed: new Date("2018-07-13"),
  url:
    "",
  hood: "(SOMA / south beach)",
  address: "1201 Bryant St.",
  price: "£20.00 +shipping"
}

// step 2 - Get the html ready to query

const scrapeResults = [];

async function scrapeGeekMarket() {
    try {
        const htmlResult = await request.get(url);
        const $ = await cheerio.load(htmlResult);
        const data = $("head > meta:nth-child(21)y");
        console.log(data);

        $(".game-description-body").each((index, element) => {
            const title = $(element).text();
            const scrapeResult = {title};
            scrapeResults.push(scrapeResult);

        });

console.log(scrapeResults);
return scrapeResults;



    } catch {
        console.error(error);
    }
}


scrapeGeekMarket();


// step 1 - check we can access the URL
/*
async function scrapeGeekMarket() {
    try {
        const htmlResult = await request.get(url);
        console.log(htmlResult);
    } catch {
        console.error(error);
    }
}
*/