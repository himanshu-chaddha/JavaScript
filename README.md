# What is JavaScript?

- High level, Interpreted programming Language
- Conforms to the **ECMAScript** specifications
- Multi-Paradigm
- Runs on the Client/Browser as well as the server (Node.js)

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
> - Primitive data types are String, Number, Boolean, null, undefined, Symbol. [eg. dataTypes.js](https://github.com/himanshu-chaddha/JavaScript/blob/master/JavaScript/dataTypes.js) > **Concatenation** eg.

```
let name = "John";
let age = 30;
console.log("My name is " + name + " and I am " + age);
```

> - `This is an old of doing concatenation.`
> - **But from ES6 we have a completly different method of concatenation i.e. template strings** \*using backticks `we do this.` eg.

```
console.log(`My name is ${name} and I am ${age}`);
```

> - There are so many methods that can be applied on string variable like
>   > - length
>   > - toUpperCase
>   > - toLowerCase
>   > - split('seperator')
>   > - substring(starting index, last index), etc.

## 2. Arrays
