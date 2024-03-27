//PILHAS

class Starkc{
    constructor(){
        this.items = [];
    }
    push(element){
        //adiciona um novo item à pilha
        this.items.push(element);
    }
    pop(){
        //remove o último item da pilha
        return this.pop();
    }
    peek(){
        //Devolve o elemento que està no topo da pilha 
        return this.items[this.items.length - 1];
     }
     isEmpty(){
        //verifica se a pilha está vazia
        return this.items.length === 0;
     }
     clear(){
        //limpa a pilha
        this.items = [];
     }
     size(){
        //informa o tanho da pilha
        return this.items.length;
     }
     print(){
        //imprime os itens da pilha no console
        console.log(this.items.toString)
     }
}

console.log("stack")
// criando (instancia) um obijeto stark (pilha)
const stack = new Starkc();
//  verifica se a pilha starkc está vazia
console.log(stack.isEmpty());

console.log("push")
//adicionar elementos
stack.push(5);
stack.push(8);

//exibindo elementos do topo da pilha
console.log(stack.peek());

//adisionando um novo elemento
stack.push(11);

console.log("size")
// tamanho da pilha
console.log(stack.size());

console.log("isEmpty")
//verifica se a pilha está vazia
console.log(stack.isEmpty());

//adisionando um novo elemento
stack.push(15);

console.log("print")
//mostra todos os elementos da pilha
stack.print();

