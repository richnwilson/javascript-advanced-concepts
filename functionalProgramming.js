// Amazon shopping use case

// My attempted solution
const user = {
    name: 'Rich',
    active: true,
    cart: [],
    purchases: [],
    addItem(item) {
        this.cart.push(item);
    },
    purchaseItems() {
        if (this.cart.length === 0) return;
        let total=0.00;
        for (let item in this.cart) {
            total += parseInt(this.cart[item].price);
        }
        total = total * 1.03;
        console.log(`${this.name} you have made ${this.cart.length} purchases that total $${total}.`)
        this.purchases = [...this.cart];
        this.cart = [];
    },
    emptyCart() {
        this.cart = []
    }
}

// Need to implement
// 1. Add items to cart with name and price properties
// 2. Add 3% tax to item in cart
// 3. Buy item: cart -> purchases
// 4. Empty cart
user.addItem({name: "phone", price: "300.50"});
user.addItem({name: "golf clubs", price: "400.50"});
user.purchaseItems();
user.emptyCart();
console.log(user);


// Bonus:
// accept refunds
// Track user history


// Code with no 'side effects' i.e. reference an array in function but don't change original global one. Change is only in local function scope
const arr = [1,2,3];
let removeLastItem = (arr) => {
    let newArray = [...arr];
    newArray.pop();
    return newArray;
}
console.log(removeLastItem(arr));
console.log('Original array:',arr);

// Object is to minimize side effects - find it easy to find issues - for that we need to create 'efficient' functions that:
// 1. Does 1 task
// 2. Predicatable
// 3. Composable
// 4. Immutable Stable
// 5. return statement
// 6. Pure
// 7. No shared state

// Imperative v. Declarative
// Imperative - we tell Javascript engine exactly what to do i.e.
for (let i=0;i<5;i++) {
    console.log(i);
}
// Declarative - Javascript engine interprets and figures out what to do - not told explicitly i.e.
[0,1,2,3,4].forEach((i)=> console.log(i));

// 4. Immutability - not changing the data/state
const obj = {name: 'Rich'};
let updateName = (obj,newName) => {
    const newObj = {...obj};
    newObj.name = newName
    return newObj;
}
obj.name = 'Corin';
// ^^^ This is mutating or changing state of values

console.log(updateName(obj,'Simon'));
// ^^^ This is making change but only affecting local scope

// Currying 
const notCurry = (a,b) => {console.log(a*b)}
const Curry = (a) => (b) => {console.log(a*b)}
notCurry(5,2)
Curry(5)(2)
// but with currying we can create intermediate functions to re-use i.e.
const multipleBy5 = Curry(5);
multipleBy5(2)

// Partial Application - similar to currying but we just  create one function, then partial bind and then fully complete rest i.e.
// *** ONLY WORKS CLIENT SIDE
// const multiply = (a,b,c) => a*b*c;
// const multipleBy4 = multiply.bind(null,4);
// multipleBy4(4)(2)

// Caching and memorization - the ability to not run a function again if we have already evaluated specific values
// NOTE: We will use closures to ensure we store everything in local scope
memoizedAddto80 = () => {
    let cache = {};
    return function(n) {
        if (!cache[n]) {
            console.log(n, ': Needed to create')
            cache[n] = n + 80
        }
        return console.log(n, `: ${cache[n]}`);
    }
}
let memoized = memoizedAddto80();
memoized(5);
memoized(5);

// Compose and Pipe
// | Composing - create chunks of functionality stores in a task, evaluate, in required order, with data and then return value
// const compose = (task1, task2) => (data) => task1(task2(data));
// const task1 = multipleBy3 = (num) => num * 3;
// const task2 = getPositive = (num) => Math.abs(num);

// const Task2FirstThenTask1Next = compose(task1, task2);
// console.log(Task2FirstThenTask1Next(50));
// | Pipe - is just a function that goes in the other order i.e. Task 1 first and then Task 2 i.e.
// const pipe = (task1, task2) => (data) => task2(task1(data));

// **** After learning all this new stuff, let's create a more efficient Amazon solution *****
// Need to implement
// 1. Add items to cart with name and price properties
// 2. Add 3% tax to item in cart
// 3. Buy item: cart -> purchases
// 4. Empty cart

const user2 = {
    name: 'Rich',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));

purchaseItem(
    showSummary,
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop',price: 200})

function purchaseItem (...fns)  {
    return fns.reduce(compose)
}

function addItemToCart (user,item) {
    const updateCart = user.cart.concat(item);
    return Object.assign({},user, { cart: updateCart})
}

function applyTaxToItems (user)  {
    const {cart} = user;
    const taxRate = 1.03;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({},user, { cart: updatedCart})
}

function buyItem (user) {
    return Object.assign({},user, { purchases: user.cart})
}
function emptyCart (user) {  
    return Object.assign({},user, { cart: []})
}

function showSummary(user) {
    console.log(user);
}