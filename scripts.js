document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        if (slides.length === 0) {
            console.error("No slides found!");
            return;  
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                let targetSection = document.querySelector(this.getAttribute("href"));
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    
    // Animate project cards on hover
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});


