# WildflowSalonRebuild

This project is a simple, static website for Wildflower Salon, featuring a main page, service menu, team member profiles, contact information, and more.

## Project Structure

```
WILDFLOWERSALONREBUILD
├── src
│   ├── sitemap.xml             # Sitemap for Google Search Console
│   ├── wrangler.json           # Configuration for Cloudflare deployment
│   ├── _routes.json            # Routes configuration for Cloudflare Workers
│   ├── index.html              # Main page of the website
│   ├── 404.html                # 404 page for incorrect links
│   ├── contact.html            # Contact page
│   ├── meet-the-team.html      # Meet the team page
│   ├── products.html           # Products page
│   ├── services.html           # Service menu page
│   ├── TeamMembers
│   │   └── meet-[employee].html # Individual team member pages
│   ├── css
│   │   └── styles.css          # Styles for the website
│   ├── js
│   │   └── scripts.js          # JavaScript for interactivity
│   └── assets
│       └──                     # Directory for images, logos, etc.
├── .gitattributes              # Git attributes file
└── README.md                   # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ClootBooters24/WildflowerSalonRebuild
   cd WildflowerSalonRebuild
   ```

2. **Open the site locally:**  
   Open `src/index.html` in your browser to view the main page.  
   You can also use a local server for better performance:
   ```sh
   python3 -m http.server
   ```
   Then visit `http://localhost:8000/src/` in your browser.

3. **View other pages:**  
   Open the other HTML files in the `src` directory to view the respective pages.

## Features

- Responsive design for desktop, tablet, and mobile
- Hamburger menu for mobile navigation
- Team member profile pages
- Service menu and product listings
- Contact information and new client page
- SEO-friendly sitemap and meta tags
- Custom 404 error page

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Cloudflare (for deployment)

## License

This project is licensed under the MIT License.

---

**For questions or contributions, please open an issue or pull