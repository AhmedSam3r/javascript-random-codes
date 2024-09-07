//abstraction hide the details and show the essentials
function Circle(radius) {
    this.radius = radius;
    
    //in order to be not accessible outside, the default location is no longer a property of the class
    //local variable
    //from oop POV it's a private member
    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        console.log('get method');
        return defaultLocation;
    }
    
    this.computeOptimumLocation = function(x){
        // .
    }
    //draw can access all of its attributes plus the attributes of the parent function
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation',{
        get: function() {
            return defaultLocation

        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('invalid location')
            defaultLocation = value;
        }
    });

}
const circle = new Circle(1);
console.log(circle.defaultLocation); //it gives us undefined as it's like a private property now
circle.getDefaultLocation();
console.log(circle);
//to acess properties in an easier way use defineProperty
console.log(circle.defaultLocation);
circle.defaultLocation = 1