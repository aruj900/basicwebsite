var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageSource1);

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);
