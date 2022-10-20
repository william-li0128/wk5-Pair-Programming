// Alric @alricf and William @william-li0128 pair programming Oct 20, 2022

// function to check matrix
const join = function(arr, chars) {
    const joinMatrix = arr.map(ls => ls.join(''));
    for (const l of joinMatrix) {
      if(l.includes(chars)) {
        return true;
      }
  }
  }
  
  // create function to produce the vertical join array
  const verticalMatrix = function(matrix) {
      let transposedMatrix = [];
      
      for (const i in matrix[0]) {
        let rowList = [];
        for (const j in matrix) {
          rowList.push(matrix[j][i]);
        }
        transposedMatrix.push(rowList);
      }
  
      return transposedMatrix;
     
  };
  
  // function to check both horizontally and vertically and return the value
  const wordSearch = (letters, word) => { 
      if(letters === []) {
          return false;
      }

      if(join(letters, word)) {
          return true;
      }; //check horizontally

      if(join(verticalMatrix(letters), word)) {
          return true;
      }; // check vertically
      
      return false;
  }
  
  module.exports = wordSearch