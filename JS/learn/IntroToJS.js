/*
Task 4: Use the + addition operator to add numbers. 

Imagine you're creating a mid-year financial report for a food and beverage company, and you need to add up the company's total profit from its first two quarters. The company's profits derive from three sources: beverages, snacks, and candy. 
    
    1. Using the data below, add up the profits for quarter one and quarter two. Use the + operator to add the profits for beverages, snacks, and candy together, and assign the result to the variable that corresponds to it (either quarterOneProfit or quarterTwoProfit). 
    
    2. Add these two totals together to get the grand total of mid-year profit. Use the + operator and assign the result to the totalProfit variable. 
    
    3. Console.log the totalProfit variable to see what it is and write down your answer.

Quarter One Profits
    -Beverages: 152555
    -Snacks:     95543
    -Candy:     121235

Quarter Two Profits
    -Beverages:  164569
    -Snacks:     104072
    -Candy:      175423
*/

var quarterOneProfit = 152555 + 95543 + 121235;
var quarterTwoProfit = 164569 + 104072 + 175423;
var totalProfit = quarterOneProfit + quarterTwoProfit; 
console.log(totalProfit);

/*
Task 5: Use the + concatenation operator to combine strings and a number. 

    Imagine you're helping a survey team create a profile of a survey participant, using information they've entered in an online form. For this task, you're going to write the opening sentence of the profile, which will report the person's name and age.    

    1. Assign values to the three variables below to describe a real or imaginary person. Assign strings to firstName and lastName. Assign a number to age. 
    
    2. Use the + operator to combine the variables and additional strings to console.log a report about the person. The final result should be a single string in the console — for example, "Jane Doe is 42 years old."   
*/

var firstName = "Jay ";
var lastName = "Jo";
var age = 20;
console.log(firstName + lastName + " is " + age + " years old. ")