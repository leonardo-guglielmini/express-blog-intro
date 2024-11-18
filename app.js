const express = require("express");
const post = require("./post.js");

const app = express();
const port = 3000;

const postCounter = post.length;
console.log(post);
console.log(postCounter);

app.get("/", (req, res) => {
    res.send("Server del mio blog");
})

app.get("/bacheca", (req, res) => {
    res.json({ post, postCounter });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})