class StringBuilder{
    #value;
    constructor(initialValue){
        this.#value = initialValue;
    }
    getValue(){
        return this.#value;
    } 
    padStart(str){
         this.#value= this.#value.padStart(2,str); 
         return this.#value;
    }
    padEnd(str){
          this.#value=this.#value.padEnd(3,str);
          return this.#value;    
    }
    padBoth(str){
        this.#value=this.#value.padStart(4,str).padEnd(5,str);
       return this.#value;
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
