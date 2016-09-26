/*
ASSIGNING TO A VARIABLE THAT'S NEVER BEEN FORMALLY DECLARED 
is a really really bad idea:

a = 42;

FOR A LESS CONFUSING PROGRAM, DO THIS:

var a;
a = 42;

OR EVEN THIS:
var a = 42;

in ES6:

let b = 42;
const c = 42;

There is another way to formally declare an 
identifier and that is to declare a function. 
Here I'm declaring a variable a that has this function value in it:

function d() {}

LET VS VAR:
Let puts it inside of a block, var puts it inside of a function.

This doesn't mean anything except being a stylistic thing:

{
    var a = 42;
    foo(a / 2);
}

But blocks are usually appearing with some other statements, they don't stand
alone like above:
var a = 42;

if (a > 10) { // opening brace at the same place as the statement is called cuddling
    a = 10;
}

or:

var a = 42;

while (a > 10) { // another cuddle
    a = 10;
}

BLOCKS can also appear as part of function statement:
function foo() {
    a = 10;
    bar(a / 2);
}

The above block will only get executed if foo ever gets called:
foo();

THESE ARE ALL FUNCTIONS, BUT NOT ALL ARE FUNCTION DECLARATIONS:
function foo() {}               // This one is a fn declaration
function bar = function() {}    // This one is a fn expression attached to a variable declaration
var bar = function baz() {}     // This one is a fn expression atavd

Declared functions are not executed immediately. 
They are "saved for later use", and will be executed later, 
when they are invoked (called upon).








*/