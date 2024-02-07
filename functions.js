// Remember functions are just 'special' objects with custom properties and methods

// 1 - can assign to variable
let stuff = function(){} // ,or in ES6 'let stuff = () => {}'

// 2 - can pass functions into functions
function a(fn) {
    fn()
}
a(function() {console.log('hi there')});

// 3 - Return functions as values from other function
function b() {
    return function c() {console.log('bye')}

}
b()()

// Things to be careful of with functions
// a - adding functions in loops i.e.
for (let i=0;i<5;i++) {
    function a() {

    }
    a()
}
// ^^^^ instead initialize outside of loop ^^^^

// b - using undeclared variables in functions
// function a() {
//     return param
// }
//a() // will cause error as error not in local or global scope, so will be a reference error

// If ES6, you can now include default values to parameters i.e.
let d = (param=6) => {console.log(param)};
d()

// Higher order functions - function that takes a function as an argument, or returns a function i.e.
// - this example will replicate an authentication delay and pass function as an argument. This is cleaner and more efficient code

const giveAccessTo = (name) => {
    console.log(`Granted Access to ${name}`);
}
const authenticate = (name,verify) => {
    // Replicating a delay to login - **longer for admin**
    let arr = [];
    for (let i=0; i < verify; i++) {
        arr.push(i);
    }
    return giveAccessTo(name);
} 
const letPersonIn = (person, fn) => {
    if (person.level === 'admin') {
        return fn(person.name, 50000000)
    } else {
        return fn(person.name, 10000000)
    }
}
letPersonIn({name: 'Rich',level: 'admin'},authenticate);
letPersonIn({name: 'Chris',level: 'user'},authenticate);

// This Higher order  function can be written nicely with arrow functions
const multiplyBy = (num1) => (num2) => num1*num2;

const multipleByTwo = multiplyBy(2);
console.log(multipleByTwo(6));
console.log(multiplyBy(2)(6));