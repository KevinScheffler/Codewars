// Vowel Count
// function getCount(str) {
//   var vowelsCount = 0;
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "a") {
//       vowelsCount++;
//     } else if (arr[i] === "e") {
//       vowelsCount++;
//     } else if (arr[i] === "i") {
//       vowelsCount++;
//     } else if (arr[i] === "o") {
//       vowelsCount++;
//     } else if (arr[i] === "u") {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

// console.log(getCount("abracadabra"));

/*
Vowel count refactored with regex
*/
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("abracadabra"));
