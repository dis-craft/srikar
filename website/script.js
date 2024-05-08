const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
  if (link.href !== "projects.html") { // Exclude projects.html link
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior for other links
    });
  }
});
