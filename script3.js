// In the console, if I go:...

a()

// ...the engine cannot know (cannot catch an error) at the compiler phase,
// ...it has to be runtime.
// ...here the error is: Uncaught ReferenceError: a is not defined(…)

// This will not be caught either:

var a;
a()

// ...here the error is: Uncaught TypeError: a is not a function(…)
// ...fails as a type error, cause a() doesn't have a function value in it