const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cats");

async function seed() {
	// create a few cats
	await Cat.create({
		name: "Holo",
		colour: "Blue",
		hasClaws: false,
		location: "London",
	});
	await Cat.create({
		name: "Aisha",
		colour: "Yellow",
		hasClaws: true,
		location: "Ibadan",
	});
	console.log("I have created cool cats!");
	mongoose.disconnect();
}

seed();
