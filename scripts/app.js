// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    window.scrollY > 50 
        ? header.classList.add('scrolled')
        : header.classList.remove('scrolled');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animations
ScrollReveal().reveal('.product-card', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.story-content, .contact-info', {
    delay: 200,
    distance: '30px',
    origin: 'left'
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will respond shortly.');
});