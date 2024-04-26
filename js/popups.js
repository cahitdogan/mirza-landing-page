const burgerButton = document.querySelector("header > button");
const popupFilter = document.getElementById("popup-filter");
const popupFilter2 = document.getElementById("popup-filter2");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileNavMenuCloser = document.querySelector("#mobile-nav-menu > button:first-child");
const mobileNavMenuAnchors = document.querySelectorAll(".mobile-nav-menu-anchors");
const messageResultContainer = document.querySelector("#message-result");
const messageResultText = document.querySelector("#message-result p");
const messageResultButton = document.querySelector("#message-result button")

burgerButton.addEventListener("click", function() {
    popupFilter.style.display = "block";
    mobileNavMenu.style.transform = "translateX(0%)";
    mobileNavMenu.classList.toggle("mobile-nav-shadow");
});

mobileNavMenuCloser.addEventListener("click", function () {
    mobileNavMenu.style.transform = "translateX(100%)";
    popupFilter.style.display = "none";
    mobileNavMenu.classList.toggle("mobile-nav-shadow");
});

popupFilter.addEventListener("click", function() {
    popupFilter.style.display = "none";
    mobileNavMenu.style.transform = "translateX(100%)";
    mobileNavMenu.classList.toggle("mobile-nav-shadow");
});

mobileNavMenuAnchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
        popupFilter.style.display = "none";
        mobileNavMenu.style.transform = "translateX(100%)";
    });
});

popupFilter2.addEventListener("click", () => {
    popupFilter2.style.display = "none";
    messageResultContainer.style.display = "none";
    messageResultText.style.color = "var(--color-text-primary)";
    messageResultText.innerHTML = "Mesajınız gönderiliyor...";
})

messageResultButton.addEventListener("click", () => {
    popupFilter2.style.display = "none";
    messageResultContainer.style.display = "none";
    messageResultText.style.color = "var(--color-text-primary)";
    messageResultText.innerHTML = "Mesajınız gönderiliyor...";
})