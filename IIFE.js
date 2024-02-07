// ES6 
// Immediately invoked function expressions
// The outer brackets means it's a function expression - doesn't start with () 
// The open and close bracket at end invoke that function expression
// So we limit the declarations in that function expression to that scope only and immediately invoke it
((obj)=>{
    console.log(obj.a);
})({a: 5});
// ^ we are invoking function expression with object parameter, stored as 'obj' in function and then shown in console


(()=> {
    var a = 1
    var b = a+1;
    console.log(b)
})();

var b = a+1;
console.log(b)

// ^ a is undefined in global scope as it's declared only in it's function expression scope