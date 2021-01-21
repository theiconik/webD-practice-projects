//Varibales and Selectors
const color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const div1 = document.querySelector(".color1");
const div2 = document.querySelector(".color2");
const btn = document.getElementById("btn");

//Functions
window.onload = function () {
  btn.addEventListener("click", function () {
    console.log("Fuck");
    let hexcolor1 = "#";
    let hexcolor2 = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor1 += color[getRandomnumber()];
    }
    for (let i = 0; i < 6; i++) {
      hexcolor2 += color[getRandomnumber()];
    }
    console.log(hexcolor1);
    console.log(hexcolor2);
    div1.textContent = hexcolor1;
    div2.textContent = hexcolor2;
    document.body.style.backgroundImage =
      getCssValuePrefix() +
      "linear-gradient(" +
      "45deg" +
      ", " +
      hexcolor1 +
      ", " +
      hexcolor2 +
      ")";
  });
};

function getRandomnumber() {
  return Math.floor(Math.random() * color.length);
}

function getCssValuePrefix() {
  var rtrnVal = ""; //default to standard syntax
  var prefixes = ["-o-", "-ms-", "-moz-", "-webkit-"];

  return rtrnVal;
}
