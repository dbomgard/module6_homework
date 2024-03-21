let x = +prompt ('Введите число');

function checkNum (num) {
  if (num > 1000) {
    return ('Число должно быть меньше 1000');
  }
  if (num === 0 || num === 1) {
    return ('Ни простое, ни составное');
  }

  for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return `${num} - составное число`;
      }
      else {
        return `${num} - простое число`;
      }
  }  
}

console.log (checkNum (x));