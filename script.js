// The source code that you write is not really for the computer

// It is possible to write many sets of code files, that will end up being the same
// 1s and 0s

// Therefore, the code is not for the computer, it's for the developer, or for your
// future self

// STATEMENTS

// A group of words, numbers, and operators that perform a specific task is
// called a statement.

// most statements end with a semicolon

// EXPRESSIONS

// Statements are comprised of "phrases", and these phrases are called expressions

// Statement...

a = b + 2;

// ...is made of several expressions:

// 2            - a literal value
// b            - an identifier expression
// b * 2        - an arithmetic expression (a multiplication expression)
// a = b * 2    - an assignment expression (and a statement)
// a = b * 2    - it's a statement cuz theres nothing else outside of it
// so a = b * 2 is sometimes called an expression statement


// EXPRESSIONS ARE REALLY INSEPARABLE UNITS!
// Using parenthesis to show where the expressions are:
// (   a = ( (b) * (2) )   );

// And another example:
// a = b * 2 + foo(c * 3);
// 1st level expressions:
// [a] = [b] * [2] + [foo]([c] * [3]);
// Grouping expressions: 
// a = b * 2 + foo([c * 3]); // c * 3 is a multiplication expression
// a = b * 2 + [foo(c * 3)]; // foo(c * 3) is a call expression
// a = [b * 2] + foo(c * 3); // b * 2 is a multiplication expression
// a = [b * 2 + foo(c * 3)]; // b * 2 + foo(c * 3) is an addition expression
                             // with ( b*2 ) and ( foo(c*3) ) being
                             // operands of the + operator
// [ a = b * 2 + foo(c * 3) ]; // an assignment expression (aka expression statement?)

// SIDENOTES:
// http://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression
// Wherever JavaScript expects a statement, 
// you can also write an expression. 
// Such a statement is called an expression statement. 
// The reverse does not hold: you cannot write a statement 
// where JavaScript expects an expression. For example, 
// an if statement cannot become the argument of a function.
// IMPORTANT:
// An expression is any valid unit of code that resolves to a value.


/*
It is possible for the same (textually) block of code to be 
considered both an expression and a statement depending on 
the context. E.g. function f(){} is an expression on line 1 
and a statement in line 2 in the below code:

let g = function f() {};
function f() {};
So whether something is an expression or a statement cannot
(in the general case) be pronounced by looking at a textual
piece of code out of context; rather it is a property of a 
node in a syntax tree and can be pronounced only after the 
code is (mentally or actually) parsed.
*/
