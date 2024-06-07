class HashTable {
    constructor() {
        this.table = {}; // Inicializa a tabela hash como um objeto vazio
    }

    // Método para converter a chave em uma string
    defaultToString(key) {
        if (key === null) {
            return 'null'; // Converte null para string 'null'
        } else if (typeof key === 'undefined') {
            return 'undefined'; // Converte undefined para string 'undefined'
        } else if (typeof key === 'string' || key instanceof String) {
            return `${key}`; // Converte strings para strings (mantém a mesma)
        }
        return key.toString(); // Converte outros tipos de chave para string
    }

    // Método para calcular o hash usando o algoritmo "lose lose"
    loseloseHashCode(key) {
        if (typeof key === 'number') { 
            return key; // Se a chave for um número, usa o próprio número como hash
        }
        const tableKey = this.defaultToString(key); // Converte a chave para string
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i); // Soma os valores ASCII de cada caractere da string
        }
        return hash % 37; // Usa o operador módulo para limitar o valor do hash
    }

    // Método para calcular o hashcode
    hashcode(key) {
        return this.loseloseHashCode(key); // Chama o método loseloseHashCode
    }

    // Método para adicionar um par chave-valor à tabela hash
    put(key, value) {
        if (key != null && value != null) { // Verifica se a chave e o valor não são nulos
            const position = this.hashcode(key); // Calcula a posição na tabela hash
            this.table[position] = new ValuePair(key, value); // Armazena o par chave-valor na posição calculada
            return true; // Retorna true indicando que a inserção foi bem-sucedida
        }
        return false; // Retorna false se a chave ou o valor forem nulos
    }

    // Método para obter um valor da tabela hash usando a chave
    get(key) {
        const position = this.hashcode(key); // Calcula a posição na tabela hash
        const valuePair = this.table[position]; // Obtém o par chave-valor na posição
        return valuePair == null ? undefined : valuePair.value; // Retorna o valor ou undefined se não existir
    }

    // Método para remover um valor da tabela hash usando a chave
    remove(key) {
        const position = this.hashcode(key); // Calcula a posição na tabela hash
        const valuePair = this.table[position]; // Obtém o par chave-valor na posição
        if (valuePair != null) { // Verifica se o par chave-valor existe
            delete this.table[position]; // Remove o par chave-valor da tabela
            return true; // Retorna true indicando que a remoção foi bem-sucedida
        }
        return false; // Retorna false se o par chave-valor não existir
    }
}

// Classe auxiliar para armazenar pares chave-valor
class ValuePair {
    constructor(key, value) {
        this.key = key; // Armazena a chave
        this.value = value; // Armazena o valor
    }

    // Método para converter o par chave-valor para string (para fins de depuração)
    toString() {
        return `[${this.key}]: ${this.value}`;
    }
}

// Instancia da classe HashTable
const hash = new HashTable();

// Adiciona pares chave-valor à tabela hash
hash.put('Gandalf', 'GxwvL@example.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

// Inspeciona os valores da tabela hash imprimindo os hashcodes
console.log(hash.hashcode('Gandalf') + ' - Gandalf');
console.log(hash.hashcode('John') + ' - John');
console.log(hash.hashcode('Tyrion') + ' - Tyrion');

// Testa o método get
console.log(hash.get('Gandalf')); // Retorna 'GxwvL@example.com'
console.log(hash.get('loiana')); // Retorna undefined (não existe)

// Testa o método remove
hash.remove('Gandalf');
console.log(hash.get('Gandalf')); // Retorna undefined (foi removido)
 