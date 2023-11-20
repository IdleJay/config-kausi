var hero = {
    name: "Jay",
    age: 24000,
    weapon: 'Recon Phantom', 
    aim: 'Radiant',
}

hero.age = 24001; //updating of age
console.log(hero.health); //undefined
hero.health = 10; //adding new variable to hero
console.log(hero.health); //will show 10
console.log(hero); //console loggin of hero object
console.log(hero.name); //console logging of only hero's name

