//  Random Number for dice1 
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageName = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomImageName;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Random Number for dice1 
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImageName = "dice" + randomNumber2 + ".png";

randomImageSource = "images/" + randomImageName;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

// Main Logic/Comparison

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins🚩";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}