// Load stylist data from JSON and populate the page
document.addEventListener('DOMContentLoaded', function() {
    // Get the JSON data from the script tag
    const stylistDataElement = document.getElementById('stylist-data');
    if (!stylistDataElement) return;
    
    try {
        const stylistData = JSON.parse(stylistDataElement.textContent);
        
        // Update page title
        document.title = `Wildflower Salon | ${stylistData.name}`;
        
        // Update the hero section
        const heroTitle = document.querySelector('.stylist-hero h1');
        if (heroTitle) {
            heroTitle.textContent = `Meet ${stylistData.name}`;
        }
        
        // Update the about section
        const bioElement = document.getElementById('stylist-bio');
        if (bioElement && stylistData.about) {
            bioElement.textContent = stylistData.about;
        }
        
        // Update phone link
        const phoneLink = document.getElementById('phone-link');
        const phoneText = document.getElementById('phone-text');
        if (stylistData.phoneNumber) {
            phoneLink.href = `tel:${stylistData.phoneNumber}`;
            phoneText.textContent = stylistData.phoneNumber;
        } else {
            phoneLink.style.display = 'none';
        }
        
        // Update booking link
        const bookingLink = document.getElementById('booking-link');
        if (stylistData.bookings) {
            bookingLink.href = stylistData.bookings;
            bookingLink.style.display = 'flex';
        }
        
        // Update Instagram link
        const instagramLink = document.getElementById('instagram-link');
        if (stylistData.instagram) {
            instagramLink.href = stylistData.instagram;
            instagramLink.style.display = 'flex';
        }
        
        // Update Facebook link
        const facebookLink = document.getElementById('facebook-link');
        if (stylistData.facebook) {
            facebookLink.href = stylistData.facebook;
            facebookLink.style.display = 'flex';
        }
        
    } catch (error) {
        console.error('Error parsing stylist data:', error);
    }
});