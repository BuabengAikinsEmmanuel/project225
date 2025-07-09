// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links (if any are added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Basic form validation feedback (example for a generic form)
const forms = document.querySelectorAll('form.needs-validation');
forms.forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});


// Function to handle active navigation link styling
function setActiveNavLink() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav a'); // Desktop links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a'); // Mobile links

    const setActive = (links) => {
        links.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentLocation) {
                link.classList.add('text-blue-500', 'font-semibold'); // Active style for desktop
                 if (link.parentElement.id === 'mobile-menu') { // Specific style for mobile if needed
                    link.classList.add('bg-blue-100');
                 }
            } else {
                link.classList.remove('text-blue-500', 'font-semibold');
                if (link.parentElement.id === 'mobile-menu') {
                    link.classList.remove('bg-blue-100');
                }
            }
        });
    };

    setActive(navLinks);
    setActive(mobileNavLinks);
}

// Call setActiveNavLink on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);
// Also call it if the page content is loaded dynamically or via SPA routing (not applicable here but good practice)

console.log("FIT HOME WELL main.js loaded.");
