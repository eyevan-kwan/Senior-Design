document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load navbar");
            return response.text();
        })
        .then(data => {
            // 1. Inject the navbar HTML
            document.getElementById("navbar").innerHTML = data;

            // 2. Determine the current page filename
            let currentPage = window.location.pathname.split("/").pop() || "index.html";

            // 3. Find all navigation links inside the injected navbar
            const navLinks = document.querySelectorAll("#navbar .nav-link");

            // 4. Loop through links and add the 'active' class to the matching one
            navLinks.forEach(link => {
                // Get just the filename from the href attribute (e.g., "about.html")
                let linkPage = link.getAttribute("href");

                if (linkPage === currentPage) {
                    link.classList.add("active");
                    // Optional Bootstrap accessibility standard:
                    link.setAttribute("aria-current", "page"); 
                }
            });
        })
        .catch(error => console.error("Error loading or configuring navbar:", error));
});