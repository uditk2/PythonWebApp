// Custom JavaScript for the application

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Check for side reveal navbar
    const sideRevealBtn = document.getElementById('sideRevealBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (sideRevealBtn && sidebar) {
        sideRevealBtn.addEventListener('click', function() {
            if (sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            } else {
                sidebar.classList.add('show');
            }
        });
    }
    
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});