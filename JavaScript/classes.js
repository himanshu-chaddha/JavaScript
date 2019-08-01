// class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}
// instantiate object
const person1 = new Person("John", "Doe", "3-7-1990");
const person2 = new Person("Marry", "Smith", "3-7-1980");
console.log(person1);
console.log(person2.firstName);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
