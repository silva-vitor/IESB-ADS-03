class Dictionary {
    
    constructor() {
        this.dictionary = {};
    }

    // Adiciona um novo elemento ao dicionário
    // Se key já existir, seu valor será sobrescrito
    set(key, value) {
        this.dictionary[key] = value;
    }
    
    // Remove o valor do dicionário usando a chave (key)
    remove(key) {
        delete this.dictionary[key];
    }
    
    // Devolve um valor (value) usando a chave (key)
    get(key) {
        return this.dictionary[key];
    }
    
    // Adiciona uma segunda opção de obtenção de valor (não está claro o que deveria fazer)
    getSecondOption(key) {
        // Implementação não definida, exemplo:
        // return this.dictionary[key] || "Segunda opção não definida";
    }
    
    // Remove todos os valores do dicionário
    clear() {
        this.dictionary = {};
    }
    
    // Devolve um array com todas as chaves do dicionário
    keys() {
        return Object.keys(this.dictionary);
    }
    
    // Devolve um array com todos os valores do dicionário
    values() {
        return Object.values(this.dictionary);
    }
    
    // Devolve um array com todos os pares [chave, valor] do dicionário
    keyValues() {
        return Object.entries(this.dictionary);
    }
    
    // Itera pelos valores (value) do dicionário
    forEach(callbackFn) {
        for (let [key, value] of Object.entries(this.dictionary)) {
            callbackFn(value, key);
        }
    }
    
    // Quantos valores estão armazenados no dicionário
    size() {
        return Object.keys(this.dictionary).length;
    }
    
    // Verifica se o dicionário está vazio
    isEmpty() {
        return this.size() === 0;
    }
    
    // Para mostrar o conteúdo do dicionário como texto
    toString() {
        return JSON.stringify(this.dictionary, null, 2);
    }

    // Método padrão para converter chave em string, se necessário
    defaultToString(key) {
        
    }
    
    // Verifica se a chave existe no dicionário
    hasKey(key) {
        return this.dictionary.hasOwnProperty(key);
    }
}