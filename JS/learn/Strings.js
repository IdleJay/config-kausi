/* Arrays are iterable

var veggies = ['Onion', 'Parsley', 'Carrot'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//Strings are iterable, too!

var greeting = 'Howdy';

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

*/

//Strings !== arrays

var greet = 'Hello ';
var user = 'Lisa';

// console.log( greet.pop() ); // wont work

console.log( greet + user ); // Hello Lisa

console.log( greet.concat(user) ); // Hello Lisa