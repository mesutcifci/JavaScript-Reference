/*
try {
    lalala; // error, variable is not defined!
} catch (err) {
    console.log("name = " + err.name); // ReferenceError
    console.log("message = " + err.message); // lalala is not defined
    console.log("stack = " + err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
}
*/

/*
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch(e) {
  console.log( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}

*/

/*

let json = '{ "age": 30 }'; // incomplete data
try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla(); // unexpected error

    console.log(user.name);

} catch (e) {

    if (e instanceof SyntaxError) {
        console.log("JSON Error: " + e.message);
    } else {
        throw e; // rethrow (*)
    }

}
*/

/*
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: age");
    }
    if (!user.name) {
        throw new ValidationError("No field: name");
    }

    return user;
}

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}
*/

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        // Original error: SyntaxError: Unexpected token b in JSON at position 1
        console.log("Original error: " + e.cause);
    } else {
        throw e;
    }
}