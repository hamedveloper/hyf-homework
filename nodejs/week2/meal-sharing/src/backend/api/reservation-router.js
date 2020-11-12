const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json")

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const realId = parseInt(request.params.id) - 1;
      response.send(reservations[realId]);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      response.send(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;