var friendsList = ['Wayne', 'Sara', 'Frankie'];

console.log(friendsList);

friendsList.push('Kelly');
console.log(friendsList);

friendsList.pop(); //removes the item at the end of the array
console.log(friendsList);

/*
Task: 
    1. Create an empty array and store it in a variable named 
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items 
       (because you received all of the gifts!!)
    
    Extra: you could use a for loop to pop off all of the items. 
    This might be a bit tricky, so I have given you a hint.
*/


var presentList = [];

presentList.push('PC', 'Shoes', 'Clothes', 'GTA V', 'Mouse');
console.log(presentList);

for (i = presentList.length; i >= 0; i--) {
    presentList.pop(i)
}
console.log(presentList);