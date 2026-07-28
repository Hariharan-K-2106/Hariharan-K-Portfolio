/* ==========================================================
                TYPING ANIMATION
========================================================== */

const words = [

    "Full Stack Developer",

    "CSE Undergraduate",

    "AI Enthusiast",

    "AI Researcher",

    "Problem Solver",

    "Software Developer",

    "Continuous Learner",

    "Tech Explorer",

    "Innovation Explorer"

];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
            currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent =
            currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 70 : 120);

}

document.addEventListener("DOMContentLoaded",()=>{

    typeEffect();

});