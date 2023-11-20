var castle = {}

castle['price'] = 2000000
castle['color'] = 'pink'
castle['number of rooms'] = 20


function updateObject(object, key) {
    console.log(object[key]);
}

updateObject(castle, 'color');
