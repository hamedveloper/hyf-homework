const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {

    let { firstParam, secondParam } = request.query;
    
    try {
      const resault = parseInt(firstParam) / parseInt(secondParam)
        console.log(resault);
        response.json(resault);
    } catch (error) {
    throw error;
  }
});



module.exports = router;
