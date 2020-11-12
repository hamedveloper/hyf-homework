const express = require("express");
const app = express();
const calculateRouter = express.Router();
const mutiplyRouter = express.Router();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

calculateRouter.get("/add", function (request, response) {

    const sum = parseInt(request.query.first) + parseInt(request.query.second);
    response.send(`The summation of ${request.query.first} and ${request.query.second} is ${sum}.`);
});

mutiplyRouter.get("/:first/:second", function (req, res) {

    const multiple = parseInt(req.params.first) * parseInt(req.params.second);
    res.send(`The mutiple of ${req.params.first} and ${req.params.second} is ${multiple}.`);
})

app.use("/numbers", calculateRouter);
app.use("/numbers/multiply", mutiplyRouter)


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));