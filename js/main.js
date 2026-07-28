/* ==========================================================
            RESET SCROLL POSITION ON PAGE LOAD
========================================================== */


if ('scrollRestoration' in history) {

    history.scrollRestoration = "manual";

}


window.addEventListener("load",()=>{

    window.scrollTo({

        top:0,

        behavior:"instant"

    });

});





/* ==========================================================
            CERTIFICATE SHOW MORE / SHOW LESS
========================================================== */

const showMoreBtn = document.querySelector(".show-more-btn");
const hiddenCertificates = document.querySelector(".hidden-certificates");

if (showMoreBtn && hiddenCertificates) {

    showMoreBtn.addEventListener("click", () => {

        hiddenCertificates.classList.toggle("show");

        if (hiddenCertificates.classList.contains("show")) {

            showMoreBtn.innerHTML = `
                <i class="fa-solid fa-chevron-up"></i>
                View less
            `;

        } else {

            showMoreBtn.innerHTML = `
                <i class="fa-solid fa-chevron-down"></i>
                View Remaining Certificates
            `;

        }

    });

}

/* ==========================================================
        SCROLL TO EXPLORE CLICK
========================================================== */


const scrollIndicator = document.querySelector(".scroll-indicator");


if(scrollIndicator){

    scrollIndicator.addEventListener(
        "click",
        function(){

            window.scrollBy({

                top: window.innerHeight * 0.9,

                behavior:"smooth"

            });

        }
    );

}