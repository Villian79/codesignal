/* Given two strings, find the number of common characters between them.

Example
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".*/

function commonCharacterCount(s1, s2) {
  let obj1 = {}, obj2 = {}, count = 0;
  s1.split('').forEach(e => (e in obj1) ? obj1[e] += 1 : obj1[e] = 1);
  
  s2.split('').forEach(e => (e in obj2) ? obj2[e] += 1 : obj2[e] = 1);

  Object.getOwnPropertyNames(obj1).forEach(e => {
    if(obj2.hasOwnProperty(e)) count += Math.min(obj1[e], obj2[e]);
  });

  return count;
}

s1 = "aabccfakjghidla";
s2 = "adcaabrtyyhfpss";
console.log(commonCharacterCount(s1, s2));