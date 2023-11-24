/*
function example() {
    console.log('Line One')
    console.log('Line Two')
    console.log('Line Three')
    example();                  // throws the code into infinite execution
}

example();
*/

// How to avoid infinite execution?

let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter == 0) return;
    example();
}

