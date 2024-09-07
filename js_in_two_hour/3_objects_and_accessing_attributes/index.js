//object
let person = {
    name : 'Samer',
    age: 30
};


person.name = 'Ahmed';
console.log(person);
console.log(person.name);

let selection = 'name';
person[selection] = 'Ahmad2';
console.log(person);
