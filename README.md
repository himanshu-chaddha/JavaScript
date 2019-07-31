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

> `This is an old of doing concatenation.`
>
> **But from ES6 we have a completly different method of concatenation i.e. template strings** _using backticks_ `we do this.` eg.

```
console.log(`My name is ${name} and I am ${age}`);
```

> - There are so many methods that can be applied on string variable like
> - `length` to get the length of string.
> - `toUpperCase` to capitalize all characters of the string.
> - `toLowerCase` to convert the string into lowercase.
> - `split('seperator')` to separate a string into an array.
> - `substring(starting index, last index)` to get a substring from an existing string, etc.

## 2. Arrays

- These are variables that hold multiple values. These are generated using an Array() constructor. \
- **eg.**

```
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
```

> But for the most part we use square brackets [] for an array.
> **eg.**

```
const fruits =['apples', 'oranges', 'pears'];
console.log(fruits);
```

- In javascript we can have any type of data in arrays.
- **eg.** `const fruits = ['apples', 'oranges', 'pears', 10, true];`
- We can access the elements of an array by using there index as in javascript index of an array is always starts with 0. \
- **eg.** `console.log(fruits[1]);`. it will generate an **output:-** oranges. \
- There are various methods that can be applied on arrays. \
  > to add an element in an array we can use a direct approach i.e by using index where the element is added in an array. \
  > **eg.** `fruits[3] = "grapes";`
  > Doing this is not an great approach because we don't know the actual size of array and we can lost our data from that array. \
  > So, the best approach is to use _push method_ and this will add the elements at the last of the array. \
  > **eg.** `fruits.push("mangoes");`
  > To add the elements at the beginning we use _unshift method_. \
  > **eg.** `fruits.unshift("strawberry");`
  > And if you want to take last element off then use _pop method_.
  > **eg.** `fruits.pop();`
