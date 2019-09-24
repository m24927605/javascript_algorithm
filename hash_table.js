const sha256 = require('sha256');

class Dictionary{
  constructor(){
    this.items={}
  }
  genHash(key){
    const hash= sha256(key);
    return hash;
  }
  has(key){
    return this.items.hasOwnProperty(key);
  }
  set(key,value){
    const itemKey=this.genHash(key);
    this.items[itemKey]=value;
  }
  get(key){
    return this.items.hasOwnProperty(key) ? this.items[key]:undefined;
  }
  values(){
    return Object.values(this.items);
  }
  keys(){
    return Object.keys(this.items);
  }
  getItems(){
    return this.items;
  }
  clear(){
    this.items={};
  }
  size(){
    return Object.keys(this.items).length;
  }
  remove(key){
    if(this.items.hasOwnProperty(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }
}

const dictionary=new Dictionary();
dictionary.set('price',100);
console.log(dictionary.has('price')); 
console.log(dictionary.keys()); 
console.log(dictionary.values());
console.log(dictionary.getItems()); 
console.log(dictionary.get('price')); 
dictionary.remove('price');
console.log(dictionary.keys());
dictionary.set('quantity',5);
console.log(dictionary.getItems()); 
dictionary.clear();
console.log(dictionary.getItems()); 
