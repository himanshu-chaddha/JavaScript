// event listener on button click
const btn = document.querySelector(".btn");
btn.addEventListener("click", e => {
  e.preventDefault();

  //   console.log("Button Clicked");
  console.log(e);
  console.log(e.target);

  // you can also get the class name or id name.
  console.log(e.target.className);
  console.log(e.target.id);

  // chaning style of page on this event
  document.querySelector("#my-form").style.background = "#ccc";

  // adding a class to the page
  document.querySelector("body").classList.add("bg-dark");
});
