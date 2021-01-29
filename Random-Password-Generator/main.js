var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_?:";

function generatePwd() {
  var pwdl = 16;
  var password = "";
  for (var i = 0; i < pwdl; i++) {
    password = password + chars[Math.floor(Math.random() * chars.length)];
  }
  var op= document.getElementById("password");
  op.innerHTML= password;
}
