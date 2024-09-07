let names = ["AHMED", "SAMER", "FEKRY", "SLEEM"];
const numbers = [1, 2, 3, 4, 5, 6];

//map function
//in case I want to modify every element and adding something to it
const new_numbers = numbers.map((number) => {
    console.log(number);
    return number * 2;
})

console.log(new_numbers);

//filter

const new_even_numbers = numbers.filter((number)=>{
    return number % 2 == 0;
})

console.log(new_even_numbers);