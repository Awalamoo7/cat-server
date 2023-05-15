const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const Cat = require("./models/cats");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
	response.json("You are on the root route of my cat app.");
});
app.get("/cats", async (request, response) => {
	const cats = await Cat.find();
	response.json(cats);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
