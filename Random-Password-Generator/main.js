var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_?:";
var op = document.getElementById("password");
var alertBox = document.querySelector(".alertBox");

function generatePwd() {
  var pwdl = 16;
  var password = "";
  for (var i = 0; i < pwdl; i++) {
    password = password + chars[Math.floor(Math.random() * chars.length)];
  }
  op.innerHTML = password;
  alertBox.innerHTML = "Copied!";
}

function reset() {
  op.innerHTML = "";
}

function copyPassword(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alertBox.classList.toggle("active");
    setTimeout(function () {
      alertBox.classList.toggle("active");
    }, 1000);
  }
}
