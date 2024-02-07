// Object Orientated Programming (OOP) example 
// 1. Create multi elfs where name and weapon change, but attack method is the same. Don't want to replicate attack method multiple times


// This is a ****constructor function**** - we declare a variable and dynamically build using the 'new' keyword - see below
// This is old solution - see ***class object in ES6*** below
function Elf(name, weapon) {
    this.name = name,
    this.weapon = weapon
}

Elf.prototype.attack = function() {
    return `${this.name} attacks with ${this.weapon}`
}

const peter = new Elf('Peter','fire')
console.log(peter);
console.log(peter.attack());


// Remember that functions inside functions that reference 'this' attach to the window object i.e.
Elf.prototype.build_wrong = function() {
    function building() {
         return `${this.name} is building`;
    }
    return building()
}
console.log(peter.build_wrong())
// ^^^ returns undefined as ${this.name} attaches to window object. To resolve, we can store this from top level function to a variable and use that i.e.

Elf.prototype.build_right = function() {
    const self = this;
    function building() {
         return `${self.name} is building`;
}
    return building()
}
console.log(peter.build_right())

// *** Class objects in ES6 ***
class Elf2 {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `${this.name} attacks with ${this.weapon}`
    }
}

// Rich is an instance of Elf2
const Rich = new Elf2('Rich','Missile');
console.log(Rich);
console.log(Rich.attack());


// SOLUTION - At the end of the day need to decide between using class above OR Object.create (as in prototypes.js examples);