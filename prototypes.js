// ---- THIS IS JUST CONCEPTUAL TO UNDERSTAND PROCESS - DON'T USE !!!!
// IMPORTANT: Only functions have prototype properties
// Arrays and objects get access to the properties and methods of it's parent - the object. 
// The object itself, then get's access it's properties and methods, so
const a = [];
console.log(a.__proto__); // This get's access to the arrays object parent - remember arrays and functions are just objects
console.log(a.__proto__.__proto__); // This gets access to the objects parents - it's properties and methods
// For objects we just need to tranverse up the tree once i.e.
const b = {};
console.log(b.__proto__);
// Since there is a concept of inheritance, this means that arrays and functions have access to an objects properties and methods i.e.

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {               // This is new way to create a function in an array. Standard way shown below
        return 5;
    },
    sing: function () {
        if (this.fire) {
            console.log(`I am ${this.name}, the breather of fire`);
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

 lizard.__proto__ = dragon;
// ^^ Using proto above we link the object properties of the lizard array (now at object level) to dragon array
//    This links only those values, not already set in lizard, to those of dragon
 lizard.sing();

 // IMPORTANT: How to use prototypes properly
 let human = {
     mortal: true
 }
 let socrates = Object.create(human)
 // ^^ this means socrates will inherit the array of human using prototypes
 console.log(socrates.mortal);

 // Using prototype inheritance we can extend or alter built-in javascript objects i.e.
 Date.prototype.lastYear = function() {
    return this.getFullYear()-1;
}
// ^^^ Can't use arrow function
console.log(new Date().lastYear());

// We can also re-write an entire method of an array i.e. map
Array.prototype.map = function() {
    let arr = [];
    for (let i=0; i < this.length; i++) {
        arr.push(`<${this[i]}>`)
    }
    return arr;
}
console.log([1,2,3].map());