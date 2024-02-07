// Pass by reference - 'shallow' clone (no nested arrays)
let a = {
    user: "me",
    password: "123"
};

// Dangerous as it means b is just another 'memory' reference for a - changes to both will affect other
let b = a;
b.password = "123456";


console.log(b,'b');
console.log(a,'a');

// Remember arrays are objects, so affects them as well i.e.
let c = [1,2];
let d = c
d.push(3);
console.log(c,'c');
console.log(d,'d');

// For arrays, to literally 'copy' to another value need to do something like:
let e = [].concat(c); 
e.push(4)
console.log(c,'c');
console.log(e,'e');

// For objects, to copy do something like:
let f = {... b}; // same as Object.assign({},b)
f.password = '123456789';
console.log(b,'b');
console.log(f,'f');

// Pass by reference - 'deep' cloning (with nested arrays)
let g = {
    'a': 1,
    'b': 2,
    'c': {
        'd': 3,
        'e': 4
    }
}
// If we try to copy as per shallow clone i.e.
let h = {... g};
h.c.d = 5;
console.log(g,'g');
console.log(h,'h');

// It fails as it's a deep cloning - to make a true copy need to use some JSON object functionality i.e.
let i = JSON.parse(JSON.stringify(g));
i.c.d = 6;
console.log(g,'g');
console.log(i,'i');

// ^^^^ So, best to use JSON.parse(JSON.stringify(obj)) for any scenario when need a true copy ONLY IF cloning object is small in size and dimension, otherwise performance hit ^^^^