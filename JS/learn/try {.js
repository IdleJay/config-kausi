/* try {
    console.log(a + b);
} catch(err) {
    //console.log(err);
    console.log('there was an error')
    console.log('The error was saved in the error log')
}
console.log("My program does not stop")
*/

/* try {
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log('There was a Reference Error')
}
console.log("My program does not stop")
*/


/* Let us now take a look at an example

var userName = 'Jay';

function greetUser(name){
    console.log('Welcome ' + name)
}

greetUser(username); //not a camel case
*/

/* Example2
function logoutConfirmation() {
    console.log('Are you sure you want to log out?')
}

logoutConfirmation();
*/

/* Example 3
var greeting = 'Welcome, ';
// greeting.push('Jay24');   //greeting is just a string at this time, push is an array method
greeting += 'Jay';
console.log(greeting);
*/

/*
var averageUserAge = 46.8328947324832653;
//console.log(averageUserAge.toFixed(101)); //toFixed says how many digits appear after decimals
console.log(averageUserAge.toFixed(2));
*/

/*
    Task:
        1. Add a try block.
        2. Inside the try block, check if 'payment' is a number. 
           If it's not a number, throw a reference error stating 
           'payment is not a number'. 
           If it is a number, perform the calculation and log out 
           the result.
        3. Add a catch block to log out the error.
*/

/*
function addTouristSurcharge(payment){

    try {
        if (typeof(payment) != 'number') {
            throw new ReferenceError('Payment is not a number')
        }
        else {
            console.log(payment + 10)
        }
    } catch(err) {
        console.log('Error: ' + err)
    }
    
} 
    addTouristSurcharge(60)
*/