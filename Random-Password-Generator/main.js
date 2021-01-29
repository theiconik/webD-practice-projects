var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_?:";
var op= document.getElementById("password");

function generatePwd() {
  var pwdl = 16;
  var password = "";
  for (var i = 0; i < pwdl; i++) {
    password = password + chars[Math.floor(Math.random() * chars.length)];
  }
  op.innerHTML= password;
}

function reset(){
   op.innerHTML = "";
}
