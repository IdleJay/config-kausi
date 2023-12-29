const top7 = ["The Colosseum", "The Roman Forum", "The Vatican", "Trevi Fountain", "The Pantheon", "Piazza Venezia", "The Palatine Hill"]

const [] = top7;
const [first, second, third, ...secondVisit] = top7; 
/* 
first = The Colosseum
second = The Roman Forum 
third = The Vatican 
secondVisit = the sub-array
*/

// Rest operator allows you to take items from an array and use them to create a separate sub-array. It can be used to destructure existing array items, rather than typing them out again

function addTaxToPrices(taxRate,...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart); 
