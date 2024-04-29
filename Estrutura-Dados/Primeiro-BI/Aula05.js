class Stack {
   constructor() {
       this.items = [];
   }

   // Adiciona um elemento ao topo da pilha
   push(element) {
       this.items.push(element);
   }

   // Remove o elemento do topo da pilha e o retorna
   pop() {
       if (this.isEmpty()) {
           return "Underflow";
       }
       return this.items.pop();
   }

   // Retorna o elemento do topo da pilha sem removê-lo
   peek() {
       return this.items[this.items.length - 1];
   }

   // Verifica se a pilha está vazia
   isEmpty() {
       return this.items.length === 0;
   }

   // Retorna o tamanho da pilha
   size() {
       return this.items.length;
   }
   print(){
      console.log(this.items.toString())
      }
   
}

// Criando uma instância da pilha
const stack = new Stack();

// Verificando se a pilha está vazia
console.log(stack.isEmpty());

// Adicionando elementos no topo da pilha
stack.push(5);
stack.push(8);
console.log(stack.peek());

// Adicionando outro elemento
stack.push(11);

// Exibindo o tamanho da pilha
console.log(stack.size());


// verificaa se a pilha ta vazia
console.log(stack.isEmpty())

//acrecimo de outro numero 
stack.push(15)
 
//mostra o tamnho da pilha
stack.print()