"use strict";

var settingsmenu = document.querySelector(".setting-menu");
var darkbtn = document.querySelector("#dark-btn");

function settingsMenuToggle() {
  if (settingsmenu.style.maxHeight === "0px" || settingsmenu.style.maxHeight === "") {
    settingsmenu.style.maxHeight = "450px";
  } else {
    settingsmenu.style.maxHeight = "0";
  }
}

function darkModeToggle() {
  darkbtn.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');

  if (localStorage.getItem('theme') == "light") {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

if (localStorage.getItem('theme') == "light") {
  darkbtn.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') == "dark") {
  darkbtn.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');
} else {
  localStorage.setItem('theme', 'light');
}