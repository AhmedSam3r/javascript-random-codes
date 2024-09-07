//object literal
const circle = {
    //this members are properties
    radius: 1,
    location: {
        x:1, 
        y:2 
    },
    //method. behavior
    draw: function(){
        console.log('draw a circle');
    }
};


circle.draw();

//what if we want to create another circle with different values ? Copying would be a problem
//leads to duplication
//object literal isn't recommended in the most of the cases
//solution use a factory 

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
    console.log('this', this)
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}

//new ensures the following
//that we avoid making the ob
// this Object [global] {
//     global: [Circular],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     }
//   }


//js doesn't relly have class, so this syntax looks like we're creating a class
const newer_circle = new Circle(10);
newer_circle.draw();
new_circle.constructor;
newer_circle.constructor;