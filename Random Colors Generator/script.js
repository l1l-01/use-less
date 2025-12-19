"use strict";

// Array of hexadecimal digits
const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// DOM element selections
const btn = document.querySelector("button");
const colors = document.querySelectorAll(".color");
const colors_codes = document.querySelectorAll(".color-code");

// Function to generate and inject new colors
const inject_Clrs = () => {
  const hexCodes = [
    Generate_Clr(hexNums),
    Generate_Clr(hexNums),
    Generate_Clr(hexNums),
  ];
  changeClr(hexCodes);
};

// Event listener for button click
btn.addEventListener("click", inject_Clrs);

// Function to change colors in the UI
function changeClr(arr) {
  for (let i = 0; i < 3; i++) {
    colors[i].style.backgroundColor = arr[i];
    colors_codes[i].textContent = arr[i];
  }
}

// Function to generate a random color
function Generate_Clr(arr) {
  let clr = new Array();
  for (let i = 0; i < 6; i++) {
    clr.push(arr[parseInt(Math.random() * 16)]);
  }
  return `#${clr.join("")}`;
}

// Event listeners for copying color codes
colors_codes.forEach((clr_code) => {
  clr_code.addEventListener("click", () => {
    document.execCommand("Copy");
    const clr = clr_code.textContent;
    clr_code.textContent = "Copied";
    setTimeout(() => {
      clr_code.textContent = clr;
    }, 600);
  });
});
