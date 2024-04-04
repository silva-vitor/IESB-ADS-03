//criando nossa propria classe para representar uma fila
class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}


const fila = new Queue();
console.log(fila.isEmpty());
// adicinar duas pessoas na fila
fila.enqueue('jhon');
fila.enqueue('jack');
console.log('a fila posui innicialmente as pessoas: ' + fila.toString())

//outra pessoas
fila.enqueue('Camila');
console.log('a fila posui possui pessoas: ' + fila.toString());
console.log('o tamanho da fila e : ' + fila.size());
console.log('remover o primeiro da fila ' + fila.dequeue ())
console.log('a fila agora possui os elementos: ' + fila.toString())
console.log('A pessoa da frente agora e '+ fila.peek())
console.log('Remover o proximo da fila: ' + fila.dequeue())
console.log('A fila agroa possui apenas: '+ fila.toString())
console.log('A pessoa da frente agora e : ' + fila.peek())





    
