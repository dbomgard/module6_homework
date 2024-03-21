const multiply = (x, n) => {
  
    if (x > 0 && n > 0 && x % 1 == 0 && n % 1 == 0) {
        let num = x;
        for (i = 1; n > i; i++) {
        num *= num;
        } 
        console.log(num);
    }
    
    else {
      console.log ('Число не натуральное');
    }
}
  
multiply (4, 3);