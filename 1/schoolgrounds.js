var hidden1;
var hidden2;
var hidden3;
var hidden4;
var hidden5;
var edeck;
var ydeck;
var candraw = true;

window.onload = function() {
    buildEnemyDeck();
    buildYourDeck();
    shuffleEnemyDeck();
    shuffleYourDeck();
    startGame();
}

function buildEnemyDeck() {
    let names = ["Sticky Notes", "Charger", "Paper Clip", "Sticker", "Calculator","Chalk", "highlighter", "Hole Puncher", "Laptop", "Mechanical Pencil", "Paper", "Pen", "Pencil", "rubber", "Scissor", "Smartwatch", "Stapler", "Coffee", "Correction Pen", "Doctor appointment", "Schedule", "Thumbtacks"];
    edeck = [];

    for (let i =0; i < names.length; i++) {
        edeck.push(names[i]);
    }
}

function shuffleEnemyDeck() {
    for (let i = 0; i < edeck.length; i++) {
        let j = Math.floor(Math.random() * edeck.length);
        let temp = edeck[i];
        edeck[i] = edeck[j];
        edeck[j] = temp;
    }
}

function buildYourDeck() {
    let names = ["Sticky Notes", "Charger", "Paper Clip", "Sticker", "Calculator","Chalk", "highlighter", "Hole Puncher", "Laptop", "Mechanical Pencil", "Paper", "Pen", "Pencil", "rubber", "Scissor", "Smartwatch", "Stapler", "Coffee", "Correction Pen", "Doctor appointment", "Schedule", "Thumbtacks"];
    ydeck = [];

    for (let i =0; i < names.length; i++) {
        ydeck.push(names[i]);
    }
}

function shuffleYourDeck() {
    for (let i = 0; i < ydeck.length; i++) {
        let j = Math.floor(Math.random() * ydeck.length);
        let temp = ydeck[i];
        ydeck[i] = ydeck[j];
        ydeck[j] = temp;
    }
}

function startGame() {
    hidden1 = edeck.pop();
    hidden2 = edeck.pop();
    hidden3 = edeck.pop();
    hidden4 = edeck.pop();
    hidden5 = edeck.pop();
    
    document.getElementById("draw").addEventListener("click", draw);
    document.getElementById("battle").addEventListener("click", battle);
}

function draw() {
    if (!candraw) {
        return;
    }
    for (let i = 0; i < 5; i++) {
        let cardImg = document.createElement("img");
        let card = ydeck.pop();
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("your-cards").append(cardImg);
    }
}

function battle() {
    canHit = false;
    document.getElementById("hidden1").src = "./cards/" + hidden1 + ".png";
    document.getElementById("hidden2").src = "./cards/" + hidden2 + ".png";
    document.getElementById("hidden3").src = "./cards/" + hidden3 + ".png";
    document.getElementById("hidden4").src = "./cards/" + hidden4 + ".png";
    document.getElementById("hidden5").src = "./cards/" + hidden5 + ".png";
}