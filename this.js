console.log(this)
// ^ this in this case is the global scope


// Example below of using this in 'obj' scope
// 1. Gives methods access to their objects
const obj ={
    name: "Rich",
    sing() {
        return `lalala ... ${this.name}`
    },
    singAgain() {
        return `${this.sing()}!`
    }
}
console.log(obj.singAgain());


// 2. Execute same  code for multiple objects
// let importantPerson = () => {
//     console.log(this.name);
// }

const name = 'Sunny';

function importantPerson() {
    console.log(this.name);
}

const obj1 = {
    name: 'Cassy',
    importantPerson
}

const obj2 = {
    name: 'Jacob',
    importantPerson
}

importantPerson();
obj1.importantPerson();
obj2.importantPerson();

