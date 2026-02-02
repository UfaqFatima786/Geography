
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

const globe = document.querySelector(".globe-img");
let fastRotation = false;

if (globe) {
    globe.addEventListener("click", () => {
        fastRotation = !fastRotation;
        globe.style.animation = fastRotation
            ? "rotate 4s linear infinite"
            : "rotate 15s linear infinite";
    });
}

const factsBtn = document.querySelector(".Facts-btn");
const factsSection = document.querySelector(".section-facts");

if (factsBtn && factsSection) {
    factsBtn.addEventListener("click", () => {
        factsSection.classList.toggle("show-facts");
        factsSection.style.display =
            factsSection.style.display === "none" ? "block" : "none";
    });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active-card"));
        card.classList.add("active-card");
    });
});

const revealElements = document.querySelectorAll(
    ".land, .card, .climate-img, .maped"
);

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("animate__animated", "animate__fadeInUp");
        }
    });
});

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.05)";
        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 300);
    });
});
