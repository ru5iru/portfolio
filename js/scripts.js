document.addEventListener("DOMContentLoaded", () => {
    
    // Update Year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const menuList = document.getElementById("menu");

    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", () => {
            menuList.classList.toggle("active");
        });
        document.querySelectorAll("header ul li a").forEach(link => {
            link.addEventListener("click", () => {
                menuList.classList.remove("active");
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.boxShadow = "none";
            }
        });
    }

    // Show More / Less Projects
    const moreProjectsContainer = document.getElementById("more-projects");
    const viewMoreBtn = document.getElementById("view-more-btn");
    const viewLessBtn = document.getElementById("view-less-btn");
    const projectsSection = document.getElementById("projects");

    if (moreProjectsContainer && viewMoreBtn && viewLessBtn) {
        viewMoreBtn.addEventListener("click", function() {
            moreProjectsContainer.classList.add("active");
            viewMoreBtn.classList.add("hidden");
            viewLessBtn.classList.remove("hidden");
        });

        viewLessBtn.addEventListener("click", function() {
            moreProjectsContainer.classList.remove("active");
            viewLessBtn.classList.add("hidden");
            viewMoreBtn.classList.remove("hidden");
            
            if (projectsSection) {
                const headerOffset = 80;
                const elementPosition = projectsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    }
});