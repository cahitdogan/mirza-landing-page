const navigatorAnchors = document.querySelectorAll(".navigator-anchors");

const servisler = document.getElementById("servisler-container");
const referanslar = document.getElementById("referanslar-container");
const fiyatlandirma = document.getElementById("fiyatlandirma-container");
const sss = document.getElementById("sss-container");
const biziTaniyin = document.getElementById("bizi-taniyin-container");
const iletisim = document.getElementById("iletisim-container");

const screenWidth = window.matchMedia("(width > 1440px)");


navigatorAnchors.forEach(anchor => {
    anchor.addEventListener("click", event => event.preventDefault());

    const target = anchor.dataset.target;

    if (screenWidth.matches) {
        switch (target) {
            case "servisler":
                anchor.addEventListener("click", () => servisler.scrollIntoView({behavior: "smooth", block: "center"}) );
                break;
            case "referanslar":
                anchor.addEventListener("click", () => referanslar.scrollIntoView({behavior: "smooth", block: "center"}) );
                break;
            case "fiyatlandirma":
                anchor.addEventListener("click", () => fiyatlandirma.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "sss":
                anchor.addEventListener("click", () => sss.scrollIntoView({behavior: "smooth", block: "center"}) );
                break;
            case "bizi-taniyin":
                anchor.addEventListener("click", () => biziTaniyin.scrollIntoView({behavior: "smooth", block: "center"}) );
                break;
            case "iletisim":
                anchor.addEventListener("click", () => iletisim.scrollIntoView({behavior: "smooth", block: "center"}) );
        }
    } else {
        switch (target) {
            case "servisler":
                anchor.addEventListener("click", () => servisler.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "referanslar":
                anchor.addEventListener("click", () => referanslar.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "fiyatlandirma":
                anchor.addEventListener("click", () => fiyatlandirma.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "sss":
                anchor.addEventListener("click", () => sss.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "bizi-taniyin":
                anchor.addEventListener("click", () => biziTaniyin.scrollIntoView({behavior: "smooth", block: "start"}) );
                break;
            case "iletisim":
                anchor.addEventListener("click", () => iletisim.scrollIntoView({behavior: "smooth", block: "start"}) );
        }
    }
});