//dom manipulation
const ul = document.querySelector(".items");
// 1. ---to remove all ul from page ---
// ul.remove();

// 2. ---to remove last element---
// ul.lastElementChild.remove();

// 3. --- to add text to the elements to first child ---
ul.firstElementChild.textContent = "Hello";

// 4. --- to manipulate using indexes ---
ul.children[1].innerHTML = "Brad";

// 5. ---to manipulate last child ---
ul.lastElementChild.innerHTML = "<h1>Smith</h1>";

// 6. --- to mainpulate style of any tag ---
const btn1 = document.querySelector(".btn");
btn1.style.background = "red";
