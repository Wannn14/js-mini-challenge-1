function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  const hos1 = word1.toLowerCase().split("");
  const hos2 = word2.toLowerCase().split("");
  let result = hos1 == hos2;
  return result;
}

// Test Case
console.log(isAnagram("karet", "raket")); // True
console.log(isAnagram("Balok", "Lobak")); // True
console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")); // True
console.log(isAnagram("cicak", "tengkorak")); // False
