/*
const favFilms = new Map()

favFilms.set(1, 'Top Gun')
favFilms.set(2, 'The Empire Strikes Back')
favFilms.set(3, 'ET')

console.log(favFilms)
console.log(favFilms.get(1)) //get(key)
*/

/*
Task:
    1. Create a new Map using the Map constructor and save 
    it to a const called dinnerGuests.
    2. Use the set() method to add three dream dinner guests 
    to your Map.
    3. Log out one or more of the guests using the 
    get() method.
*/

/*
const dinnerGuests = new Map() 

dinnerGuests.set(1, 'x')
dinnerGuests.set(2, 'y')
dinnerGuests.set(3, 'z')

console.log(dinnerGuests.get(2))
*/

/*
const ingredients = ['sugar', 'salt', 'flour', 'butter', 'chocolate', 'cookies', 'salt', 'flour']


const uniqueIngredients = new Set(ingredients)

console.log(ingredients.length)
console.log(uniqueIngredients.size)
*/

const dates = ['2003', '2004', '2004', '2006', '2008', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2015', '2017', '2018', '2020', '2020', '2020', '2022']

/*
Task:
    1. Use a Set to create an array of dates minus 
    the duplicates. 
*/

const uniqueDates = new Set(dates) 
console.log(uniqueDates)