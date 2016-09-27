// FUNCTIONS
/*
They run on demand, not like a loop (forever), and not like a 
block (once).

A primary benefit of a fn is being able to take a block of statements and
collect it together into a repeatable, sort of named label.

Put all your declarations at the top.

foo(100); when we call a fn here, were padssing in whats called an argument.
But when we declare a fn, the variables we pass in are called parameters:
function foo(bar, baz, xyz) {...}
Its a param when you pass it in, it's an argument when you declare it.

Passing a fn to a fn: If you call it, then what it returns is what gets passed in
as the argument: foo( bar() );

There's a difference between passing a function and passing the result of a fn call.

Fns: They can pass in values, they can return values.

In ES6 I can give a default value to a parameter.


*/