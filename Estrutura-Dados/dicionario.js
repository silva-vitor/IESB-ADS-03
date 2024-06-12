
class KeyValue {
   constructor(key, value) {
       this.key = key;
       this.value = value;
   }
   toString() {
       return `[${this.key}]: ${this.value}`;
   }
}

class MyDictionary {
   constructor() {
       this.data = {};
   }

   defaultToString(key) {
       if (key === null) {
           return 'NULL';
       } else if (key === undefined) {
           return 'UNDEFINED';
       } else if (typeof key === 'string' || key instanceof String) {
           return `${key}`;
       }
       return key.toString();
   }

   hasKey(key) {
       return this.data[this.defaultToString(key)] != null;
   }

   set(key, value) {
       if (key != null && value != null) {
           const dataKey = this.defaultToString(key);
           this.data[dataKey] = new KeyValue(key, value);
           return true;
       }
       return false;
   }

   remove(key) {
       if (this.hasKey(key)) {
           delete this.data[this.defaultToString(key)];
           return true;
       }
       return false;
   }

   get(key) {
       const keyValue = this.data[this.defaultToString(key)];
       return keyValue == null ? undefined : keyValue.value;
   }

   getSecondOption(key) {
       if (this.hasKey(key)) {
           return this.data[this.defaultToString(key)];
       }
       return undefined;
   }

   keys() {
       return this.keyValues().map(keyValue => keyValue.key);
   }

   keyValues() {
       return Object.values(this.data);
   }

   keyValuesSecondOption() {
       const keyValuesList = [];
       for (const k in this.data) {
           if (this.hasKey(k)) {
               keyValuesList.push(this.data[k]);
           }
       }
       return keyValuesList;
   }

   values() {
       return this.keyValues().map(keyValue => keyValue.value);
   }

   forEach(callbackFn) {
       const keyValuesList = this.keyValues();
       for (let i = 0; i < keyValuesList.length; i++) {
           const result = callbackFn(keyValuesList[i].key, keyValuesList[i].value);
           if (result === false) {
               break;
           }
       }
   }

   size() {
       return Object.keys(this.data).length;
   }

   isEmpty() {
       return this.size() === 0;
   }

   clear() {
       this.data = {};
   }

   toString() {
       if (this.isEmpty()) {
           return '';
       }
       const keyValuesList = this.keyValues();
       let objString = `${keyValuesList[0].toString()}`;
       for (let i = 1; i < keyValuesList.length; i++) {
           objString = `${objString}, ${keyValuesList[i].toString()}`;
       }
       return objString;
   }
}

const myDict = new MyDictionary();

myDict.set('Alice', 'alice@mail.com');
myDict.set('Bob', 'bob@mail.com');
myDict.set('Charlie', 'charlie@mail.com');

console.log(myDict.hasKey('Alice'));
console.log(myDict.size());

myDict.remove('Bob');
console.log(myDict.keys());
console.log(myDict.values());
console.log(myDict.keyValues());

myDict.forEach((k, v) => {
   console.log('forEach: ', `key: ${k}, value: ${v}`);
});



