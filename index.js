// final.js

// Function to add two numbers
function addTwoNumbers(a, b) {
    return a + b;
}

// New function to subtract two numbers
function subtractTwoNumbers(a, b) {
    return a - b;
}

console.log(addTwoNumbers(2, 3));  // Output: 5
console.log(subtractTwoNumbers(5, 2));  // Output: 3

// Define a basic object
let Circle = function(radius) {
    this.radius = radius;
}

// Method to get the area of the circle
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

// New method to get the circumference of the circle
Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
}

// Using the Circle object
let myCircle = new Circle(5);
console.log(myCircle.getArea()); // Output: 78.53981633974483
console.log(myCircle.getCircumference()); // Output: 31.41592653589793
