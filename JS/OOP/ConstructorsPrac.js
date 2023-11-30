function Furniture(type, price, deliveryCharge){
    this.type = type;
    this.price = price;
    this.deliveryCharge = deliveryCharge;
    
    this.summarise = function(){
        console.log(`This ${type} costs ${price} or ${price + deliveryCharge} including delivery.`)
    }
}

const furnitureItem1 = new Furniture('chair', 500, 25)
const furnitureItem2 = new Furniture('sofa', 1000, 35)
furnitureItem1.summarise()
furnitureItem2.summarise()


function Attraction(name, price, description) {
    this.name = name;
    this.price = price; 
    this.description = description; 

    this.summarise= function() {
        console.log(`${name} ${description}. It costs ${price} to enter.`)
    }
}

const AttractionLocation1 = new Attraction('Disneyland', 60,'is a world famous theme park with hundreds of rides and activities')
AttractionLocation1.summarise()