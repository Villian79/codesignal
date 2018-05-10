// Given the string, check if it is a palindrome.
//---------------------------------------------------
// Example

//     For inputString = "aabaa", the output should be
//     checkPalindrome(inputString) = true;
//     For inputString = "abac", the output should be
//     checkPalindrome(inputString) = false;
//     For inputString = "a", the output should be
//     checkPalindrome(inputString) = true.
// ---------------------------------------------------

function checkPalindrome(inputString) {
  var arr = inputString.split('');
  var palindromeString = [];
  for(var i = arr.length - 1; i >= 0; i--){
      palindromeString.push(arr[i]);
  }
  var str = palindromeString.join('');
  if(inputString === str){
      return true;
  }
  return false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('m'));