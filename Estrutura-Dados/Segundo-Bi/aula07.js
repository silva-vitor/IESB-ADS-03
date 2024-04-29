function LinkedList() {

    let length = 0 // tera o tamanho da lista
    let head = null // primeiro elemento (cabeça)
let Node = function(element) {
    this.element = element
    // o utimo da lista sempre sera null
    this.next = undefined;
}

this.append = function(element) {
    //esse metodo insere um elemento no final da lista

// criar um novo Node passando element
const node =new Node(element);
let current = null;
if(head === null){
    head= node;
}else{
    current = head;
    while(current.next){
        //obtem o utimo item
        current= current.next;
    }
    // a atribui o novo elemento 
    // a  next para criar a ligação 
    current.next = node;
}
length++;
};

this.insert = function(position, element) {
    //esse metodo insere um elemento em uma posicao especifica
};
this.getElementAt = function(position) {
    //esse metodo retorna o elemento em uma posicao especifica
    //Se o  elemento não estiver na lista retorna undefined
};
this.remove = function(element) {
    //esse metodo remove um elemento da lista   
};
this.removeAt = function(position) {
    //esse metodo remove um elemento de uma posicao especifica
};
this.indexOf = function(element) {
    //esse metodo retorna a posicao de um elemento na lista
};
this.isEmpty = function() {
    //esse metodo verifica se a lista está vazia
};
this.size = function() {
    //esse metodo retorna o tamanho da lista
};
this.toString = function() {
    //esse metodo retorna uma string com os elementos da lista 
} 
}                