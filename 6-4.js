let x = +prompt ('Введите первое число');
let y = +prompt ('Введите второе число');

if (y <= x) {
  console.log ('Первое число должно быть меньше второго');
}

function nums(a, b) {
   let start = a;

   let intervalId = setInterval (function () {
      console.log(start);
      if (start == b) {
         clearInterval(intervalId);
      }
      start++;
   }, 1000);
}

nums (x, y);