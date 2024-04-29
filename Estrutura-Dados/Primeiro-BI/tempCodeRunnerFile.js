
    console.log(x);
    return(x % 2 == 0) ? true : false;
 }
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

 numbers.every(isEven);

 console.log("some")
 function isEven(x){
    //devolve true e x for multiplo de 2.
    console.log(x);
    return(x % 2 == 0) ? true : false;
 }
 let numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

 numbersA.some(isEven);
  console.log("forEach")
  let numbersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  numbersB.forEach(x => console.log(x % 2 === 0));