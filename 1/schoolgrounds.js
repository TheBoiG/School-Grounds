var hidden;
var edeck;
var ydeck;
var candraw = true;

window.onload = function() {
    buildEnemyDeck();
    buildYourDeck();
    shuffleEnemyDeck();
    shuffleYourDeck();
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
    console.log(edeck);
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
    console.log(ydeck);
}