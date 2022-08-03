function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini
  for (num = 1; num <= score; num++)
    if (num % 3 == 0 && num % 5 == 0) {
      console.log("PizzaMozarella");
    } else if (num % 3 === 0) {
      console.log("Pizza");
    } else if (num % 5 === 0) {
      console.log("Mozarella");
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
