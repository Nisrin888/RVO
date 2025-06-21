// Initialize GSAP ScrollTrigger with performance optimizations
gsap.registerPlugin(ScrollTrigger);

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.duration > 16) {
            console.warn(`Long task detected: ${entry.name} took ${entry.duration}ms`);
        }
    });
});

try {
    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
} catch (e) {
    // Performance Observer not supported
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});



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
    
    // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-modal');
    
    // Get all workflow images
    const workflowImages = document.querySelectorAll('.workflow-story-image');
    
    // Add click event to each workflow image
    workflowImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('show'), 10);
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }
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

steps.forEach((step, index) => {
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

// Module cards hover effect
const moduleCards = document.querySelectorAll('.module-card');

moduleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
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

workflowSteps.forEach((step, index) => {
    gsap.to(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleClass: 'visible',
            onEnter: () => {
                // Animate the node with a slight delay
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
    // You can replace this with actual Calendly widget integration
    // For now, it opens in a new window
    window.open('https://calendly.com/your-link', '_blank');
}

// Co-pilot button functionality
const coPilotBtn = document.querySelector('.co-pilot-btn');
coPilotBtn.addEventListener('click', function() {
    // Add chat functionality here
    const message = 'Hi! I\'m your AI co-pilot. How can I help you automate your recruitment pipeline today?';
    
    // Create a simple chat popup
    const chatPopup = document.createElement('div');
    chatPopup.className = 'fixed bottom-20 right-6 bg-border rounded-lg p-4 shadow-lg max-w-sm z-50';
    chatPopup.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-accent-1 font-bold">RVO Assistant</h3>
            <button onclick="this.parentElement.parentElement.remove()" class="text-muted hover:text-white">×</button>
        </div>
        <p class="text-sm mb-3">${message}</p>
        <button onclick="openCalendly()" class="bg-primary hover:bg-accent-1 text-white text-sm px-4 py-2 rounded transition-all duration-300 w-full">
            Schedule a Demo
        </button>
    `;
    
    // Remove any existing popup
    const existingPopup = document.querySelector('.fixed.bottom-20.right-6');
    if (existingPopup) existingPopup.remove();
    
    document.body.appendChild(chatPopup);
});

// Clean background animations
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    // Add subtle gradient animation
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

// Module click animations and interactions
moduleCards.forEach((card, index) => {
    card.addEventListener('click', function() {
        const moduleName = this.querySelector('h3').textContent;
        const moduleDesc = this.querySelector('p').textContent;
        
        gsap.to(this, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                // Create module detail popup
                const popup = document.createElement('div');
                popup.className = 'fixed inset-0 bg-secondary/90 backdrop-blur-md z-50 flex items-center justify-center p-6';
                popup.innerHTML = `
                    <div class="bg-border rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        <div class="flex justify-between items-start mb-6">
                            <h2 class="text-3xl font-bold text-accent-1">${moduleName}</h2>
                            <button onclick="this.closest('.fixed').remove()" class="text-muted hover:text-white text-2xl">×</button>
                        </div>
                        <p class="text-lg mb-6">${moduleDesc}</p>
                        <div class="space-y-4">
                            <h3 class="text-xl font-bold text-primary">Key Features:</h3>
                            <ul class="list-disc list-inside space-y-2 text-muted">
                                <li>Advanced AI algorithms for optimal performance</li>
                                <li>Real-time synchronization across all platforms</li>
                                <li>Customizable workflows to match your process</li>
                                <li>Detailed analytics and reporting</li>
                            </ul>
                            <button onclick="openCalendly()" class="mt-6 bg-primary hover:bg-accent-1 text-white px-6 py-3 rounded-lg transition-all duration-300">
                                Learn More in a Demo
                            </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(popup);
                
                // Close on outside click
                popup.addEventListener('click', (e) => {
                    if (e.target === popup) popup.remove();
                });
            }
        });
    });
});

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

