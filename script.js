const toggle = document.getElementById("themeToggle");
const body = document.body;

/* LOAD SAVED THEME */
const savedTheme = localStorage.getItem("theme") || "dark";
body.className = savedTheme;

if (toggle) {
    toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

/* TOGGLE THEME (SMOOTH TRANSITION) */
toggle?.addEventListener("click", () => {
    body.classList.add("theme-transition");

    const isDark = body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    body.className = newTheme;
    localStorage.setItem("theme", newTheme);
    toggle.textContent = newTheme === "dark" ? "☀️" : "🌙";

    setTimeout(() => {
        body.classList.remove("theme-transition");
    }, 600);
});

/* SCROLL REVEAL EFFECT */
const revealItems = document.querySelectorAll(".section, .card");

const reveal = () => {
    revealItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
};

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", reveal);
reveal();
