/*
for (var year = 2023; year < 2025; year++) {
    console.log(year)
    for (var month =6; month < 9; month++) {
        console.log("--------", month)
    }
} */


/* building a multiplication table for the kids
for (var i = 1; i <= 10; i++) {
    console.log("----------" + i + " Times table -------- ");
    for (var j = 1; j <= 10; j++) {
        console.log(i + " times " + j + " equals " + i * j);
    }
} */

/* Challenge

    Imagine the app also allows children to practice custom tables — for examples, multiples of 10 in descended order, each one divided by 5 and 10. 
    
    Task: 
        - Use a nested loop to console log each of the divisions for each of the multiples between 
          100 and 10, in the following format. 

    Expected Results: 
    
        "100 divided by 5 equals 20"                            
        "100 divided by 10 equals 10"
        "90 divided by 5 equals 18"
        "90 divided by 10 equals 9"
        "80 divided by 5 equals 16"
        "80 divided by 10 equals 8"
        etc...
        "10 divided by 10 equals 1 "      
*/
/*
for (var i = 100; i >= 10; i = i - 10) {
    for (var j = 5; j <= 10; j = j + 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
*/

/* -------------------------------------------Part 2---------------------------------------------------- */

/* 

Task 1: Working with if-else statements and loops 

    Imagine you're creating a wedding planning app. Someone is using the app 
    to help them plan the seating arrangements for a wedding reception. As 
    part of those arrangements, the user wants the placemats at the tables to 
    match the theme colors of the wedding, which are white, pink, and blue. There 
    are 10 placemats at each table. They want the first and last placemats 
    at each table to be white, and they want the rest of the placemats to 
    alternate between pink and blue. 
    
    1. Using a for loop and if-else conditional statements, console.log 
       the colors and their corresponding placemat numbers.  
    2. Check that your results appear as follows: 
    
        Placemat 1: white
        Placemat 2: pink
        Placemat 3: blue
        Placemat 4: pink
        Placemat 5: blue
        Placemat 6: pink
        Placemat 7: blue
        Placemat 8: pink
        Placemat 9: blue
        Placemat 10: white

    Hint: You can use an operator you learned earlier in the course to
    check if a number is odd or even! 
*/
/*
for (i = 1; i <= 10; i++) {
    var placemat = "Placemat " + i + ": ";
    var color = "";
    if (i == 1 || i == 10) {
        color = "white";
    } else if (i % 2 == 0) {
        color = "pink";
    } else{
        color = "blue";
    }
    console.log(placemat + color);
}
*/



