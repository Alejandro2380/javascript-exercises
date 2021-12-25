const leapYears = function(sum1, sum2) {

  let year = sum1;

  if (year % 4 === 0){
    if(year % 100 != 0 || year % 400 === 0){
      return true;
    } else {
         return false;
       }
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = leapYears;
