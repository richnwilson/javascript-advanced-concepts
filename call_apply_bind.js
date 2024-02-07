// call(), apply() - basic use with 'this' reference
let a = () => {
    console.log("Hi");
}

a.call() // same as a()
a.apply() // same as above

// More advanced use where can call other objects to apply to your object
// In this case we want to 'borrow' heal method from wizrd for archer
// *** Only works as we use the 'this' object to keep it relative ***

const wizrd = {
    name: "Merlin",
    health: 25,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health:30
}

wizrd.heal(25,50);
console.log('Used heal() method in wizrd to reset health to 100', wizrd);

console.log('Current archer health',archer)
// Now let's borrow the heal from wizrd to fully restore health of archer - call(obj, parameter,)
wizrd.heal.call(archer,30,40);
console.log('Current archer health - using call',archer)

// Now let's borrow the heal from wizrd to fully restore health of archer - apply(obj, [parameter,])
wizrd.heal.apply(archer,[30,40]);
console.log('Current archer health - using apply',archer)

// bind() is similiar to call() but it just binds to a variable for future use 
const healArcher = wizrd.heal.bind(archer, 10,10);
console.log('bind created but not executed', archer);
healArcher();
console.log('bind executed', archer);

// Another use of apply, because we are taking an array as input

const array = [1,2,3];
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

// This is a more modern solution to above
function getMaxNumberWithSpread(arr) {
    return Math.max(...arr);
}
console.log(getMaxNumber(array));
console.log(getMaxNumberWithSpread(array));

// Using bind with currying
// 1. Setup an initial function to multiple two numbers
let multipleByTwo = (a,b) => {
    return a*b
}
// 2. create a new function, that will be used later (bind) that passes in 'nothing' as object (it's irrelevant for what we need) - we'll use this or null and 
//    sets 2nd parameter to multiple number 4
let multipleByFour = multipleByTwo.bind(null,4);

// 3. Now let's call the binded function and pass in 2nd paramter 
console.log(multipleByFour(4));

