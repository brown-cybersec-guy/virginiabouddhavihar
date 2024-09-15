// Injecting Navbar into all pages
document.getElementById('navbar-placeholder').innerHTML = `
  <header>
    <nav>
      <ul class="navbar">
        <li><a href="index.html" id="home-link">Home</a></li>
        <li><a href="about.html" id="about-link">About Us</a></li>
        <li><a href="teachings.html" id="teachings-link">Teachings</a></li>
        <li><a href="events.html" id="events-link">Events</a></li>

        <!-- Logo in the middle -->
        <li class="nav-logo">
          <img src="VBVLogo.png" alt="Virginia Bouddha Vihar Logo">
        </li>

        <li><a href="dharma-talk.html" id="dharma-talk-link">Dharma Talk</a></li>
        <li><a href="donate.html" id="donate-link">Donate</a></li>
        <li><a href="contact.html" id="contact-link">Contact</a></li>
      </ul>
    </nav>
  </header>
`;
