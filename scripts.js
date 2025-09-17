// Menu toggle functionality
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navigation').classList.toggle('active');
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navigation').classList.remove('active');
    }
}

// FAQ toggle functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
    
    const icon = element.querySelector('.faq-icon');
    icon.textContent = faqItem.classList.contains('active') ? '−' : '+';
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Portfolio slider functionality
let currentSlide = 0;

function changeSlide(direction) {
    // This is a simplified version since we only have one slide in the example
    // In a real implementation, you would have multiple slides and change them
    alert('Em uma implementação real, isso mudaria para o slide ' + (currentSlide + direction + 1));
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .procedure-item, .benefit-item, .testimonial-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If the element is in the viewport
        if(position.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.querySelectorAll('.service-card, .procedure-item, .benefit-item, .testimonial-card').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check
window.addEventListener('load', animateOnScroll);

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navigation = document.getElementById('navigation');
    const menuToggle = document.getElementById('menuToggle');
    
    if (navigation.classList.contains('active') && 
        !navigation.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        navigation.classList.remove('active');
    }
});

// Add active class to navigation links when scrolling
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});