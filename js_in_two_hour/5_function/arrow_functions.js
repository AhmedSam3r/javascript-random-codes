function randomNumber() {
    return Math.random;
}

let rand =  () => {
    return Math.random;
}

let rand_2 =  () => Math.random;

// document.addEventListener('click', function() {
//     console.log('regular function');
// });

// document.addEventListener('click', () => console.log('arrow function'));


/*
Example EC6
*/

class Person {
    
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        //this here isn't redifined
        setTimeout(() => {console.log('arrow '+ this.name);}, 100);
    }

    printNameRegular(){
        //this here is redifined to the global scope
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100);
        setTimeout(function() {
            console.log('Function: ' + that.name);
        }, 100);


    }
}

let person = new Person('Ahmed Samer');
person.printNameArrow();
person.printNameRegular()


