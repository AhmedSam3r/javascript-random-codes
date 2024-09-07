const SETTINGS = [];

SETTINGS.push(10,11);

console.log(SETTINGS);

SETTINGS.push(12,33);
console.log(SETTINGS);
Object.freeze(SETTINGS);

SETTINGS.push(11);//this line will produce an error since it comes after freeze.