const words = [
"Student",
"Web Developer",
"Frontend Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function type() {

if(wordIndex === words.length){
wordIndex = 0;
}

currentWord = words[wordIndex];
currentLetters = currentWord.slice(0, ++letterIndex);

document.querySelector(".typing").textContent = currentLetters;

if(currentLetters.length === currentWord.length){
wordIndex++;
letterIndex = 0;
}

setTimeout(type, 200);
}

type();