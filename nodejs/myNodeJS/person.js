class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

const person = {
  name: 'John Doe',
  age: 30
}

module.exports = person;
module.exports = Person;