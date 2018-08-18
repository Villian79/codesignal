function sortByHeight(a) {
  let result = [];
  let newArr = a.filter(e => e !== -1);
  newArr.sort((a, b) => a - b);
  a.forEach(e => {
      (e !== -1) ? result.push(newArr.shift()) : result.push(-1);
  });
  return result;
  
}
console.log('Test 1: ' + sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log('Test 2: ' + sortByHeight([-1, -1, -1, -1, -1]));
console.log('Test 3: ' + sortByHeight([4, 2, 9, 11, 2, 16]));
console.log('Test 4: ' + sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]));
console.log('Test 5: ' + sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));