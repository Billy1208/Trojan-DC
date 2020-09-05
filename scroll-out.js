var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("sec-one").style.height = h + "px";
document.getElementById("sec-two").style.height = h + "px";
document.getElementById("sec-two-point").style.height = h + "px";
document.getElementById("sec-two-point-point").style.height = h + "px";
document.getElementById("sec-two").style.width = w + "px";
document.getElementById("sec-two-point").style.width = w + "px";
document.getElementById("sec-two-point-point").style.width = w + "px";
document.getElementById("sec-three").style.height = h + "px";
if(w < 500){
  document.getElementById("splash").src = "img/up 4-trojan logo motion 1.gif";
}

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: false,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function() {
$('#fullpage').fullpage({
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
});

//methods
$.fn.fullpage.setAllowScrolling(true);
});

const appearOptions = {
  threshold: 0
};
const faders = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
        }
  });

}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
