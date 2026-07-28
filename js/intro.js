const intro = document.getElementById("intro");
const exploreBtn = document.getElementById("explore-btn");
const mainContent = document.getElementById("main-content");



// Explore transition
exploreBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.classList.add("show");

        document.body.style.overflow = "auto";

    }, 1000);

});