// Update the copyright year dynamically
document.getElementById('copyright-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');

    hamburgerBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileNav.classList.remove('open');
        }
    });
});