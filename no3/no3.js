function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  const word1Arr = word1
    .toLowerCase()
    .split("")
    .filter((val) => val !== " ")
    .sort()
    .join("");
  const word2Arr = word2
    .toLowerCase()
    .split("")
    .filter((val) => val !== " ")
    .sort()
    .join("");
  let result = word1Arr === word2Arr;
  return result;
}

// Test Case
console.log(isAnagram("karet", "raket")); // True
console.log(isAnagram("Balok", "Lobak")); // True
console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")); // True
console.log(isAnagram("cicak", "tengkorak")); // False
