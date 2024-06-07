class ValuePair {
    constructor(key, value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}]: ${this.value}`
    }
}

class Dictionary  {
     constructor() {

        this.table = {}
     }

     defaultToString(key){
        //Precisaremos de uma função para transformar key(chave) em uma string
        if(key ===null){
            return 'NULL'
        }
        else if(key === undefined){
            return 'UNDEFINED'

        }
        else if(typeof key === 'string' || key instanceof String){
            return `${key}`

        }
        return key.toString() // {1}


     }

     hasKey(key){
        //Verifica se há uma chave
        return this.table[this.defaultToString(key)] != null



     }

     set(key, value){
        //Adiciona um novo elemento ao dicionário
        //Se key já existir, seu valor será sobrescrito
        if(key != null && value != null){
            const tableKey = this.defaultToString(key) // {1}
            this.table[tableKey] = new ValuePair(key, value) // {2}
            return true
        }

        return false



     }

     remove(key){
        //Remove o valor do dicionario usando a chave (key)
        if(this.hasKey(key)){
            delete this.table[this.defaultToString(key)]
            return true
        }
       
        return false


     }

     get(key){
        //Devolve um vamor (value) usando a cahve (key)
        const ValuePair = this.table[this.defaultToString(key)] // {1}
        return valuePair == null ? undefined : valuePair.value // {2}

     }

     getSecondOption(key){
        //Remove todos os valores de um dicionário
        if(this.hasKey(key)){
            return this.table[this.defaultToString(key)]
        }
        return undefined

     }

     keys(){
        //Remove um array co todas as chaves do dicionário
        return this.keyValues().map(valuePair => valuePair.key )


     }

     keyValues(){
        return Object.values(this.table)
     }

     keyValuesSecondOption(){
        const valuePairs = []
        for(const k in this.table){
            if(this.hasKey(k)){
                valuePairs.push(this.table[k]) //{2}
            }
        }
        return valuePairs
     }

     values(){
        return this.keyValues().map(valuePair => valuePair.value)
     }

     forEach(callbackFn){
        const valuePairs = this.keyValues() // {1}
        for(let i = 0; i < valuePairs.length; i++){ //{2}
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value) //{3}
            if(result === false){
                break //{4}
            }


        }
     }

     size(){
        return Object.keys(this.table).length
     }

     isEmpty() {
        return this.size() === 0

     }

     clear() {
        this.table = {}
     }

     toString(){
        if(this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValuers()
        let objString = `${valuePairs[0].toString()}` // {1}
        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString}, ${valuePairs[i].toString()}` // {2}


        }
        return objString // {3}
     }

    
}

const dictionary = new Dictionary('')

dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyron', 'tyron@email.com')

console.log(dictionary.hasKey('Gandalf'))
console.log(dictionary.size())

dictionary.remove('John')
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())

dictionary.forEach((k, v)=>{
   console.log('forEach: ', `key: ${k}, value: ${v}`)
})