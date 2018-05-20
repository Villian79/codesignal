//Given a sequence of integers as an array, determine whether it is possible to obtain 
//a strictly increasing sequence by removing no more than one element from the array.

//Example
//
//   For sequence = [1, 3, 2, 1], the output should be
//   almostIncreasingSequence(sequence) = false;
//
//   There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//
//   For sequence = [1, 3, 2], the output should be
//   almostIncreasingSequence(sequence) = true.
//
//   You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
//
//nput/Output
//
//   [execution time limit] 4 seconds (js)
//
//   [input] array.integer sequence

//    Guaranteed constraints:
//    2 ≤ sequence.length ≤ 105,
//    -105 ≤ sequence[i] ≤ 105.
//
//    [output] boolean
//
//    Return true if it is possible to remove one element from the array in order 
//    to get a strictly increasing sequence, otherwise return false.

let almostIncreasingSequence = (sequence) => {
  let count = 0;
  let index = [];
  let count1 = 0;
  let count2 = 0;
  for(let i = 1; i < sequence.length; i++){
      if(sequence[i] <= sequence[i-1]){
          count ++;
          index.push(i);
      }
  }
  if(count > 1) return false;
  else{
      if(count = 1){
          let newArray1 = [...sequence];
          newArray1.splice(index[0] - 1, 1);
          for(let y = 1; y < newArray1.length; y++){
              if(newArray1[y] <= newArray1[y-1]){
                  count1++;
              } 
          }
          let newArray2 = [...sequence];
          newArray2.splice(index[0], 1);
          for(let z = 1; z < newArray2.length; z++){
              if(newArray2[z] <= newArray2[z-1]){
                  count2++;
              } 
          }
          if(count1 === 1 && count2 === 1) return false;
      }
      return true;
  }
}

console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
