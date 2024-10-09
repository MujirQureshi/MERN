const express = require("express");

const app = express();

app.get("/example", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("Plain text response");
    },
    "application/json": () => {
        res.json({ message: "JSON response" });
    },
    "text/html": () => {
        res.send("<h1>HTML response</h1>");
    },
    default: () => {
      res.status(406).send("Nothing Matched");
    },
  });
});

app.listen(3005, function () {
  console.log("Server is running on port 3005");
});
