// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Auto-close mobile menu when clicking on menu items
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
});

// Scroll to top function for logo click
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optimized header scroll effect with throttling
let scrollTimeout;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            scrollTimeout = null;
        }, 10);
    }
}, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simplified hero animations - no opacity changes
gsap.from('.hero-section h1', {
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.hero-section p', {
    y: 15,
    duration: 0.8,
    delay: 0.4,
    stagger: 0.1,
    ease: 'power2.out'
});

gsap.from('.integration-badge', {
    scale: 0.95,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

gsap.from('.hero-section .cta-button', {
    scale: 0.95,
    duration: 0.8,
    delay: 0.8,
    ease: 'back.out(1.7)'
});

// Workflow steps scroll animation
const steps = document.querySelectorAll('.step-item');

steps.forEach((step) => {
    gsap.to(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleClass: 'visible',
            onEnter: () => {
                gsap.from(step.querySelector('.step-visual'), {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.2
                });
            }
        }
    });
});

// Testimonial cards animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 70%'
    },
    y: 20,
    duration: 0.8,
    stagger: 0.2
});

// Why RVO section animation - No opacity changes
gsap.from('.value-prop-card', {
    scrollTrigger: {
        trigger: '.why-rvo',
        start: 'top 85%'
    },
    y: 15,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});

gsap.from('.why-rvo h2', {
    scrollTrigger: {
        trigger: '.why-rvo',
        start: 'top 80%'
    },
    y: 20,
    duration: 0.8
});

gsap.from('.why-rvo h3', {
    scrollTrigger: {
        trigger: '.why-rvo h3',
        start: 'top 80%'
    },
    y: 20,
    duration: 0.8
});

// Workflow Chart Animation
const workflowSteps = document.querySelectorAll('.workflow-step');

workflowSteps.forEach((step) => {
    gsap.to(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleClass: 'visible',
            onEnter: () => {
                gsap.from(step.querySelector('.workflow-node'), {
                    scale: 0.8,
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'back.out(1.7)'
                });
            }
        }
    });
});

// Workflow Result Banner Animation
gsap.from('.workflow-result', {
    scrollTrigger: {
        trigger: '.workflow-result',
        start: 'top 80%'
    },
    y: 30,
    scale: 0.95,
    duration: 0.8,
    ease: 'power2.out'
});

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

// Optimized scroll progress with throttling
let progressTimeout;
window.addEventListener('scroll', () => {
    if (!progressTimeout) {
        progressTimeout = requestAnimationFrame(() => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            progressBar.style.transform = `scaleX(${progress / 100})`;
            progressTimeout = null;
        });
    }
}, { passive: true });

// Calendly integration
function openCalendly() {
    window.open('https://calendly.com/nischalpakhrin', '_blank');
}

// Clean background animations
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .hero-section {
            background-size: 200% 200%;
            animation: gradientShift 15s ease infinite;
        }
    `;
    document.head.appendChild(style);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

