// Arrays
const numbers=[1,2,3,[4,5,6]];
console.log(numbers.length);

 console.log('temperatura media')
const averageTemp = []
 averageTemp[0] = 31.9;
 averageTemp[1] = 32.9;
 averageTemp[2] = 33.9;
 averageTemp[3] = 34.9;
 averageTemp[4] = 35.9;


 console.log('Conteudo do array:', averageTemp);
 console.log('Media de temperatura de março:', averageTemp[2]);
console.log('media de temperatura de janeiro:', averageTemp[0]);


console.log('dias da semana')
let daysOfWeek = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
for(let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

console.log('Sequencia fibonacci');
const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for(let i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci.join(' '));

for(let i = 0; i < fibonacci.length; i++){
console.log(fibonacci[i]);}


console.log('obleto mutável');
//acrecimo de numeros
let numbers2= [1,2,3,4,5,6,7,8,9];
//se quisersermos acrescimo acrecscentar mais um elemento ao array
numbers2[numbers2.length] = 10;
console.log(numbers2);
//acrescentar mais um elemento ao array
numbers2.push(11);
numbers2.push(12 ,13); 
console. log(numbers2.join(', '));

//acrecimo de numeros
let numbers3= [1,2,3,4,5,6,7,8,9];
//se quisersermos acrescimo acrecscentar mais um elemento ao array
numbers2[numbers3.length] = 10;
console.log(numbers2);
//acrescentar mais um elemento ao array
numbers3.push(11);
numbers3.push(12 ,13); 
//devemos deixa a primeira posição livre
function insertFirstPosition(value){
    for(let i = numbers3.length; i > 0; i--){
        numbers3[i] = numbers3[i - 1];
    }
    
    numbers3[0] = value;
}
//chama a funcão
insertFirstPosition(-1);
console. log(numbers3.join(', '));


console.log('Unishift');
let numbers4= [0,1,2,3,4,5,6,7,8,9];
//inserindo no inicio com o método unshift
numbers4.unshift(-1);
numbers4.unshift(-2);
numbers4.unshift(-3);
numbers4.unshift(-4);
console. log(numbers4.join(', '));

console.log('pop');
let numbers5= [0,1,2,3,4,5,6,7,8,9];
//inserindo no inicio com o método unshift
numbers5.unshift(-1);
numbers5.unshift(-2);
numbers5.unshift(-3);
numbers5.unshift(-4);
// removendo o elemento do final da array
numbers5.pop();
//para apresentar o elemento no console
console. log(numbers5.join(', '));

console.log('remover do innicio ');
let numbers6= [0,1,2,3,4,5,6,7,8,9];
//para remover do inicio da array
for (let i = 0; i < numbers6.length; i++){
    numbers6[i] = numbers6[i + 1];
}
//para apresentar o elemento no console
console. log(numbers6.join(', '));

console.log(removeFirstPosition);

let numbers7 =[-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13];

Array.prototype.reIndex = function(myArray) {
    for(let i = 0; i< myArray.length; i++){
        if (myArrarray[i]!==undefined){
            myArray[i] = myArray[i + 1];
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
    Array.prototype.removeFirstPosition = function(){
        for(let i = 0; i < this.length; i++){
            this[i] = this[i + 1];
        }
      return this.reIndex(this);

    }
    numbers7= numbers7.removeFirstPosition();
    console. log(numbers7.join(', '));
