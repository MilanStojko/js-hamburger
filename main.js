const valoreShow = document.querySelector(".fa-bars");
function toggleMenu() {
    const element = document.querySelector(".hamburger-menu");
    element.className = element.classList.add(".active");
}
valoreShow.addEventListener("click", toggleMenu);



const valoreClose = document.querySelector(".fa-times");
valoreClose.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.className = element.classList.remove("active");
});