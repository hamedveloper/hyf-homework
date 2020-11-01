const express = require("express");
const { readFile, readFileSync } = require("fs");
const app = express();


// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews.json");
const reservation = require("./data/reservations.json");

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});

//.........................................meals route..................

app.get("/meals", async (request, response) => {
    
        const mealsList = meals.map(meal => {
        meal.reviews = reviews.filter(review => review.mealId === meal.id);
        return meal;
    });
    
    response.json(mealsList);
});     

//..........................................cheap-meals.....................    

app.get("/cheap-meals", async (request, response) => {

    const cheapMealsList = meals
        .filter(meal => meal.price < 70)
        .map(meal => {
        meal.reviews = reviews.filter(review => review.mealId === meal.id);
        return meal;
    });
    
    response.json(cheapMealsList);
});  

//..........................................large-meals...............
        
app.get("/large-meals", async (request, response) => {

    const largeCapacityMealsList = meals
        .filter(meal => meal.maxNumberOfGuests > 15)
        .map(meal => {
        meal.reviews = reviews.filter(review => review.mealId === meal.id);
        return meal;
    });
    
    response.json(largeCapacityMealsList);
});

//..............................................random meal...............

app.get("/meal", async (request, response) =>{
    const randomMeal = meals
        .filter(meal => meal["id"] === Math.floor(Math.random() * 2)+1)
        .map(meal => {
            meal.reviews = reviews.filter(review => review.mealId === meal.id);
            return meal;
        });
    response.json(randomMeal);
});

//..............................................reservations...............

app.get("/reservations", async (request, response) => {

    const reservations = reservation
        .map(reservation => {
            reservation.meal = meals.filter(meal=>meal.id===reservation.mealId)
        return reservation;
    });
    
    response.json(reservations);
});

//..............................................random reservation...............

app.get("/reservation", async (request, response) => {

    const reservations = reservation
        .filter(reservation => {
            reservation.id = meals.filter(meal=>meal.id===reservation.mealId)
        return reservation;
    });
    
    response.json(reservations);
});
module.exports = app;


