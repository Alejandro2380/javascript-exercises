const sumAll = function(sum1, sum2) {

  let total = 0;
  let number = sum1 + sum2;

    if(typeof number === "number" && number > 0) {
        if(sum1 < sum2){
          for(var i = sum1; i <= sum2; i++){
            total += i;
            sum1++;
          }
        } else if (sum2 < sum1){
            for(var i = sum2; i <= sum1; i++){
              total += i;
              sum2++;
            }
          }
    return total;
    } else {
        return "ERROR";
    }


};
// Do not edit below this line
module.exports = sumAll;
