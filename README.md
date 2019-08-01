# What is JavaScript?

- High level, Interpreted programming Language
- Conforms to the **ECMAScript** specifications
- Multi-Paradigm
- Runs on the Client/Browser as well as the server (Node.js)
- It is dynamically typed language. Whereas, it's superset i.e TypeScript(TS) is statically typed
- `In statically typed languages we have to define the data types of variables before using them. eg. var name: string = "John"`

# Why learn JavaScript?

- It is the programming language of the browser
- Build very interactive user interfaces with frameworks like React
- Used in building very fast server side and full stack applications
- Use in mobile development (React Native, NativeScript and Ionic)
- Used in desktop application development (Electron JS)

# Contents of this course

1. Variables and Data types
2. Arrays
3. Object Literals
4. Methods for String, arrays, objects, etc.
5. Loops - for, while, for...of, forEach, map
6. Conditionals (if, ternary & switch)
7. Functions (normal & arrow)
8. OOP (prototypes & classes)
9. DOM selection
10. DOM manipulation
11. Events
12. Basic Form Validation

# Let's Jump In !

**Recommended Text Editor - Vs Code**

- _Install Live server extension in vs code_. This allows the browser to refresh when we save the page.
  `Write your javascript at the bottom of our code i.e just above the <body> tag in <script> tag. But Recommended to wrote a external .js file.`

## 1. Variables and Data Types

### Variables

> - Basically,there are three ways to declare a variable `var, let, const.`
> - `var` is used when we want to initialize a variable having **Global Scope**
> - `let & const have added with` **ES6 or ES2015**. And they have a _block level scope_.
> - Using `let` we can re-assign values  
>   **eg.** let age = 30; \
>   age = 31; \
>   console.log(age);
> - But when we use `const` we can not re-assign values to the variables. \
>   because doing so, will througn an error. Also, we have to assign a value to `const` variables \
>   before using them.

### Data Types

> - We have primitive data types that can directly assign data to memory.
> - Primitive data types are String, Number, Boolean, null, undefined, Symbol. [eg. dataTypes.js](https://github.com/himanshu-chaddha/JavaScript/blob/master/JavaScript/dataTypes.js) \
>   **Concatenation** eg.

```
let name = "John";
let age = 30;
console.log("My name is " + name + " and I am " + age);
```

> `This is an old method of doing concatenation.`
>
> **But from ES6 we have a completely different method of concatenation i.e. template strings \${variable_name}** _using backticks_ we can do concatenation. eg.

```
console.log(`My name is ${name} and I am ${age}`);
```

> - There are so many methods that can be applied on string variables like:
> - `length` to get the length of the string.
> - `toUpperCase` to capitalize all characters of the string.
> - `toLowerCase` to convert the string into lowercase.
> - `split('seperator')` to separate a string whenever the separator occur in the string into an array as elements.
> - `substring(starting index, last index)` to get a substring from an existing string, and many more methods covered throughout in this course.

## 2. Arrays

- These are variables that hold multiple values. These could be created by different paradigms using an Array() constructor or [ ] symbols. **eg.**

```
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
```

> But for most of the part we use square brackets [ ] to create an array. **eg.**

```
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
```

- In javascript we can have any type of data in arrays.**eg.**
  > `const fruits = ['apples', 'oranges', 'pears', 10, true];`
- We can access the elements of an array by using their index. And in javascript index of an array is always starts with 0 i.e. `Base Address`. **eg.**

  > `console.log(fruits[1]);`.
  > It will generate an **output:-** oranges.

### There are various methods that can be applied on arrays.

- To add an element in an array we can use a direct approach i.e by using index where the element is added in that array.
  > **eg.** `fruits[3] = "grapes";`.
- Doing this is not an great approach because we don't know the actual size of array and we can lost our data from that array. So, a good approach is to use _push() method_ and this will add the elements at the last of the array.
  > **eg.** `fruits.push("mangoes");`.
- To add the elements at the beginning of the array, we can use _unshift() method_.
  > **eg.** `fruits.unshift("strawberry");`.
- And if you want to take last element off from the array, then use _pop() method_.
  > **eg.** `fruits.pop();`.
- To check that if an variable is array or not, then use _Array.isArray()_ method. It's return type is boolean.
  > **eg.** `console.log(Array.isArray(fruits));`.
- To get the index of any element in an array we have to use _indexOf()_ method.
  > **eg.** `console.log(fruits.indexOf('oranges'));`.

## 3. Object Literals

> These are key value pairs. And commonly known as objects and elements in them are properties of them. \
> And the value of the properties of an object may be a single value, a multivalued array or an object enclosed in {} itself.

- **eg.**

```
const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address :{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
```

- To access single value of object literals, we have to access them using dot . operator
- **eg.** `console.log(person.firstName, person.lastName);`.
  > Also, we can pull the elements from an object literals into variables as:
  ```
  const { firstName, lastName, address: { city } } = person;
  console.log(firstname, lastName);
  console.log(city);
  ```
- We can add properties directly to the objects by passing the key and it's value using dot . operator as:

```
person.email = "john@example.com";
console.log(person);
```

`the output of this wiil be an object of person having email added this time with it's value.`

- Most of the time we are dealing with array of objects.

```
const todos=[
    {
        id: 1,
        text: 'Feed Rusty',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Room Cleaning',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Meeting with RM',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);
```

- Now, coming on JSON (JavaScript Object Notation), it is a data format which is used in full stack development.

  > In using API's and sending data to a server, usually send it in JSON format. This is similar to these object literals.

- JSON format also contains key value pairs like object literals.

  > But the difference between these two is that, all the keys in json are enclosed in double quotes. And all the values which are strings are also enclosed in double quotes.

- We can convert the object literals into JSON object using javascript as:

```
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
```

## 4. Methods for string, arrays, objects, etc.

> Some of these are explained above and remaining could be expalined further.

## 5. Loops - for, while, for...of, forEach, map

> These are used to iterate over an iterable objects. Iterable objects are those which contains elements which can be parsed separately. /
> like arrays, object literals, etc.

#### **For loop**
