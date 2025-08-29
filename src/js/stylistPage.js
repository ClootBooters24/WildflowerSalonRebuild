// Function to get stylist name from current page URL
function getStylistName() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop();
    return pageName.replace('meet-', '').replace('.html', '');
}

// Function to load JSON data for a specific stylist
function loadStylistData(stylistName) {
    const formattedName = stylistName.charAt(0).toUpperCase() + stylistName.slice(1);
    // Corrected path - removed /src/ prefix
    const jsonPath = `data/${formattedName}Information.json`;
    
    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updatePageContent(data);
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
            // If JSON fails to load, show a friendly message
            document.getElementById('stylist-bio').textContent = 'Information about this stylist is currently unavailable.';
        });
}

// Function to update page content based on JSON data
function updatePageContent(data) {
    // Update about section
    if (data.about) {
        document.getElementById('stylist-bio').textContent = data.about;
    }
    
    // Create links based on available data
    const linksContainer = document.getElementById('stylist-links');
    
    // Phone link
    if (data.phoneNumber) {
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${data.phoneNumber.replace(/\D/g, '')}`;
        phoneLink.className = 'stylist-link phone-link';
        phoneLink.innerHTML = '<span class="link-icon">📞</span><span>' + data.phoneNumber + '</span>';
        linksContainer.appendChild(phoneLink);
    }
    
    // Booking link
    if (data.bookings) {
        const bookingLink = document.createElement('a');
        bookingLink.href = data.bookings;
        bookingLink.className = 'stylist-link';
        bookingLink.innerHTML = '<span class="link-icon">📅</span><span>Book Now</span>';
        linksContainer.appendChild(bookingLink);
    }
    
    // Instagram link
    if (data.instagram) {
        const instagramLink = document.createElement('a');
        instagramLink.href = data.instagram;
        instagramLink.className = 'stylist-link';
        instagramLink.target = '_blank';
        instagramLink.rel = 'noopener noreferrer';
        instagramLink.innerHTML = '<span class="link-icon">📷</span><span>Instagram</span>';
        linksContainer.appendChild(instagramLink);
    }
    
    // Facebook link
    if (data.facebook) {
        const facebookLink = document.createElement('a');
        facebookLink.href = data.facebook;
        facebookLink.className = 'stylist-link';
        facebookLink.target = '_blank';
        facebookLink.rel = 'noopener noreferrer';
        facebookLink.innerHTML = '<span class="link-icon">👍</span><span>Facebook</span>';
        linksContainer.appendChild(facebookLink);
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    const stylistName = getStylistName();
    loadStylistData(stylistName);
});