/* ==========================================================
                PARTICLE BACKGROUND
========================================================== */

const particleContainer = document.getElementById("particles");


if(particleContainer){

    const particleCount = 80;


    for(let i = 0; i < particleCount; i++){

        const particle = document.createElement("span");


        particle.classList.add("particle");


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 5 + "s";


        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";


        particleContainer.appendChild(particle);

    }

}