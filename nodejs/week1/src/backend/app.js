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
    
    const mealWithReview = meals
        .map(meal => {
            meal.reviews = reviews.filter(review => review.mealId === meal.id);
            return meal;
        });
    const randomMeal = mealWithReview[Math.floor(Math.random() * 2)];
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

    const reservationWithMeal = reservation
        .map(reservation => {
            reservation.meal = meals.filter(meal=>meal.id===reservation.mealId)
        return reservation;
        });
    const randomReservation=reservationWithMeal[Math.floor(Math.random() * 5)]
        
    response.json(randomReservation);
});

module.exports = app;


