const express = require("express");

const { json } = require("express");

const flight = require("./router/flightRoute");

const app = express();
app.use(json());

app.use("/flight", flight)

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("testing our flight app")
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));