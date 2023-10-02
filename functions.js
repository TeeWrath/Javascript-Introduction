// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function sum(x,y){
    res = x + y
    return res
}

// Syntax
// Keyword - function, followed by name, parenthesis
// Function names have same rules as variables

// Parenthesis includes - parameters

// Arguments and parameters  
// Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.

// How to invoke a function ?
// The code inside the function will execute when "something" invokes (calls) the function:
//     - When an event occurs (when a user clicks a button)
//     - When it is invoked (called) from JavaScript code
//     - Automatically (self invoked)
result = sum(5,6)
console.log(result)


// "return" keyword


// Arrow Functions
// Arrow functions allow us to write shorter function syntax
sum = ( x , y ) =>  x + y
sub = (x,y) => {
    return x - y;
}
hey = () => "Hey"

// Start writing code here
