// Load the common <head> elements
function loadHead() {
    const headContent = `
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
      <link rel="manifest" href="site.webmanifest">
      <link rel="stylesheet" href="styles.css">
    `;
    document.head.innerHTML += headContent;
  }
  
  // Load the common navbar
  function loadNavbar() {
    const navbarContent = `
      <header>
        <nav>
          <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
          <ul class="navbar">
            <li><a href="index.html" id="home-link">Home</a></li>
            <li><a href="about.html" id="about-link">About Us</a></li>
            <li><a href="teachings.html" id="teachings-link">Teachings</a></li>
            <li><a href="chants.html" id="chants-link">Chants</a></li>
            <li class="nav-logo"><img src="VBVLogo.png" alt="Virginia Bouddha Vihar Logo"></li>
            <li><a href="events.html" id="events-link">Events</a></li>
            <li><a href="dharma-talk.html" id="dharma-talk-link">Dharma Talk</a></li>
            <li><a href="donate.html" id="donate-link">Donate</a></li>
            <li><a href="contact.html" id="contact-link">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
    document.getElementById('navbar-placeholder').innerHTML = navbarContent;
  
    // Highlight the current page in the navbar
    highlightCurrentPage();
  }
  
// Load the common footer
function loadFooter() {
    const footerContent = `
      <footer>
        <p>
        Copyright © 2024 Dibya Barua | 
        <a href="mailto:info@virginiabouddhavihar.org">Contact Us</a> | 
          Virginia Bouddha Vihar, Established 2011 | 
          Developed by <a href="https://dibyabarua.com" target="_blank">Dibya Barua</a> 
          <br>
          9313 Backlick Road, Fort Belvoir, VA 22060
        </p>
      </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerContent;
  }
  
  

  // Highlight the current page in the navbar
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.split("/").pop(); // Get the current file name (e.g., index.html)
    
    const pageLinks = {
      'index.html': document.getElementById('home-link'),
      'about.html': document.getElementById('about-link'),
      'teachings.html': document.getElementById('teachings-link'),
      'chants.html': document.getElementById('chants-link'),
      'events.html': document.getElementById('events-link'),
      'dharma-talk.html': document.getElementById('dharma-talk-link'),
      'donate.html': document.getElementById('donate-link'),
      'contact.html': document.getElementById('contact-link'),
    };
  
    if (pageLinks[currentPath]) {
      pageLinks[currentPath].classList.add('active');
    }
  }
  
  // Function to toggle the hamburger menu
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadHead();      // Load head content
    loadNavbar();    // Load the navbar into the placeholder
    loadFooter();    // Load the footer into the placeholder
  });
  
