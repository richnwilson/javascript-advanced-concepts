let loop = () => {
    for (let i=0; i < 5; i++) {
        console.log(i);
    }
    // ^ when using 'let' for declaring i it's only valid in that for block scope and not the function scope below
    console.log('final',i);
}

loop()