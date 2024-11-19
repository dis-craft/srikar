// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});

// Project Section Carousel
document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.querySelector(".project-container");
    const projects = [
        "Project 1: Description of Project 1",
        "Project 2: Description of Project 2",
        "Project 3: Description of Project 3",
        "Project 4: Description of Project 4",
        "Project 5: Description of Project 5",
        "Project 6: Description of Project 6",
        // Add more projects as needed
    ];
    let currentIndex = 0; // Tracks the starting project in the view

    // Populate the project-container with projects
    projects.forEach(project => {
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");

        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = project;

        cardWrapper.appendChild(card);
        projectContainer.appendChild(cardWrapper);
    });

    // Calculate the width of each card wrapper
    const cardWrapperWidth = document.querySelector(".card-wrapper").offsetWidth;

    // Event listener for Next button to slide to the next set of projects
    document.getElementById("next").addEventListener("click", () => {
        currentIndex += 1;

        // Wrap around to the beginning if we've reached the end
        if (currentIndex > projects.length - 3) {
            currentIndex = 0;
        }

        // Slide the project-container
        projectContainer.style.transform = `translateX(-${cardWrapperWidth * currentIndex}px)`;
    });
});

// 3D Card Tilt Effect
document.addEventListener("DOMContentLoaded", function() {
    const cardWrappers = document.querySelectorAll(".card-wrapper");

    cardWrappers.forEach(wrapper => {
        const card = wrapper.querySelector(".card");

        // Mousemove event to rotate card
        card.addEventListener("mousemove", function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Reduced tilt by 30%
            card.style.transform = `rotateX(${-y / 65}deg) rotateY(${x / 40}deg)`;
        });

        // Reset transform on mouse leave
        card.addEventListener("mouseleave", function() {
            card.style.transform = `rotateX(0) rotateY(0)`;
        });
    });
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};