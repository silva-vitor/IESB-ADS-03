/*09. Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
acordo com as regras a seguir:
a. Se o número for par, empilhe na pilha;
b. Se o número for ímpar, desempilhe um número da pilha. Caso a pilha esteja vazia,
mostre uma mensagem;
c. Se ao final do programa a pilha não estiver vazia, desempilhe todos os elementos,
imprimindo-os na tela. */

// tentei o método de herança, acabei me perdendo no caminho, peço um reforço nesta parte, ficou confuso.

/*class deClasse{
    constructor(){
        this.items = []
    }
    push(element){
        //Adiciona um elemento
        this.items.push(element)
    }
    pop(){
        //Retira um elemento do topo da pilha
        return this.items.pop()

    }
    peek(){
        //devolve o elemento que está no topo da pilha
        return this.items[this.items.lenght - 1]


    }
    isEmpty(){
        //Informa se as pilhas estão de vazias ou não
        return this.items.length === 0
    }
    clear(){
        //Limpa a pilha
        this.items = []

    }
    size(){
        //informa o tamnho da pilha
        return this.items.length
    }
    print(){
        //imprime a pilha no console
        console.log(this.items.toString())

    }
}
*/
let pilha = []

function dire(numeros) {
    if (numeros % 2 == 0) {
        pilha.push(numeros)
        console.log(pilha)
    } 
    if (numeros % 2 !== 0) {
        pilha.pop();
        console.log(pilha)
    }
    if(pilha.length !== 0){
        pilha = []
        console.log(pilha)
    }
    else{
        console.log(`valor inválido`)
    }
}

dire(12);