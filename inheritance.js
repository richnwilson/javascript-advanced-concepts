class Character {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `${this.name} attacks with ${this.weapon}`
    }
}

class Elf extends Character {
    constructor(name, weapon,type) {
        // When need to extend items in object, need to use 'super' to pull construct from Character class
        super(name,weapon);
        // Then add new properties
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon,color) {
        // When need to extend items in object, need to use 'super' to pull construct from Character class
        super(name,weapon);
        // Then add new properties
        this.color = color
    }
    makeFort() {
        return `strongest fort in the world made by ${this.name}`;
    }
}

const Rich = new Elf('Rich','Missile','Home');
console.log(Rich);

const Corin = new Ogre('Corin','Club','White');
console.log(Corin)
console.log(Corin.makeFort())