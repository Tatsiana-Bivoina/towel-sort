let index = 0;
let array = [];
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let t = true;
  let a = [];
    if(typeof matrix !== 'undefined' && !!matrix.length) {
      for(let i = 0 ;i < matrix.length; i++) {
        if(t) {
          addArr(matrix[i].sort(compareNumeric));
          t = false;
        } else {
          addArr(matrix[i].sort(compareNumeric).reverse());
          t = true;
        }
      }
      index = 0;
      a = array;
      array=[];
      return a;
    } 
    return [];
  }

  function compareNumeric(a, b) {
     if(a > b) return 1;
     if(a == b) return 0;
     if(a < b) return -1;  
  }
  
  function addArr(arrs) {
    for(let i = 0; i < arrs.length; i++) {
      array[index]=arrs[i];
      index ++;
    }
  }
//  let newArray = [];
//  let index = 0;
//  for(let i = 0; i < matrix.length; i++) {
//    for(let j = 0; j < matrix[i].length; j++) {
//      newArray[index] = matrix[i][j];
//      index ++;
//    }
//  }
//   return newArray.sort();

