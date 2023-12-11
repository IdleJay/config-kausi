/* Introduction
let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"]; //creating an array
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}

showItinerary(top3[0], top3[1], top3[2])

//what if I had top 7 places to visit?

// showItinerary(...top7); 

// what does it actually do?
// The Spread operator allows you to pass all array elements into a function without having to type them all individually.

// showItinerary(top3[0], top3[1], top3[2]) can be written as

showItinerary(...top3)
*/

/*
// Using the Spread Operator
const kellysPets = ['dog', 'cat', 'fish']
const jessiesPets = ['snake', 'rat', 'piglet']
let allPets = [...kellysPets, ...jessiesPets] //changed const to let
allPets = [...allPets, 'goat'] // will give error, therefore change const to let

// console.log(allPets)

const kellysPetsNames = {dog: 'Benny', cat: 'Whisky', fish: 'Nemo'}
const jessiesPetsNames = {snake: 'Silver', rat: 'Barnie', piglet: 'Dave'}
const allPetsNames = {...kellysPetsNames, ...jessiesPetsNames}

const franksPetsNames = {...kellysPetsNames}

kellysPetsNames.dog = 'Gail'

// console.log(kellysPetsNames)
// console.log(franksPetsNames)

//Converting into arrays
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersArr = [...letters]
console.log(lettersArr)
*/

//task 
const oscarWinnersOne = {2018: 'Green Book', 2017: 'The Shape of Water', 2016: 'Moonlight'}
const oscarWinnersTwo = {2021: 'Nomadland', 2020: 'Coda', 2019: 'Parasite'}

/*
Task:
    1. Use the spread operator to combine the two objects 
       of Oscar winners into a single object just called 
       'oscarWinners'.
    2. Add the 2015 winner, which was called 'Spotlight', 
       to 'oscarWinners'. (Be careful, you might need to change 
       the const to a let!) 
*/


let oscarWinners = {...oscarWinnersOne, ...oscarWinnersTwo}
console.log(oscarWinners);

oscarWinners = {...oscarWinners, 2015: 'Spotlight'}
console.log(oscarWinners)


