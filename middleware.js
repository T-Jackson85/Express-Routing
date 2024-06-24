function checkString(req, res, next) {
    const err = new Error("Not Found",404);
   
    
  let numbersArr = req.query['nums'].split(',');
  for (num in numbersArr) {
    console.log(numbersArr[num])
    if(isNaN(numbersArr[num])){
      err.status="404"
      err.message="Parameters must be numeric"
      next(err)
    }
    
  }
  
     next();
}

module.exports = {checkString};