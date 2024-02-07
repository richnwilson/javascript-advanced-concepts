(() => {
    // throw stops execution of current scope 
    // throw 'string'
    // throw true
    // throw Error('Throw Error construct')
    // throw new Error('Throw instance of an error')

    const myError = new Error('error object')
    console.log(myError.message)
    console.log(myError.name)
    console.log(myError.stack) // <<< Shows errors in order of call stack - tree of global to local
    console.log('--------------------------')
    // Use ***catch*** to handle errors. If no catch, then for nodeJS 'process.on('uncaughtException')' is shown - not useful
    try {
        throw new Error('explicit error')
        console.log('this never appears beccause error above stops execution')
    } catch(e) {
        console.log('e stores error from try i.e.',e.message)
    } finally {
        console.log('Regardless of error or not, we always run this')
    }

    // Extending the Error class to handle customizing errors for given situations i.e. to reveal minimal information
    class PermissionError extends Error {
        constructor(message) {
            super(message)
            this.name = 'Permission Error'
            this.message = message.length > 25 ? message.substring(0, 24) + "..." : message;
        }
    }
    try {
        throw new PermissionError('This is a long message, but I just want to show first 25 characters');
    } catch(e) {
        console.log(`${e.name} - ${e.message}`)
    }
})()