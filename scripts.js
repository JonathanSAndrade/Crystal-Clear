// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.getElementById('navigation');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            navigation.classList.remove('active');
        }
    }

    // Expose function to global scope
    window.scrollToSection = scrollToSection;

    // FAQ toggle functionality
    function toggleFaq(element) {
        const faqItem = element.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs first
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            if (answer) answer.style.display = 'none';
            if (icon) icon.textContent = '+';
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = faqItem.querySelector('.faq-icon');
            if (answer) answer.style.display = 'block';
            if (icon) icon.textContent = '−';
        }
    }

    // Add click events to FAQ questions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            toggleFaq(this);
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .procedure-item, .benefit-item, .testimonial-card');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If the element is in the viewport
            if(position.top < window.innerHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize elements for animation
    document.querySelectorAll('.service-card, .procedure-item, .benefit-item, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check
    animateOnScroll();

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
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
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // WhatsApp button 
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Ensure the link works properly
            console.log('WhatsApp button clicked');
        });
    }
});