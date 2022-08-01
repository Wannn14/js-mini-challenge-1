function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  let word1Arr = word1.split("");
  let word2Arr = word2.split("");
  let word1ArrSorted = word1Arr.sort();
  let word2ArrSorted = word2Arr.sort();
  if (word1ArrSorted.join("") === word2ArrSorted.join("")) {
    console.log("True");
  } else {
    console.log("false");
  }
}

// Test Case
console.log(isAnagram("karet", "raket")); // True
console.log(isAnagram("Balok", "Lobak")); // True
console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")); // True
console.log(isAnagram("cicak", "tengkorak")); // False
