/* commenting the entire code to help me work for the task
class Book {
    constructor(title, author, isInStock){
        this.title = title;
        this.author = author;
        this.isInStock = isInStock;
    }
    toggleIsInStock() {
        this.isInStock = !this.isInStock
    }
    getPrototype() {
        console.log(Object.getPrototypeOf(this))
    }

}

const book1 = new Book('The Lord of the Rings', 'JRR Tolkien', false)
const book2 = new Book('My Secret Wishlist', 'Preeti Shenoy', true)

console.log(book1) //before calling the toggle function, it will still show false
book1.toggleIsInStock();
console.log(book1) //we called the toggle function now it will show true 

console.log(book1) //calling for the prototype function
book1.getPrototype() 
if you look at the above function's output in a browser, you will see this output:
{constructor: ƒ, toggleIsInstock: ƒ, getPrototype: ƒ}
*/

/*
Task:
1. Create a new class called 'Computer' which takes 3 parameters:
    make, model, price.
2. Create a method which logs out a phrase summarising the object. 
   For example: This Apple Macbook cost $1800.
3. Create a new instance of Computer passing in the details for 
   whatever computer you are working on right now.
*/

class Computer {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;

        this.summarise = function () {
            console.log(`This ${make} ${model} costs ${price}.`)
        }
    }
}

const Computer1 = new Computer('Apple', 'Macbook', '$1800')
Computer1.summarise();

