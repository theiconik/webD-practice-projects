for( let i=0; i<=200; i++){
   let bars= document.createElement('span');
   document.querySelector('.container').appendChild(bars);
}

TweenMax.from('.container span',{
   transform: "translateZ(1000px)",
   zIndex: 100,
   delay: 1,
   stagger:{
      from : "random", 
      amount: 10
   }
})