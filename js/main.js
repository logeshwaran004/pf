// Initialize EmailJS with your public key
emailjs.init("7Neidnpuu_2xUiHmA");

// Contact form handling with improved feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    emailjs.sendForm('service_tso6egk', 'template_za8l0i8', this)
        .then(function() {
            // Success feedback
            submitBtn.textContent = 'Sent Successfully!';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Error feedback
            submitBtn.textContent = 'Failed to Send';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
            console.error('Email Error:', error);
        });
});

// Mobile menu with smooth animation
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Enhanced typing animation with fade effects
// Initialize typing effect
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed-text', {
        strings: [
            'AI and Data Science Expert',
            'Deep Learning Specialist',
            'Computer Vision Engineer',
            'Machine Learning Researcher',
            'Agentic AI Innovator'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
        startDelay: 500,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });
});

// Scroll animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.services-list div, .hackathon, .work');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Add animation when element comes into view
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth < 768) {
                closemenu();
            }
        }
    });
});

// Tab switching functionality
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active-link");
    }
    document.getElementById(tabname).classList.add("active-tab");
}
