function fibonacci(num) {
  
  if(num === 0) return 0;
  if(num === 1) return 1;

  // Otherwise, if n>=2:
  let nMinus2 = 0;
  let nMinus1 = 1;
  let sum = -1;

  while (num >= 2) {
    sum = nMinus2+nMinus1
    nMinus2 = nMinus1
    nMinus1 = sum
    num--
  }

  return sum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
