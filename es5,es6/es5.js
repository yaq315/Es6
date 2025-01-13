//ES5

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();

fruit.shift();


var orangeIndex = fruit.indexOf("orange");

fruit.push("orange");

var vegetablesLength = vegetables.length;

vegetables.push(vegetablesLength);

var food = fruit.concat(vegetables);
console.log(food)

var x= food.splice(4, 2);
console.log(x)

 food.reverse();


var result = food.join(",");


console.log(result);