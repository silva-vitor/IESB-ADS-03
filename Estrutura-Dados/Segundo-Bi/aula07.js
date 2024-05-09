function LinkedList() {
    // Classe auxiliar que representará o elemento da cabeça (head)
    let Node = function (element) {
        this.element = element;
        // O ultimo elemento da lista sempre será null
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element) {
        // Esse método insere um novo elemento no final da lista
        // Cria um novo Node passando element
        const node = new Node(element);
        let current = null;
        if (head === null) {
            head = node;
        }
        else {
            current = head;
            while (current.next) {
                // Obtém o último item
                current = current.next;
            }
            // e atribui o novo elemento
            // a next para criar a ligação
            current.next = node;
        }
        // incrementando o tamanho da lista
        length++;
    };

    this.insert = function (position, element) {
        // Esse método insere um novo elemento em uma posição especifica
        if(position >= 0 && position <= length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
        // Adiciona na primeira posição
        if(position === 0) {
            node.next = current;
            head = node;
        }
        else {
            previous = this.getElementAt(position - 1);
            current = position.next;
            node.next = current;
            previous.next = node;
        }
        length ++; // Atualiza o tamanho da lista
        return true;
        }
        else {
            return false;
        }
    };

    this.getElementAt = function (position) {
        // Esse método devolve o elemento que está em uma posição especifica
        // Se o elemento não estiver na lista, undefinned será devolvido.
        if (position >= 0 && position <= this.size()) {
            let node = head;
            for (let i = 0; i < position && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };

    this.remove = function (element) {
        // Esse método renmove um elemento da lista.
        let index = this.indexOf(element);
        this.removeAt(index);

    };
    this.removeAt = function (position) {
        // Esse método remove um item de uma
        // posição especifca da lista.

        // Verifica valores fora do intervalo
        if (position > -1 && position < length) {
            let current = head,
            previous;
            // Remove o primeiro item
            if (position === 0) {
                head = current.next;
            }
            else {
                for (var i = 0; i < position; i++) {
                    previous = current // Guardando o elemento anterior
                    // elemento que queremos remover é o proximmo da lista
                    current = current.next;
                }
                // Faz a ligação de previous com next de current:
                // pula esse elemento para removê-lo
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else {
            return null;

            }
        };



    this.indexOf = function (element) {
        // Esse método devolve o indice do elemento.
        // Se o elemento não estiver devolve -1.
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        // Esse método verifica (true or false)
        // se a lista está vazia.
        return length === 0;

    };

    this.size = function () {
        // Esse método devolve o número de
        // elementos da lista ligada.
        return length;

    };

    this.getHead = function () {
        // Esse método devolve o elemento que
        // está no inicio (head) da lista ligada.
        return head;

    };

    this.toString = function () {
        // Esse método devolve uma representação
        // em string da lista ligada.
        let current = head;
        let string = '';
        // Percorrendo os elementos da lista e concatenando em uma string
        while(current) {
            string += current.element + (current.next ? ' ->':' ');
            current = current.next;
        }
        // Devolvendo a string com todos os elementos da lista
        // concatenados com uma setinha
        return string;

    };
    // Chamando o método conversor toString para mostrar no console
    this.print = function() {
        console.log(this.toString());
    }
}

let listaEncadeada = new LinkedList();
console.log(listaEncadeada.toString());
listaEncadeada.append('João');
console.log('Inserimos Jõao na lista, veja: ' +listaEncadeada.toString());
listaEncadeada.append('José');
listaEncadeada.append('Maria');
listaEncadeada.append('Pedro');
listaEncadeada.append('Antônio');
console.log('Veja agora os elementos da lista: ' + listaEncadeada.toString());
listaEncadeada.insert(4, 'Lucas');
console.log('Inserimos Lucas na posição 4, veja:' + listaEncadeada.toString());
listaEncadeada.append('Davi');
listaEncadeada.insert(0, 'vitor');
console.log('Inserindo Marcos no inicio da lista, veja: ' + listaEncadeada.toString());
listaEncadeada.removeAt(2);
console.log('Removendo o elemento (José) da posição 2: ' + listaEncadeada.toString());
listaEncadeada.remove('Antônio');
console.log('Removemos Antônio e a lista agora é: ' + listaEncadeada.toString());
listaEncadeada.remove('Pedro');
console.log('Removemos Pedro e a lista agora é: ' + listaEncadeada.toString());
listaEncadeada.remove('João');
console.log('Removemos João e a lista agora é: ' + listaEncadeada.toString());
listaEncadeada.remove('Maria');
console.log('Removemos Maria e a lista agora é: ' + listaEncadeada.toString());
console.log('Removemos Maria e a lista agora está vazia? ' + listaEncadeada.isEmpty());
console.log('Tamanho da lista agora é: ' + listaEncadeada.size());
console.log('O primeiro da lista agora é: ' + listaEncadeada.getHead().element);
console.log('O endereço de Davi: ' + listaEncadeada.indexOf('Davi'));
console.log('O elemento da lista que está na posição 1 é: ' + listaEncadeada.getElementAt(1).element);
               