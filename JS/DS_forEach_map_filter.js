const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']


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
function addInternationalCode(num, index) {
    console.log(`${index} +44 ${num}`)  
}
phoneNumbers.map(addInternationalCode)