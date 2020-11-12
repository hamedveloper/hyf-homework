const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json")

router.get("/:id", async (request, response) => {
  
  const realId = parseInt(request.params.id);

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    correspondAnswer = reservations.filter(reservation => reservation.id === realId);
    response.send(correspondAnswer);

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