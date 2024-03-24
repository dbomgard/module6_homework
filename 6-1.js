let array = [3, 0, 5, 10, "string"];

function countNums (arr) {
  let odd = 0;
  let even = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" &&  !isNaN (arr[i])) {
      if (arr[i] == 0) {
          zero ++;
      }
      
      if (arr[i] % 2 === 0 && arr[i] != 0) {
          odd++;
      }
      else{
          even++;
      }
    }
  }
           
  console.log('Четных:' + odd);
  console.log('Нечетных:' + even);
  console.log ('Нулей:' + zero);
}

countNums (array);