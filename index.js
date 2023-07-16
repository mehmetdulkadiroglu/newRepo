function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 3));  // Output: 5

// Define a basic object
let Circle = function(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}
