function imgSlider(anything){
   document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
   const circle = document.querySelector('.circle');
   circle.style.background= color;
   console.log(color);
} 

function toggleMenu(){
   var menuToggle = document.querySelector(".toggle");
   var nav= document.querySelector('.navigation');
   menuToggle.classList.toggle('active');
   nav.classList.toggle('active');
}