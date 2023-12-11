
/* function addInternationalCode(num, index) {
    console.log(`${index} +44 ${num}`)  //indexing is done automatically
}

phoneNumbers.forEach(addInternationalCode) //calls the function named addInternationalCode on each element of the array
*/

/* 
phoneNumbers.forEach(function(num, index) {
    console.log(`${index} +44 ${num}`)
})
*/

/*
const numbersWithInternationalCode = []

phoneNumbers.forEach(function(num){
    numbersWithInternationalCode.push(`+44 ${num}`)
})

console.log(numbersWithInternationalCode)
*/

// above code has been optimised
/*function addInternationalCode(num, index) {
    console.log(`${index} +44 ${num}`)  
}
phoneNumbers.map(addInternationalCode)
*/


/* another way to write the code
const numbersWithInternationalCode = []
phoneNumbers.map(function(num){
    numbersWithInternationalCode.push(`+44 ${num}`)
})
console.log(numbersWithInternationalCode)
*/

/* even lesser logic
const numbersWithInternationalCode = phoneNumbers.map(function(num){
    return `+44 ${num}`
})
console.log(numbersWithInternationalCode)
*/


const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']

/*
const validatedPhoneNumbers = phoneNumbers.filter(function(num){
    return num.length == 10
})

console.log(validatedPhoneNumbers)
*/

//above code can be tidy'd up by:
/* 
const validatedPhoneNumbers = phoneNumbers.map( //calling map function on each element to add +44 on them
    function (num) {
        return `+44 ${num}`
    }
).filter(   //calling the filter method to pass the test provided by the function 
    function (num) {
        return num.length == 14    //updated from 10 to 14
    })

console.log(validatedPhoneNumbers) //will give an empty array since '+44 ' takes up 4 character spaces
*/

const kmWalked = [15.5256, 48.7884, 31.5453, 24.7295, 35.9073, 26.2654, 21.3653, 10.8763, 16.3526, 37.9873, 14.8647, 32.9367, 27.0643, 2.2347, 4.0987]
/*
Task:

    .forEach()
    1. Use the .forEach() method to iterate over the 
       array and reduce each element to just 2 decimal 
       places. You can do that using a method we have 
       seen before called toFixed(). Push the modified 
       element to a new array.
       
    .map()
    2. Now refactor your code to use the .map method. 
       You should no longer need to use the .push() 
       method or declare an empty array.

    .filter()
    3. Use the filter method to:
       - Remove any number greater than 40.
       - Remove any number less than 3.
*/

//task1
const roundedArray = []
kmWalked.forEach((element) => {
    const rounded = Number(element.toFixed(2));
    roundedArray.push(rounded);
})
console.log("Using forEach:", roundedArray)


//task2
const roundedMap = kmWalked.map((element) => Number(element.toFixed(2)));
console.log("Using Map:", roundedMap)

//task3
const filteredArray = kmWalked.filter((element) => element <= 40 && element >= 3)
console.log("using filter:", filteredArray)

