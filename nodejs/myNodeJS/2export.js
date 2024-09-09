var Person = require('./person');

var person1 = new Person('John Doe', 30);
person1.greeting();
// My name is John Doe and I am 30

console.log(Person.name); // Outputs: John Doe
console.log(Person.age); // Outputs: 30