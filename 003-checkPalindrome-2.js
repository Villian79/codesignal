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
    const reversedInputString = inputString.split('').reverse().join("");
    return (inputString === reversedInputString);
}
console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('m'));