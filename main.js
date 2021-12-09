const showMenu = document.querySelector(".fa-bars");
showMenu.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.classList.add("active");
})




 const valoreClose = document.querySelector(".fa-times");
 valoreClose.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.classList.remove("active");
 });