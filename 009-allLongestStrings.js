/*Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */

function allLongestStrings(inputArray){
    let maxLength = Math.max(...inputArray.map(e => e.length));
    let result = inputArray.filter(el => el.length === maxLength);
    return result;
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));