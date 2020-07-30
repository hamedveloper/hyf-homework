//A future age calculator

let yearOfBirth = 1982;
let yearFuture = 2046;
let age;
age = yearFuture - yearOfBirth;
console.log("\"You will be " + age + " years old in " + yearFuture + "\"");

//A dog age calculator

let dogYearOfBirth = 2000;
let dogYearFuture = 2010;
let dogYear = (dogYearFuture - dogYearOfBirth) * 4;
let shouldShowResultInDogYears;
if (shouldShowResultInDogYears = true) {
    console.log("\"Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "\"");
} else {
    console.log("afe\"Your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in " + dogYearFuture + "\"")
}

//Housey Pricey

let housePrice;
let volumInMeters;
let gardenSizeInM2;
volumInMeters = 8 * 10 * 10;
gardenSizeInM2 = 100;
housePrice = volumInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < 2500000) {
    console.log("Peter is paying too much for house")
} else {
    console.log("The price house which peter has selected is reasonable.")
};
volumInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
if (housePrice < 1000000) {
    console.log("Julia is paying too much for house")
} else {
    console.log("The price house which Julia has selected is reasonable.")
};

//Startup name generator

let firstWord = ["Metamesh", "XYber", "Humanizing", "Dom", "Avanto", "Lightly", "Lucidity", "Blockchain", "Techtrends", "Max"];
let secondWord = ["Safegaurd", "Easy", "Awesom", "Corporate", "Handy", "Lightshow", "Compo", "Datak", "Always", "righty"];
const randomNumber = Math.floor(Math.random() * 10) + 0
let startupName = firstWord[randomNumber] + " " + secondWord[randomNumber];
console.log("The startp: " + "\"" + startupName + "\"" + " contains " + startupName.length + " characters.");