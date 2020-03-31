"use strict";

require("../scss/all.scss");

//- 引入 CSS
//- Scroll 事件
window.onscroll = function () {
  myFunction();
}; // Get the header


var header = document.getElementById("layout__header");
var banner__header = document.getElementById("banner__header"); // Get the offset position of the navbar

var sticky = banner__header.offsetTop; // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset > sticky) {
    console.log(123);
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}