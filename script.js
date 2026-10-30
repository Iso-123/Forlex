// BLUE LOVE GIFT WEBSITE 💙

// PAGES
const homePage = document.getElementById("homePage");
const choicesPage = document.getElementById("choicesPage");
const picturesPage = document.getElementById("picturesPage");
const messagePage = document.getElementById("messagePage");

const pages = [
    homePage,
    choicesPage,
    picturesPage,
    messagePage
];

// MUSIC
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.5;

// SHOW PAGE
function showPage(page) {
    pages.forEach(p => {
        p.classList.add("hidden");
        p.classList.remove("active");
    });

    page.classList.remove("hidden");
    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// OPEN GIFT
document.getElementById("openButton")
    .addEventListener("click", () => {

        showPage(choicesPage);

        // Start music after user interaction
        if (music.paused) {
            music.play().catch(() => {
                musicButton.textContent = "♫";
            });
        }
    });

// PICTURES BUTTON
document.getElementById("picturesButton")
    .addEventListener("click", () => {
        showPage(picturesPage);
    });

// MESSAGE BUTTON
document.getElementById("messageButton")
    .addEventListener("click", () => {
        showPage(messagePage);
    });

// BACK BUTTONS
document.querySelectorAll(".back-button")
    .forEach(button => {
        button.addEventListener("click", () => {
            showPage(choicesPage);
        });
    });

// MUSIC BUTTON
musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(() => {
            musicButton.textContent = "♫";
        });
    } else {
        music.pause();
    }
});

// UPDATE MUSIC ICON
music.addEventListener("play", () => {
    musicButton.textContent = "❚❚";
});

music.addEventListener("pause", () => {
    musicButton.textContent = "♫";
});

// CREATE ANIMATED ELEMENTS
function createParticles(container, symbol, count, className) {
    const parent = document.querySelector(container);

    if (!parent) return;

    for (let i = 0; i < count; i++) {
        const element = document.createElement("span");

        element.className = className;
        element.textContent = symbol;

        element.style.left = Math.random() * 100 + "%";
        element.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        element.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        element.style.animationDelay =
            -(Math.random() * 15) + "s";

        parent.appendChild(element);
    }
}

// FLOATING HEARTS
createParticles(
    ".hearts",
    "💙",
    18,
    "heart"
);

// FALLING SNOWFLAKES
createParticles(
    ".snowflakes",
    "❄",
    35,
    "snowflake"
);

// TWINKLING STARS
createParticles(
    ".stars",
    "✦",
    25,
    "star"
);

// BUTTERFLIES
createParticles(
    ".butterflies",
    "🦋",
    8,
    "butterfly"
);

// MOVING CLOUDS
const cloudsContainer = document.querySelector(".clouds");

for (let i = 0; i < 6; i++) {
    const cloud = document.createElement("span");

    cloud.className = "cloud";
    cloud.textContent = "☁";

    cloud.style.top = Math.random() * 90 + "%";
    cloud.style.left = Math.random() * 100 + "%";

    cloud.style.fontSize =
        (Math.random() * 60 + 60) + "px";

    cloud.style.animationDuration =
        (Math.random() * 20 + 25) + "s";

    cloud.style.animationDelay =
        -(Math.random() * 30) + "s";

    cloudsContainer.appendChild(cloud);
}

// RANDOM STAR POSITIONS
document.querySelectorAll(".star").forEach(star => {
    star.style.top = Math.random() * 100 + "%";
});

// INITIAL PAGE
showPage(homePage);