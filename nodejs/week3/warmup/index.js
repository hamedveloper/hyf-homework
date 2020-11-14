const express = require("express");
const app = express();
const router = express.Router();
const addRouter = require("./calculator/add");
const multiplyRouter = require("./calculator/multiply");
const subtractRouter = require("./calculator/subtract.js");
const dividRouter = require("./calculator/divid");



var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/calculator/add", function(req, res) {
    var firstParam = req.body.firstParam;
    var secondParam = req.body.secondParam;
    //Send the response back
    let resualt = parseInt(firstParam) + parseInt(secondParam);
   res.json(resualt);
});


app.get("/", (req, res) => {
    res.send("nodejs week3 homework");
});

router.use("/add", addRouter);
router.use("/multiply", multiplyRouter);
router.use("/subtract", subtractRouter);
router.use("/divid", dividRouter);




app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

