function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini
  const num = 15;
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("PizzaMozarella(15)");
  } else if (num % 3 === 0) {
    console.log("");
  } else if (num % 5 === 0) {
    console.log("");
  } else {
    console.log(num);
  }
}

// Test Case
pizzaMozarella(15);
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13
// 14
// PizzaMozarella
