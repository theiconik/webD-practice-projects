
function ageInDays(){
   var birthyear= prompt('Hey buddy, tell me in which year you were born?');
   var cd= new Date();
   var cy= cd.getFullYear();
   var ageID= (cy-birthyear)*365;
   var h5 = document.createElement('h5');
   h5.setAttribute('id','ageInDays');
   var textAnswer = document.createTextNode(ageID)
   h5.appendChild(textAnswer);
   document.getElementById('result').appendChild(h5);
}

function reset(){
   document.getElementById('ageInDays').remove();
}

