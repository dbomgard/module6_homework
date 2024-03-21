function sumFunc (num1) {
  function secondFunc (num2) {
    return num1 + num2;
  }
  
  return secondFunc;
}

console.log(sumFunc (4) (3));