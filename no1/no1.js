function scoreChecker(score) {
  // Tulis kodingan dibawah ini
  const test1 = "Selamat !";
  const test2 = "Anda mendapatkan nilai";
  if (score >= 90) {
    result = `${test1} ${test2} A`;
  } else if (score >= 80) {
    result = `${test2} B`;
  } else if (score >= 70) {
    result = `${test2} C`;
  } else if (score >= 60) {
    result = `${test2} D`;
  } else if (score < 60) {
    result = `${test2} E`;
  }
  return result;
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.
