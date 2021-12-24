const repeatString = function(para1, para2) {
  const word = para1;
  const num =  para2;
  let string = "";

  if (num < 0){
    return "ERROR";
  } else {
      for (var i = 1; i <= num; i++){
             string += word;
      }

    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;