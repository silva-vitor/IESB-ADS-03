console.log("temperatura")
let averageTemp = [];
averageTemp[0] = [36.5, 28, 30, 25, 18, 40 ];
averageTemp[1] = [19, 22.5, 29, 31, 23, 31, 23.5, 32,5];
// para mostra a última temperatura
console.log(averageTemp[1] [5]);

console.log("myMatrix")
let averageTempDay1 =[36.5, 28, 30, 25, 18, 40 ];
let averageTempDay2 = [19, 22.5, 29, 31, 23, 31, 23.5, 32,5];

let averageTem =[]
averageTem[0] = averageTempDay1;
averageTem[1] = averageTempDay2;
function printMatrix(mymatrix){
    for (let i =0; i < mymatrix.length; i++){
        for(let j = 0; j < mymatrix[i].length; j++){
            console.log(mymatrix[i][j])
        }
    }
}
 printMatrix(averageTem);

 console.log("TABELA")

 let averageTempDay3 =[36.5, 28, 30, 25, 18, 40 ];
 let averageTempDay4 = [19, 22.5, 29, 31, 23, 31, 23.5, 32,5];
 
 let averageTem1=[]
 averageTem1[0] = averageTempDay3;
 averageTem1[1] = averageTempDay4;
 function printMatrix(mymatrix){
     for (let i =0; i < mymatrix.length; i++){
         for(let j = 0; j < mymatrix[i].length; j++){
             console.log(mymatrix[i][j])
         }
     }
 }
 console.table(averageTem1);

 console.log("mutlidimensional")
 
 const matrix3x3x3 = [];
 for (let i = 0; i < 3; i++){
 matrix3x3x3[i]= [];//precisamos inicializar cada array
 for (let j = 0; j < 3; j++){
    matrix3x3x3[i][j] = [];
    for ( let z = 0; z < 3; z++){
        matrix3x3x3[i][j][z] = i +j + z;
    }
    }
 }
 console.table(matrix3x3x3);

 console.log("concatenação")
 const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numeros = negativeNumbers.concat(zero, positiveNumbers);
console.log(numeros.join(", "));


 console.log("every")
 function isEven(x){
    //devolve true e x for multiplo de 2.
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

  console.log("map")

  function isEven(x){
    //devolve true e x for multiplo de 2.
    //console.log(x);
    return(x % 2 == 0) ? true : false;
  }
  let numbersC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  const myMap = numbersC.map(isEven);
  console.log(myMap);

console.log("filter")  

 let numbersD= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

 function isEven(x){
    //devolve true e x for multiplo de 2.
    //console.log(x);
    return(x % 2 == 0) ? true : false;
  }
  const everNumbers = numbersD.filter(isEven);
  console.log(everNumbers);

  console.log("acumulador")

  let numbersE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  //A saida sera igual a 120 que  representa o somatorio de todos os elementos do array numbersE

  console.log (numbersE.reduce((previous, current) => previous + current));

  console.log("for..of")

  let numbersF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  for (const n of numbersF){
    console.log(n % 2 === 0 ? n + " e par" : n + " e impar");
  }

  console.log("@iterator")

  let numbersG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  
  let iterator = numbersG[Symbol.iterator]();

  console.log(iterator.next().value);//1
  console.log(iterator.next().value);//2
  console.log(iterator.next().value);//3
  console.log(iterator.next().value);//4
  console.log(iterator.next().value);//5

  console.log ("todos os elementos do array")

  let numbersH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

  let iterator2 = numbersH[Symbol.iterator]();
  
  for(const n of iterator2){
    console.log(n);
  }

  console.log("aEntries")

  let numbersI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

  let aEntries = numbersI.entries();
  console.log(aEntries.next().value);//[0, 1]
  console.log(aEntries.next().value);//[1, 2]
  console.log(aEntries.next().value);//[2, 3]
  console.log(aEntries.next().value);//[3, 4]
  console.log(aEntries.next().value);//[4, 5]
  console.log(aEntries.next().value);//[5, 6]
  console.log(aEntries.next().value);//[6, 7]
  console.log(aEntries.next().value);//[7, 8]

  console.log("todos os aEntries")

  let numbersJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  let aEntries1 = numbersJ.entries();

  for(const n of aEntries1){
    console.log(n);
  }

  console.log("aKeys")

  let numbersK = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  const aKeys = numbersK.keys();

  console.log(aKeys.next());//0
  console.log(aKeys.next());//1
  console.log(aKeys.next());//2
  console.log(aKeys.next());//3
  console.log(aKeys.next());//4
  console.log(aKeys.next());//5
  console.log(aKeys.next());//6
  console.log(aKeys.next());//7
  console.log(aKeys.next());//8
  console.log(aKeys.next());//9

  console.log("valores (values)")

  let numbersL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
  const aValues = numbersL.values();
  console.log(aValues.next());//1
  console.log(aValues.next());//2
  console.log(aValues.next());//3
  console.log(aValues.next());//4
  console.log(aValues.next());//5
  console.log(aValues.next());//6
  console.log(aValues.next());//7
  console.log(aValues.next());//8
  console.log(aValues.next());//9
  console.log(aValues.next());//10
  console.log(aValues.next());//11
  console.log(aValues.next());//12
  console.log(aValues.next());//13
  console.log(aValues.next());//14
  console.log(aValues.next());//15
  console.log(aValues.next());//undefined

  console.log ("reverse")

  let numbersM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

  numbersM.reverse();

console.log('Array numeros reverso:'+ numbersM.join(', '));

console.log("(sort)")
numbersM.sort();

console.log('Array sort:'+ numbersM.join(', '));

function compara(a,b){
    if (a < b) {
    return -1;
}
    if (a > b){
     return 1;
    }
  
    return 0;  
}
  
  numbersM.sort(compara);
  console.log('Array numerosexecutados a função sort:'+ numbersM.join(', '));
