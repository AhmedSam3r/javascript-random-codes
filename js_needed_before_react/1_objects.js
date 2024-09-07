
// const person = {
//     name: 'Ahmed',
//     age: 22,
//     isMarried: false,
// };

//copying the values corresponding to person object
// const {name, age, isMarried} = person;

const name = 'Mohamed'
const age = 22

const person2 = {
    name, //we copy the value by doing this since name variable and attribute are the same
    age,
    isMarried: false,
};

//copying the object and changing the attribute's value we want
const person3 = {...person2, name:"Jack", age:-1}
console.log(person3);

const names = ["AHMED", "SAMER", "FEKRY"];
const names_2 = [...names, "SLEEM"];
console.log(names_2);