const siteOpener1 = document.getElementById("site-1");
const siteOpener2 = document.getElementById("site-2");
const siteOpener3 = document.getElementById("site-3");

siteOpener1.addEventListener("click", () => {
    const container1 = document.createElement("div");
    container1.classList.add("iframe-container");

    const closer1 = document.createElement("button");
    closer1.classList.add("iframe-closer");
    closer1.classList.add("icon-button");

    const iframe1 = document.createElement("iframe");
    iframe1.src= "https://viator-minimalistic-blog.vercel.app/";

    document.body.appendChild(container1);
    container1.appendChild(closer1);
    container1.appendChild(iframe1);

    closer1.addEventListener("click", () => {
        document.body.removeChild(container1);
        document.body.removeChild(closer1);
        document.body.removeChild(iframe1);
    })
});

siteOpener2.addEventListener("click", () => {
    const container2 = document.createElement("div");
    container2.classList.add("iframe-container");

    const closer2 = document.createElement("button");
    closer2.classList.add("iframe-closer");
    closer2.classList.add("icon-button");

    const iframe2 = document.createElement("iframe");
    iframe2.src= "https://soundwalker-landing-page.vercel.app/";

    document.body.appendChild(container2);
    container2.appendChild(closer2);
    container2.appendChild(iframe2);

    closer2.addEventListener("click", () => {
        document.body.removeChild(container2);
        document.body.removeChild(closer2);
        document.body.removeChild(iframe2);
    })
});

siteOpener3.addEventListener("click", () => {
    const container3 = document.createElement("div");
    container3.classList.add("iframe-container");

    const closer3 = document.createElement("button");
    closer3.classList.add("iframe-closer");
    closer3.classList.add("icon-button");

    const iframe3 = document.createElement("iframe");
    iframe3.src= "https://rock-paper-scissors-ashen-psi.vercel.app/";

    document.body.appendChild(container3);
    container3.appendChild(closer3);
    container3.appendChild(iframe3);

    closer3.addEventListener("click", () => {
        document.body.removeChild(container3);
        document.body.removeChild(closer3);
        document.body.removeChild(iframe3);
    })
});



const siteOpenerText1 = document.getElementById("site-1--");
const siteOpenerText2 = document.getElementById("site-2--");
const siteOpenerText3 = document.getElementById("site-3--");

siteOpenerText1.addEventListener("click", () => {
    const container1 = document.createElement("div");
    container1.classList.add("iframe-container");

    const closer1 = document.createElement("button");
    closer1.classList.add("iframe-closer");
    closer1.classList.add("icon-button");

    const iframe1 = document.createElement("iframe");
    iframe1.src= "eskimya/eskim.com.tr/index.html";

    document.body.appendChild(container1);
    container1.appendChild(closer1);
    container1.appendChild(iframe1);

    closer1.addEventListener("click", () => {
        document.body.removeChild(container1);
        document.body.removeChild(closer1);
        document.body.removeChild(iframe1);
    })
});

siteOpenerText2.addEventListener("click", () => {
    const container2 = document.createElement("div");
    container2.classList.add("iframe-container");

    const closer2 = document.createElement("button");
    closer2.classList.add("iframe-closer");
    closer2.classList.add("icon-button");

    const iframe2 = document.createElement("iframe");
    iframe2.src= "zen/zenakademi.com/index.html";

    document.body.appendChild(container2);
    container2.appendChild(closer2);
    container2.appendChild(iframe2);

    closer2.addEventListener("click", () => {
        document.body.removeChild(container2);
        document.body.removeChild(closer2);
        document.body.removeChild(iframe2);
    })
});


siteOpenerText3.addEventListener("click", () => {
    const container3 = document.createElement("div");
    container3.classList.add("iframe-container");

    const closer3 = document.createElement("button");
    closer3.classList.add("iframe-closer");
    closer3.classList.add("icon-button");

    const iframe3 = document.createElement("iframe");
    iframe3.src= "ezgiyurdabak/ezgiyurdabak.com/index.html";

    document.body.appendChild(container3);
    container3.appendChild(closer3);
    container3.appendChild(iframe3);

    closer3.addEventListener("click", () => {
        document.body.removeChild(container3);
        document.body.removeChild(closer3);
        document.body.removeChild(iframe3);
    })
});