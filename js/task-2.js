class Storage{
    #items;
    constructor(inputArray){
    this.#items = inputArray;
    }
    getItems(){
        return this.#items;
    }
    addItem(newItem){
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove){
        let index = this.#items.indexOf(itemToRemove);
        return this.#items.splice(index,1); 
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
