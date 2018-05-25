/*After they became famous, the CodeBots all decided to move to a new building and live together. 
The building is represented by a rectangular matrix of rooms. 
Each cell in the matrix contains an integer that represents the price of the room. 
Some rooms are free (their cost is 0), but that's probably because they are haunted, 
so all the bots are afraid of them. That is why any room that is free or is located anywhere 
below a free room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.*/

let matrixElementsSum = (matrix) => {
  let result = 0;
   for(let x = 1; x < matrix.length; x++){
      for(let i = 0; i < matrix[x].length; i++){
        if(matrix[x - 1][i] === 0){
          matrix[x][i] = 0;
        }
      }
    }
  matrix.forEach(e => result += e.reduce((acc, currValue) => acc + currValue));
  return result;
}

matrix = [[1, 2, 1, 0], 
          [0, 5, 1, 1], 
          [2, 1, 3, 10]];
console.log(matrixElementsSum(matrix));