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

> Loops are a method by using which we can iterate over an iterable objects. \
> Iterable objects are those which contains elements which can be parsed separately. \
> like arrays, object literals, etc.

#### **For loop**

> For loop contains initiation of iterator, condition and increment/decrement at the same time enclosed in parenthesis.

- **eg.**

```
for(let i = 0; i < 5; i++){
    console.log(`For loop iterations : ${i}`);
}
```

`Where first argument is assignment of the iterator or variable, second is the condition and third is the increment or decrement.`

#### **While loop**

> For using a while loop we have to first initialize the iterator. \
> Then we can only start our while loop which contains only a condition as an argument. \
> And increment/decrement would be passed inside the loop and it's necessary. If we don't pass it it will become an never ending loop. \
> It's is not a hard and fast rule that we have to put the increment/decrement at the end of the all the statements inside loop. **eg.**

```
let i = 0;
while(i < 5){
    console.log(`While loop iterations : ${i}`);
    i++;
}
```

- Looping through the arrays will become a easy task now as:

```
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
```

`It will print all the text properties of every element in the todos object.`

- Also we have a better method to loop through arrays we have a **for...of** loop. **eg.**

```
for(let todo of todos){
    console.log(todo.text);
}
```

#### we also have some high order array methods.

> Some of them are forEach, map, filter, etc. These high order methods take a function as an argument. \
> These functions are callback functions and also have a parameter which is a iterator used to loop through the arrays.

- **eg. 1. forEach**

```
todos.forEach(function(todo){
    console.log(todo.text);
});
```

- **eg. 2. map** `First it loop through the array then it returns an array of values you want to access.`

```
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
```

- **eg. 3. filter** `Let suppose we want to only get the text of todo which is completed` or we can say that `isCompleted = true;`

```
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);
```

`Also we can take a stack of map over filter to get the only array of properties not the complete object of that because filter returns an array of objects. It can be done as:`

```
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);
```

## 6. Conditionals (if, ternary & switch)

#### If statement

- In JS `==` will only match the values but `===` will match value as well as the data type of that value.

```
const x = '10';
if(x == 10){
    console.log("x is 10");
}
```

`Here, this if condition will become true and message will be printed on console. But, here string 10 is not equal to number 10 and condition will become truthy.So, for these types of conditions JS provides an extra operator i.e === triple equal operator.`

```
const x = '10';
if(x === 10){
    console.log("x is 10");
}
```

`This time, condition will become falsy and there is no output on the console.`

- We can also have **else statement** with an if statement and also can have a **nested if block, which will have a chain of if-> else if-> else statements.**

```
const x = 20;
if(x === 10){
    console.log("x is 10");
}else if(x > 10){
    console.log("x is greater than 10");
}else{
    console.log("x is less than 10");
}
```

- Also, we can have multiple conditions in if statement. Which is achieved by using || OR operator or && AND operator.

#### Ternary Operator

> This is like a shorthand if statement. And it used to assign variables based on conditions.

- syntax: condition ? if true then do this : else do this;

```
const x = 10;
const color = x > 10 ? 'red' : 'green';
console.log(color);
```

`Here, it will print green because x is not greater than 10 and else part will be executed.`

#### Switch

> Switches are like a block which have cases for different values, whichever case will be true then that block will be executed. \
> It also have a default block which will only be executed when there is no case match. \
> Only one condition will be executed in a switch block either one of the cases or the default block in whole switch statement.

```
const x = 10;
const color = x > 10 ? 'red' : 'green';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is neither red nor green');
        break;
}
```

## 7. Functions (normal & arrow)

> Functions are created using _function_ keyword followed by the function names and parenthesis. \
> It may or may not have arguments. \
> Also, we have to call a function in order to execute it.

- **eg.**

```
function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums(3,5);
```

`But, what will happen when we didn't pass any parameter to the function call.`

> `addNums()` \
> It will return NaN on the console i.e Not a Number.

- We can also set default values to the function arguments.

```
function addNums(num1 = 3, num2 = 5){
    console.log(num1 + num2);
}
addNums();
```

> `Now if you are not any value to the function call then it will return the sum of default values instead of NaN`. \
> `And if you are passing values then these values will overwrite the default values.`

- And by **ES6 arrow functions** are added to JS.
  > In arrow functions instead of using function keyword we would name it as a variable. \
  > It could be written as:

```
const addNums(num1 = 3, num2 = 5) =>{
    return num1 + num2;
}
console.log(addNums(5,10));
```

**Note 1:** `If you have only one line in the arrow funtion then there is no need to write curlibraces {}. Just write that line in front of your arrow i.e =>. And no need to return a value it automatically does that.`

```
const addNums(num1 = 3, num2 = 5) => num1 + num2;
console.log(addNums(5,10));
```

**Note 2:** `And if have have only one argument in your function then it will become to short as now we even don't need any paranthesis to write function arguments.`

```
const addNums = num1 => num1 + 5;
console.log(addNums(5));
```

## 8. OOP (prototypes & classes)

> Object Oriented Programming, we can create a object using constructor function with prototypes and also by ES6 classes.

- A constructor function name will start from capital letter eg. `function Person(properties){}`. **eg.**

```
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
```

> After creating it, we have to instantiate that with the Constructor function.

```
const person1 = new Person("John", "Doe", "3-7-1990");
const person2 = new Person("Mary", "Smith", "4-5-1980");
console.log(person1);
console.log(person2.firstName);
```

> Also, we can have functions in the body of constructor.

```
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}
console.log(person1.getBirthYear());
```

#### Function prototype

> When we create an object then it have a prototype property. This can easily be seen in developer console of chrome. \
> we use prototypes because writing the methods i.e functions in the constructor is not a good practice. Because we not might need the function in every object.

- **eg.** instead of writing getFullYear() function in constructor we create its prototype

```
Person.prototype.getFullName = function(){
    return this.dob.getFullYear();
}
```

- You can refer this example file of function prototyping [eg. functionPrototypes.js](https://github.com/himanshu-chaddha/JavaScript/blob/master/JavaScript/functionPrototypes.js)
