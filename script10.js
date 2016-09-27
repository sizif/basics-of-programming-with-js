// LOOPS
/*

if (a) { .. }

while (a) { .. } // wrongly understood as "when the thing becomes false, stop doing it", 
                 // or as: "while the thing is true, keep doing it"

for (a=5;) // initialisation expression
for (...; a < 10; ...) // conditional expression
for (...; ...; a = a + 1) // the update clause {
    // it's gonna start a at the value of 5,
    // and it will increment the value of a by 1,
    // as long as a is less than 10
}

We were waiting for something to tell us to stop the loop. And a told us this when it got too big,
because 10 < 10 is wrong.

you could have done: for (;;) {} // this loop that will run forever, BECAUSE THE CONDITION WOULD NEVER FAIL

The loop above would run forever, but not because it's condition will always be true, BUT BECAUSE THE CONDITION WOULD NEVER FAIL.

This loop would run forever:
for (a = 5; a < 10; a = a + 1) {
    a = 6;
    console.log(a);
}
Why? 
It would 
set a to 5, 
check if a is less then 10, 
go into the block, 
set a to 6, 
increment a by 1 (to 7), 
console log the value of a, 
go back to the top,
check if a is less then 10,
go into the block,
set a to 6,
increment it to 7,
log out the value of a, 
go back to the top...

A loop's natural state is to run forever until something tells it to stop.

This will run forever:
while (true) {
    
}

To make it not run forever:
a = 5;
while (true) {
    if (a >= 10) {
        break;
    }
    console.log(a);
    a = a + 1;
}
The above is, conceptually, how a for loop works.

There are lots of ways to stop a loop from running, but regardless of how
you do it, it's the same thing as the test failing.


*/