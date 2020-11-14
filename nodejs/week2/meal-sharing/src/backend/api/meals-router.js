const { query, request } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

//...............Respond with the json for the meal with the corresponding id

router.get("/:id", async (request, response) => {

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    
    const realId = parseInt(request.params.id);
    const checkId = parseFloat(request.params.id);
    const idMeals = meals.map(meal => meal.id);
    
    //...What if there is no meal with the requested id

    if (idMeals.includes(checkId)) {
      correspondAnswer = meals.filter(meal => meal.id === realId);

      //.....What if the users writes a string as id

    } else if (isNaN(realId)) {
      
      response.status(400)
      correspondAnswer = "Please select a number as an id";

      //.....What if the users writes a non integer number as an id

    } else if (!Number.isInteger(checkId)) {
      correspondAnswer = `Please select an integer id`;

    } else correspondAnswer=`Please select a number through meal ID's : ${idMeals }`;

    response.send(correspondAnswer);
    
  } catch (error) {
    throw error;
  };
});

//.............................Respond with the json for all the meals

router.get("/", async (request, response) => {
  try {

//...........................................Respond with the json for all the meals
     
    if (Object.keys(request.query).length === 0) {
    
      response.send(meals);

      //...........................................Get meals that has a price smaller than maxPrice	      
    
    } else if (!isNaN(request.query.maxPrice)) {
    
      const maxPrice = request.query.maxPrice;
      const limitedPriceMeal = meals.filter(meal => meal.price < maxPrice);
      response.send(limitedPriceMeal);

      //...........................................Get meals that partially match a title

    } else if (request.query.title) {
    
      const mealTitle = request.query.title;
      const matchTitle = meals.filter(meal => meal.title.includes(mealTitle));
      response.send(matchTitle);


      //...........................................Get meals that has been created after the date
      
    } else if (!isNaN(parseInt(request.query.createdAfter)) && request.query.createdAfter) {

      const afterDate = request.query.createdAfter;
      const unixTime = parseInt((new Date(afterDate).getTime() / 1000).toFixed(0));
      const mealAfterYear = meals.filter(meal => {
        return parseInt((new Date(meal.createdAt).getTime() / 1000).toFixed(0)) > unixTime;
      });
      
      response.send(mealAfterYear);

      //...........................................Only specific number of meals	

    } else if (!isNaN(request.query.limit) && request.query.limit) {

      const limitNumber = parseInt(request.query.limit);
      const NumberOfMeals = meals.slice(0, limitNumber);
      response.send(NumberOfMeals);

    } else if (isNaN(request.query.limit)) {
      
      response.status(400);
      response.send("Please put a number to show the limit value ");

    } else {
      response.send("Please select a query between maxPrice, title, createdAt and limit");
    };

  } catch (error) {
    throw error;
  }
});

module.exports = router;
