// alert() comes from the browser, not from js lang
// console.xyz() comes from the js lang

// Undefined in console?

// Console env in the browser is designed to take the very last expression
// in a program, and evaluate it for a value, and then show you that value.

// For example, if I say a = 2; 
// remember that was an assignment expression, 
// the result of an assignment expression is the value that was assigned.
// So the JavaScript engine just does an assignment, but the console 
// does one extra step which is to say, whatever my last statement is, give me
// that value back.
// So typing a = 2; into the console, will return:
// > 2
// And the statements that have no return value, you get undefined.
// For example: var b = 2; ...
// ... a var statement has no return value, and that's why you get undefined.

// UNDEFINED is returned because there are statement 
// expressions that have no return value.

// INPUT
// You'd get input usually from a form, but you can get it on the command line
// using prompt():

var age = prompt("What is your age?");

// returns 'undefined'
// console.log(age)
// returns 35, then undefined
// the thing that comes back from prompt is always a string

