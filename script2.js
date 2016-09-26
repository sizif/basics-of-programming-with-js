// THE DIFFERENCE BTW INTERPRETED AND COMPILED

// Compilation means there's more than 1 pass through your program
// If I have this code:

a = 2;
2();

// In JS, line 2 is an error. It's invalid.
// This is a proof that JS in not an interpreted lg.
// In an interpreted lg, a = 2 would be run, and then the engine would hit line #2
// and disover that there's a problem, and throw an error

// But in a compiled lg, the 1st pass is not concerned with executing the program, 
// but rather with UNDERSTANDING the program.
// It makes a pass through this program and it figures out if this program is valid.

// Does it match all the rules? It would be like scanning through a novel to make
// sure all the sentences have periods on them; and then going back and reading the
// book to understand its contents.

// So the compiled lang would flag line no 2 and it would say there's a problem on
// this line BEFORE even running line 1.

// So, JS, in that respect, is more of a compiled lg, than an interpreted lg.

// In short, JS gets compiled for error checking.