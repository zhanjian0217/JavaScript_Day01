for (let a = 1; a <= 9; a += 1) {
  for (let b = 1; b <= 9; b += 1) {
    console.log(`${a} x ${b} = ${a*b}`);
  }
}




for (let c = 1; c <= 5; c += 1) {
  console.log("*".repeat(c));
}



for (let n = 1; n <= 10; n += 1) {
  console.log(" ".repeat(10 - n) + "*".repeat(n * 2 - 1));
}