document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sticky Header ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Navigation ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('main-nav');
    const navLinks = navMenu.querySelectorAll('a');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Optional: change icon to 'X'
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- 3. Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-in, .animate-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible to save resources
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // --- 4. Swiper.js Project Slider Initialization ---
    const swiper = new Swiper('.project-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        
        // Responsive breakpoints
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Autoplay
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

});
