//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}
const circle = new Circle(1);

//enumerating objects
for (let key in circle){
    //if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);
//to search a property in an object
if ('radius' in circle)
    console.log('Circle has a radius');