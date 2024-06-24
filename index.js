const express = require('express');

const app = express();

const {validateNumbersArr, calculateMean, calculateMode, calculateMedian} = require('./formulas');

const Error = require('./Error');

const {checkString} = require('./middleware');

app.use(checkString)

app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
    throw new Error('Entry must be a query key of nums that is comma-seperated!', 400)
  } 
  
  
  let numbersArr = req.query.nums.split(',');
  let nums = validateNumbersArr(numbersArr);

  let result = {
    operation: "mean",
    result: calculateMean(nums)
  }

  return res.send(result);
});

app.get('/median', function (req, res, next) {  
    if (!req.query.nums) {
    throw new Error('Entry must be a query key of nums that is comma-seperated!', 400)
  } 
 
  let numbersArr = req.query.nums.split(',');
  let nums = validateNumbersArr(numbersArr);

  let result = {
    operation: "median",
    result: calculateMedian(nums)
  }

  return res.send(result);



});

app.get('/mode', function (req, res, next) {  
    if (!req.query.nums) {
    throw new Error('Entry must be a query key of nums that is comma-seperated!', 400)
  } 
 
  let numbersArr = req.query.nums.split(',');
  let nums = validateNumbersArr(numbersArr);

  let result = {
    operation: "mode",
    result: calculateMode(nums)
  }

  return res.send(result);



});
console.log(checkString)

app.use(function (req, res, next) {
    const err = new Error("Not Found",404);

  
    
    return next(err);
  });
  
  /** error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });


app.listen(3000, function () {
    console.log("App running on port 3000");
});

