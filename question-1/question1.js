/*
* Create a script with a function named lowerCaseWords that takes a mixed array as input.
* The function will do the following.
*   o return a promise that is resolved or rejected
*   o filter the non-strings and lower case the remaining words
*/

const mixedArray = ['PIZZA', 10, true, 25, false, "Wings"];

function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    const stringArray = array.filter((element) => typeof element === "string");

    if (stringArray.length > 0) {
      const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
      resolve(lowercasedWords);
    } else {
      reject("No strings found in the array.");
    }
  });
}

lowerCaseWords(mixedArray)
  .then((lowercasedWords) => {
    console.log(lowercasedWords);
  })
  .catch((error) => {
    console.error(error);
  });