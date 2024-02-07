// Examples of this

// 1. new binding
function Person(name,age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Rich",53)
console.log(person1)

// 2. implicit binding
const person2 = {
    name: 'Rich',
    age: 53,
    hi() {
        console.log(`Hi ${this.name}`)
    }
}
person2.hi()

//3. explicit binding (client side example)
// const person3 = {
//     name: 'Rich',
//     age: 53,
//     hi: function () {
//         console.log(`Hi ${this.setTimeout}`)
//     }.bind(window)
// }
// person3.hi()

// 4. arrow functions, allow for lexical scoping
const person4 = {
    name: 'Rich',
    age: 53,
    hi() {
        let inner = () => {
            console.log(`Hi ${this.name}`)
        }
        return inner()
    }
}
person4.hi()