//parameter is the variable we have at function in time of declaration
function greet(name){

    console.log('Hello ' + name + '!');
}

function square(number){
    return number * number;

}

//argument is the actual value of supply to the parameter
greet('Sameer');
greet('Ahmed');

let result = square(4);
console.log(result)