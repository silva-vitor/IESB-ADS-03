    //Condicionais if

 var num1 =3;

if(num1 === 3 ) {
    console.log('O número é igual a 3');

}
   
//Condicionais  else

var nem2 = 2;
if (nem2 === 3) {
    console.log('O número é igual a 3');
} else {
    console.log('O número não é igual a 3');
}


  //operadodor ternário
var nem3 = 3;
if (nem3 === 2) { nem3--

}else{nem3++

}

console.log(nem3)
  

 /*
 var nam4 = 4;

(nem4 === 4 ) ? nam4-- : nem4++;


console.log(nem4)  
*/


    // month
    var month = 5;
    if(month === 1){
        console.log('Janeiro');
    }else if(month === 2){
        console.log('Fevereiro');
    }else if(month === 3){
        console.log('Março');
    }else{
        console.log('month não e o  janeiro, fevereiro ou março');
    }
    

                //switch
 var month = 5;
 switch(month){
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:    
        console.log('month não e o  janeiro, fevereiro ou março');    
 }
 
 
            //array
 
    for(var i = 0; i < 10; i++){
        console.log(i)
    }
        
       
          //debug html 
          var saida = 'texto qualquer';
          document.write(saida);

          var saida = 'texto qualquer';
          alert(saida);
        

         //while
         
          var i = 0;
          while(i < 10){
              console.log(i);
              i++;
          }
          
          //Do while
         
          var i = 0;
          do{
              console.log(i);
              i++;
          }while(i < 10);
         
          
                        //function
          
          function sayHello(){
              console.log('hello');
          }sayHello()
          
          
          
          function output(texto){
            console.log(texto);
          }
          //nesse caso ,apenas o primeiro argumento sera
          //usado pela função; o segundo sera ignorasdo 
          output('Boa noite! ','Ola tudo bem !')

          
           
          function output(texto){
            console.log(texto);

          }
          function sum(num1, num2){
              return num1 + num2;

          }

          var result = sum(2,3);
          output(result);

          



