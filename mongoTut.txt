// searching for data in mongo db
use jayKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}}) // rating greater than  equal to 3.5

// and operator
db.items.find({rating: {$gte: 3.5}, price: {$gt: 4000}})

// or operator
db.items.find({ 
    $or:[{rating: {$gte: 3.5}}, {price: {$gt: 4000}}]
})

// to only show rating datas
db.items.find({rating: {$gt: 3.5}}, {rating: 1})


db.items.find({price: 12900})

// deleting data from mongodb
db.items.deleteOne({price: 12900})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 12900})
// will delete all the matching entries

show collections
db.anotherCollections.insertOne({a: 89}) // will add data into another collection

db.items.insertMany([{name: "iPhone", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Redmi 90s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])

db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}}) 
// updating the data

db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})