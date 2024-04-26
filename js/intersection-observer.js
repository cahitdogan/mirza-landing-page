const elements = document.querySelectorAll("#servisler-container, #referanslar-container, #fiyatlandirma-container, #sss-container, #bizi-taniyin-container, #iletisim-container");

const mq = window.matchMedia("(width > 650px)");

if (mq.matches) {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.23,
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0%)"
                observer.unobserve(entry.target);
            }
        });
    },options);
    
    elements.forEach(element => {
        observer.observe(element);
    });
} else {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0%)"
                observer.unobserve(entry.target);
            }
        });
    },options);
    
    elements.forEach(element => {
        observer.observe(element);
    });
}