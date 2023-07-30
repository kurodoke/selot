import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ data: `test` }));
});

app.get("/api/getsession", async function (req, res) {
    const baseURL =
        "https://demogamesfree-asia.pragmaticplay.net/gs2c/openGame.do?lang=id&cur=IDR&gameSymbol=vs20olympgate&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99";
    const responseFetch = await fetch(baseURL, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
            "Accept-Language": "en-US,en;q=0.9",
        },
        cache: "no-cache",
    });

    const data = await responseFetch.text();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ data: data }));
});

app.listen(3001, () =>
    console.log("Express server is running on localhost:3001")
);
