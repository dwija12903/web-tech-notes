const u = require('util');

// u.format()
const formattedString = u.format('%s is %d years old', 'John', 30);
console.log('Formatted String:', formattedString);

// u.inspect()
const objectToInspect = { name: 'Dwija', age: 20, city: 'Gandhinagar' };
console.log('Inspected Object:', u.inspect(objectToInspect));

// u.isArray(), u.isDate()
console.log('Is Array?', u.isArray([1, 2, 3]));
console.log('Is Date?', u.isDate(new Date()));
