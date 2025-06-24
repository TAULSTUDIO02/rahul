// main.js is the main JavaScript file for the dashboard website.
// It handles user interactions, manages page navigation, and updates content dynamically.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the dashboard
    initDashboard();
});

function initDashboard() {
    // Set up event listeners for navigation
    setupNavigation();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            loadPage(targetPage);
        });
    });
}

function loadPage(page) {
    // Logic to load the specified page dynamically
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
