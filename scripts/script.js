//STICKY HEADER

window.onscroll = function() {myFunctionTop()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunctionTop() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
};


//SCROLL NAVIGATSIOON

$(document).ready(function() {
  $('#myNav').localScroll({duration:1200});
});

