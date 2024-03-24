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

nums (5, 10);