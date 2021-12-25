const removeFromArray = function(arr, del1, del2) {

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === del){
      arr.splice(i ,0);
    }
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === del2){
      arr.splice(i ,0);
    }
  }


};

// Do not edit below this line
module.exports = removeFromArray;
