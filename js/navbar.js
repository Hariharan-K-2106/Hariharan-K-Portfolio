/* ==========================================================
                SMOOTH NAVIGATION
========================================================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================================
                ACTIVE NAVIGATION
========================================================== */

const sections=document.querySelectorAll("#about, #skills, #education, #experience, #projects, #contact");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-180;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================================
                NAVBAR SCROLL EFFECT
========================================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

/* ==================================================
                MOBILE MENU
================================================== */


const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector(".nav-links");


if(menuBtn && navMenu){


    menuBtn.addEventListener("click",()=>{


        navMenu.classList.toggle("show");


        menuBtn.innerHTML = 
        navMenu.classList.contains("show")

        ?

        `<i class="fa-solid fa-xmark"></i>`

        :

        `<i class="fa-solid fa-bars"></i>`;


    });


}