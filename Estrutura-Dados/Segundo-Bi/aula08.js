class Set {
    constructor() {
        this.items = {};
    }
    add(element) {
        // adicionar um novo elemento ao conjunto.
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        // remove elemento do conjunto.
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        // devolver true se elemento estiver no conjunto, e false caso contrario
        return element in this.items;
    }
    clear() {
        // remover todos os elementos do conjunto.
        this.items = {};
    }
    size() {
        // devolve quantos elementos estão contidos no conjunto
        return Object.keys(this.items).length;
    }
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }
    values() {
        // devolve um array com todos os valores (elementos) que estão no conjunto.
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) { 
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    otherIntersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        const othrValues = otherSet.values;
        let biggerSet = values;
        let smallerSet = othrValues;
        if(othrValues.length - values.length > 0) {
            biggerSet = othrValues;
            smallerSet= values;
        }
        smallerSet.forEach((value)) =>{
            if (biggerSet)
        }

    }
}

const set = new Set();
set.add(1);
console.log(set.values()); // exibe [1]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 1
set.add(2);
console.log(set.values()); // exibe [1, 2]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 2
console.log(set.delete(1)); // exibe true
console.log(set.values()); // exibe [2]
console.log(set.delete(2)); // exibe true
console.log(set.values()); // exibe []


// uniao

 console.log("uniao");

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values()); // exibe [1, 2, 3]

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
console.log(setB.values()); // exibe [3, 4, 5, 6]

const uniaoAB = setA.union(setB);
console.log(uniaoAB.values()); // exibe [1, 2, 3, 4, 5, 6]

console.log(" interseção")

const intersectionAB = setA.intersection(setB); 
console.log(intersectionAB.values()); // exibe [3]

