
    
    /*
Task:

    1. Inside the function body, set up two variables called 
       'condition1' and 'condition2'.
    2. 'condition1' needs to hold a boolean which is true if 
       the 'word' parameter is of the data type of string 
       AND has a length of 2 or more.
    3. 'condition2' needs to hold a boolean which is true if 
       the 'letterToMatch' parameter is of the data type of 
       string AND has a length of exactly 1.
    4. Wrap the rest of the logic in the function in an if 
       statement so it only executes if BOTH 'condition1' AND 
       'condition2' are true.
    5. Add an else statement that logs out "Please pass in 
       correct arguments." if condition1 and condition2 don't 
       both return true.
    Expected output when letterFinder is called with 'test' and 't':
    
        Found letter t at index 0
        ---No match found at index 1
        ---No match found at index 2
        Found letter t at index 3
    
    Expected output when letterFinder is called with [6, 7] and 't':
    
        Please pass in correct arguments    
*/
/*
var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(letterToMatch) == 'string' && letterToMatch.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++){
            if(word[i] == letterToMatch){
                console.log('Found the letter ' + letterToMatch + ' at index ' + i)
            }
            else {
                console.log('No match found at index ' + i)
            }
        }
    }
    else {
        console.log('Please pass correct arguments to the function')
    }
}
// letterFinder([6,7], 'o') still says the same output as below code   
letterFinder('dog', 'o');
*/

/* 
try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    } 
*/

try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
}
  
function add(a, b) {
    console.log(a + b)
}
add(3, "4");

var str = "Hello";
str.match("jello");

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }