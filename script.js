
document.addEventListener("DOMContentLoaded", function () {

    // Dark Mode
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.textContent =
            document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            themeToggle.textContent = isDark ? "☀️" : "🌙";
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        });
    }

    // Smooth Scrolling for Section Links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Highlight Current Navigation Section
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(
        '.navbar nav a[href^="#"]'
    );

    function updateNavigation() {
        let currentSection = "";

        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateNavigation);
    updateNavigation();

    // Automatic Copyright Year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
