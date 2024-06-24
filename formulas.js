function validateNumbersArr(numbersArr) {
    let result = [];
  
    for (let i = 0; i < numbersArr.length; i++) {
      let valToNumber = Number(numbersArr[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numbersArr[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

function calculateMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce((acc, c) => acc + c, 0) / nums.length;
}

function calculateMode(nums){

    let object = {};
    for (let i = 0; i < nums.length; i++) {
        if (object[nums[i]]) {
            object[nums[i]] += 1;
        } else {
            object[nums[i]] = 1;
        }
    }
    let biggestValue = -1;
    let biggestValuesKey = -1;
    Object.keys(object).forEach(key => {
        let value = object[key];
        if (value > biggestValue) {
            biggestValue = value;
            biggestValuesKey = key;
        }
    });
    return biggestValuesKey;
}


function calculateMedian(arr){
     // Sort the array
     arr.sort((a, b) => a - b);

     const length = arr.length;
     const middle = Math.floor(length / 2);
 
     // Check if the array length is even or odd
     if (length % 2 === 0) {
         // If even, return the average of middle two elements
         return (arr[middle - 1] + arr[middle]) / 2;
     } else {
         // If odd, return the middle element
         return arr[middle];
     }

}
module.exports = {
    validateNumbersArr,
    calculateMean,
    calculateMode,
    calculateMedian
  };
