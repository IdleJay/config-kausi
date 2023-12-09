const car = {
    engine: true
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar) {
    console.log('thinking-emoji', prop);
}

for (prop of Object.keys(sportsCar)) { 
    console.log("bullseye emoji", prop + ": " + sportsCar[prop]);
}