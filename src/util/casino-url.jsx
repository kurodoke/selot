import axios from "axios";
import * as cheerio from "cheerio";
import pretty from "pretty";

const baseURL = "https://j4f.world/games/pragmatic-play/?game=vs20olympgate";

async function scrapeSession() {
    try {
        // const { data } = await axios.get(baseURL);

        const responseFetch = await fetch(baseURL, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
                "Accept-Language": "en-US,en;q=0.9",
            },
            cache: "no-cache",
        });

        const data = await responseFetch.text();

        const $ = cheerio.load(data);
        console.log(pretty($.html()));
    } catch (err) {
        console.log(err);
    }
}

scrapeSession();
