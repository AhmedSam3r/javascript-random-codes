//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}
const circle = new Circle(1);

//in js you can add properties on the fly
circle.location = {x: 1}
const propertyName = 'center location'
circle[propertyName] = {y: 1};
circle['location'] = {x: 3}

console.log(circle);

delete circle.location;
delete circle['center location'];
console.log(circle);