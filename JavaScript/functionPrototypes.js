// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function() {
  return `${this.firstName}  ${this.lastName}`;
};
// Instantiate object
const person1 = new Person("John", "Doe", "3-7-1990");
const person2 = new Person("Marry", "Smith", "3-7-1980");
console.log(person1);
console.log(person2.firstName);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
