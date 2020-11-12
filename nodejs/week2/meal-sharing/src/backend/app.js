const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reservationRouter=require("./api/reservation-router")
const reviewRouter = require("./api/review-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path

app.use("/meals", mealsRouter);
app.use("/reservations", reservationRouter);
app.use("/reviews", reviewRouter);


module.exports = app;
