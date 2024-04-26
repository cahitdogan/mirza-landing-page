const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky-header", window.scrollY > 0);
})