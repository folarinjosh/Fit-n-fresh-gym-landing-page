const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class", isOpen ?  "ri-close-line"  : "ri-menu-unfold-2-fill");
      });


navLinks.addEventListener("click", ()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-unfold-2-fill");
});

// This is for the scroll reveal i added...cheers!!!
const scrollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
     delay: 500 ,
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
     delay:  1000,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
     delay:  1500,
});

ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
     delay: 2000,
});

ScrollReveal().reveal(".header_socials li", {
    ...scrollRevealOption,
     delay: 2500,
     interval: 500,
});


