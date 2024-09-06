// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    // Basic validation
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thank you for your message!';
      formMessage.style.color = 'green';
      
      // Here you can add code to send the form data to a server
      // For now, just clear the form
      document.getElementById('contactForm').reset();
    }
  });

  
