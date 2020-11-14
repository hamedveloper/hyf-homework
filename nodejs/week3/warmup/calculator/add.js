const { request } = require("express");
const express = require("express");
const router = express.Router();


router.get("/", async (request, response) => {
  const firstParam = request.query.firstParam;
      const secondParam = request.query.secondParam;
  try {
    if (typeof firstParam === 'string') {
      const arraySecond = secondParam.map(param => parseInt(param));
      const first = parseInt(firstParam);
      const sumSecondArray = arraySecond.reduce((x, n) => x + n);
      const summation = sumSecondArray + first;
      response.json("summation of the first and second params is " + summation);
    } else if (typeof secondParam === 'string') {
const arrayFirst = firstParam.map(param => parseInt(param));
      const second = parseInt(secondParam);
      const sumfirstArray = arrayFirst.reduce((x, n) => x + n);
      const summation = sumfirstArray + second;
      response.json("summation of the first and second params is " + summation);
      
    } else if (firstParam.length >= 2 && secondParam.length >= 2) {
      console.log(request.query)
      console.log(firstParam);
      console.log(firstParam.concat(secondParam));
      const arrayFirst = firstParam.map(param => parseInt(param));
      const arraySecond = secondParam.map(param => parseInt(param));
      const concatedArray = arrayFirst.concat(arraySecond);
      const summationArray = concatedArray.reduce((params, summation) => params + summation);
      console.log(concatedArray);
      response.json("summation of the first and second params is " + summationArray);
    } 
        
    } catch (error) {
    throw error;
  }
});

module.exports = router;
