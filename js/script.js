// Get the items in the dropdown menu
var dropdown = document.querySelector(".dropdown-menu");
var items = Array.from(dropdown.children);

// Sort the items alphabetically based on the item text
items.sort(function (a, b) {
  return a.textContent.localeCompare(b.textContent);
});

// Reorder the items in the dropdown menu
items.forEach(function (item) {
  dropdown.appendChild(item);
});

// ////////////////////////////////////////////////////////////////////////////////////////////////

const btns = document.querySelectorAll(".nav-btn");
const videoSlides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  videoSlides.forEach((videoSlide) => {
    videoSlide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  videoSlides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// /////////////////////////////////////////////////////////////////////////////////////////////

function updateClock() {
  var now = new Date();
  var dname = now.getDay();
  mo = now.getMonth();
  dnum = now.getDate();
  yr = now.getFullYear();
  hou = now.getHours();
  min = now.getMinutes();
  sec = now.getSeconds();
  pe = "AM";

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hou == 0) {
    hou = 12;
  }

  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }
  function padNumber(num, digits) {
    return num.toString().padStart(digits, "0");
  }

  var values = [
    week[dname] + `.`,
    months[mo] + `.`,
    padNumber(dnum, 2) + `.`,
    yr,
    padNumber(hou, 2) + `:`,
    padNumber(min, 2) + `:`,
    padNumber(sec, 2),
    pe,
  ];
  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).textContent = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval(updateClock, 1000);
}

initClock();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var slide = document.getElementById("slide");
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function () {
  if (x > "-1800") {
    x = x - 300;
    slide.style.top = x + "px";
  }
};
downArrow.onclick = function () {
  if (x < "0") {
    x = x + 300;
    slide.style.top = x + "px";
  }
};
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 150;
result.textContent = 0 + "/" + limit;

// Load the text from localStorage if available
if (localStorage.getItem("myText")) {
    myText.value = localStorage.getItem("myText");
    result.textContent = myText.value.length + "/" + limit;
}

myText.addEventListener("input", function () {
    var text = myText.value;
    if (text.length > limit) {
      myText.value = text.substring(0, limit); // قص النص ليحتوي على 150 حرفًا فقط
    }
    result.textContent = myText.value.length + "/" + limit;


    // Store the current text in localStorage
    localStorage.setItem("myText", myText.value);
  });


  // if ("serviceWorker" in navigator) {}
if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("../sw.js")
      .then((reg) => {
        console.log("file is register", reg);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }