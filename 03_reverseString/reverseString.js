const reverseString = function(str) {

let initialWord = str.split('');
let finalWord = "";

for(var i = initialWord.length - 1; i >= 0; i--){
  finalWord += initialWord[i];
}

return finalWord;

};

// Do not edit below this line
module.exports = reverseString;
