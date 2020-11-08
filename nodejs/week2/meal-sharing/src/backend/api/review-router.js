const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

//...............Respond with the json for reviews with the corresponding id

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const realId = parseInt(request.params.id) - 1;
      response.send(reviews[realId]);
    
  } catch (error) {
    throw error;
    };
});

//.............................Respond with the json for all the meals

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      response.send(reviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;