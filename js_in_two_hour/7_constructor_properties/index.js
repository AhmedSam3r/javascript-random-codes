//factory function
function createCircle(radius, x, y){
    return {
        radis: radius,
        location: {
            x: x,
            y: y
        },
        draw: function() {
            console.log('draw a circle in create circle.')
        }

    }
}

const new_circle = createCircle(1, 2, 2);
new_circle.draw();





//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}

another_circle = new Circle(1);
Circle.call({}, 1);
Circle.apply({},[1])

console.log(new_circle.constructor);
console.log(another_circle.constructor);


//let x = new Object();
// new String(); ==> "", '', ``
//new Boolean(); ==> true, false
//Every object has a constructor property and that references the function that was used to create that object
//functions are objects
let x = {};



const Circle1 =new Function ('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const cir = new Circle1(1);
console.log(cir);

