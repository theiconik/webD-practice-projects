function rpsGame(yourChoice){
   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   botChoice= numberChoice(Math.floor(Math.random()*3));

   results= decideWinner(humanChoice, botChoice);
   message = finalMessage(results[0],results[1]);
   rpsFrontEnd(humanChoice, botChoice, message); 
}

function numberChoice(number){
   return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(human,bot){
   var rpsDatabase = {
      'rock': {'scissor':1, 'rock':0.5, 'paper':0 },
      'paper': {'scissor':0, 'rock':1, 'paper':0.5 },
      'scissor': {'scissor':0.5, 'rock':0, 'paper':1 },
   }

   var yourScore = rpsDatabase[human][bot];
   var botScore = rpsDatabase[bot][human];

   return [yourScore, botScore];
}

function finalMessage(yourScore, botScore){
   if(yourScore===0){
      return {'message': "You lost!", 'color': "red"};
   }
   else if(yourScore===0.5){
      return {'message': "Tied!", 'color': "blue"};
   }
   else{
      return {'message': "You won!", 'color': "green"};
   }
}

function rpsFrontEnd(human,bot,finalMessage){
   var op= document.getElementById("result")
   op.innerHTML = "<h4 style='background:" + finalMessage['color'] +";padding: 3px 9px; border-radius: 15px;'>" + finalMessage['message'];
}