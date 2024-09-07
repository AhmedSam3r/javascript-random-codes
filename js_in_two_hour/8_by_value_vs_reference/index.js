//primitives are copied by value
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

let number=10;

function increment(number){
    number++;
}
increment(number);
console.log(number);

//objects are copied by their reference
let a = {value: 1}
let b = a;
a.value=2;
// a & b are pointing to the same address in memory
console.log(a);
console.log(b);


function increment_obj(number){
    number.value++;
}

number_obj = {value: 10};
//object is passed by reference
increment_obj(number_obj);
console.log(number_obj);

