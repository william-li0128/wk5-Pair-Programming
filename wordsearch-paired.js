// function to check matrix
const join = function(letters, word) {
  const joinMatrix = letters.map(ls => ls.join(''));
  for (const l of joinMatrix) {
    if(l.includes(word)) {
      return true
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

// function to check both horrizontally and vertically and return the value
const wordSearch = (letters, word) => { 
    join(letters, word); //check horrizontally
    join(verticalMatrix(letters), word); // check vertically
    return false;
}

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD')