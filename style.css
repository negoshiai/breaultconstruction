:root {
    --primary-color: #0A2240; /* Navy Blue */
    --secondary-color: #F8F9FA; /* Off-White */
    --accent-color: #C5A05C; /* Gold/Ochre */
    --text-color: #333;
    --light-gray: #e9ecef;
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Lato', sans-serif;
    --header-height: 80px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
}

body {
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-color);
    background-color: var(--secondary-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--primary-color);
    line-height: 1.2;
}

h1 { font-size: 3.5rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 1.5rem; }

a {
    text-decoration: none;
    color: var(--accent-color);
    transition: color 0.3s ease;
}

a:hover {
    color: var(--primary-color);
}

.section-padding {
    padding: 80px 0;
}

.section-title {
    margin-bottom: 20px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px auto;
}

.text-center {
    text-align: center;
}

/* --- BUTTONS --- */
.btn {
    display: inline-block;
    padding: 12px 28px;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    border: 2px solid transparent;
}

.btn-primary {
    background-color: var(--accent-color);
    color: #fff;
    border-color: var(--accent-color);
}

.btn-primary:hover {
    background-color: #b18f50;
    border-color: #b18f50;
    color: #fff;
    transform: translateY(-2px);
}

.btn-nav {
    background-color: var(--accent-color);
    color: #fff !important;
    padding: 8px 20px;
}
.btn-nav:hover {
    background-color: #b18f50;
    color: #fff !important;
}


/* --- HEADER --- */
#main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    height: var(--header-height);
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

#main-header.scrolled {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
}
#main-header.scrolled .logo,
#main-header.scrolled #main-nav a {
    color: var(--primary-color);
}
#main-header:not(.scrolled) .logo,
#main-header:not(.scrolled) #main-nav a {
    color: #fff;
}
#main-header:not(.scrolled) .logo:hover,
#main-header:not(.scrolled) #main-nav a:hover {
    color: var(--accent-color);
}

.logo span {
    font-weight: 600;
    color: var(--accent-color);
    display: block;
    font-size: 0.8rem;
    line-height: 0.8;
}

#main-nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
}

#main-nav a {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1rem;
}

#hamburger-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
}
#main-header.scrolled #hamburger-btn {
    color: var(--primary-color);
}

/* --- HERO SECTION --- */
#hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover;
    position: relative;
    display: flex;
    align-items: center;
    text-align: left;
    color: #fff;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    opacity: 0.8;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

#hero h1 {
    color: #fff;
    margin-bottom: 20px;
}

#hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 90%;
}

/* --- ABOUT SECTION --- */
#about {
    background-color: #fff;
}
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-text .subtitle {
    font-family: var(--font-heading);
    color: var(--accent-color);
    font-weight: 600;
    margin-bottom: 20px;
}
.about-text p {
    margin-bottom: 20px;
}

.milestones {
    display: flex;
    gap: 40px;
    margin-top: 30px;
}
.milestone span.year {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-color);
    line-height: 1;
}
.milestone p {
    margin: 0;
    font-weight: 700;
}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* --- SERVICES SECTION --- */
#services {
    background: var(--secondary-color) url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" fill="%23e0e0e0" fill-opacity="0.4" fill-rule="evenodd"/></svg>');
}
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.service-card {
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    border: 1px solid var(--light-gray);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

/* Structural Corner Motif */
.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-top: 4px solid var(--accent-color);
    border-left: 4px solid var(--accent-color);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.4s ease;
}

.service-card:hover::before {
    opacity: 1;
    transform: scale(1);
}

.service-icon {
    font-size: 3rem;
    color: var(--accent-color);
    margin-bottom: 20px;
}

.service-card h3 {
    margin-bottom: 15px;
}

/* --- PROJECTS SECTION --- */
#projects {
    background-color: #fff;
}
.project-slider {
    width: 100%;
    padding: 20px 0 60px 0; /* Space for pagination */
}

.project-slide {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 400px;
}

.project-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}
.project-slide:hover img {
    transform: scale(1.05);
}

.project-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(10, 34, 64, 0.9), transparent);
    padding: 40px 20px 20px 20px;
    color: #fff;
}
.project-info h4 {
    font-size: 1.3rem;
    color: #fff;
}
.project-info p {
    color: var(--accent-color);
    font-weight: 700;
}

/* Swiper custom styles */
.swiper-pagination-bullet-active {
    background: var(--accent-color) !important;
}
.swiper-button-next, .swiper-button-prev {
    color: var(--accent-color) !important;
    background-color: rgba(255,255,255,0.8);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.swiper-button-next::after, .swiper-button-prev::after {
    font-size: 1.5rem !important;
    font-weight: bold;
}

/* --- CONTACT SECTION --- */
#contact {
    background-color: var(--primary-color);
    color: #fff;
    background-image: linear-gradient(rgba(10, 34, 64, 0.95), rgba(10, 34, 64, 0.95)), url('https://www.transparenttextures.com/patterns/az-subtle.png');
}
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
    align-items: flex-start;
}
.contact-info h2 { color: #fff; }
.contact-info p { color: var(--light-gray); margin-bottom: 30px; }
.contact-info ul { list-style: none; }
.contact-info li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 1.1rem;
}
.contact-info i { color: var(--accent-color); width: 20px; text-align: center;}

.contact-form {
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.form-group { width: calc(50% - 10px); }
.form-group.full-width { width: 100%; }

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 1rem;
}
.contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(197, 160, 92, 0.3);
}
.contact-form textarea { min-height: 120px; resize: vertical; }

/* --- FOOTER --- */
#main-footer {
    background-color: #061629;
    color: var(--light-gray);
    padding: 60px 0 20px 0;
}
.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}
.footer-grid .logo { color: #fff; }
.footer-grid h4 { color: #fff; font-size: 1.2rem; margin-bottom: 20px; }
.footer-grid ul { list-style: none; }
.footer-grid ul li { margin-bottom: 10px; }
.footer-grid a { color: var(--light-gray); }
.footer-grid a:hover { color: var(--accent-color); }
.footer-social a {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 15px;
}
.footer-bottom {
    text-align: center;
    border-top: 1px solid #1a2f4a;
    padding-top: 20px;
    font-size: 0.9rem;
}

/* --- ANIMATIONS --- */
.animate-in, .animate-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-in.visible, .animate-section.visible {
    opacity: 1;
    transform: translateY(0);
}
.hero-content .animate-in:nth-child(2) { transition-delay: 0.2s; }
.hero-content .animate-in:nth-child(3) { transition-delay: 0.4s; }

.services-grid .animate-section:nth-child(2) { transition-delay: 0.2s; }
.services-grid .animate-section:nth-child(3) { transition-delay: 0.4s; }

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 992px) {
    h1 { font-size: 2.8rem; }
    h2 { font-size: 2.2rem; }
    .about-grid, .contact-wrapper { grid-template-columns: 1fr; }
    .about-image { margin-top: 30px; }
}

@media (max-width: 768px) {
    :root { --header-height: 70px; }
    .section-padding { padding: 60px 0; }
    #main-nav {
        display: none;
        position: fixed;
        top: var(--header-height);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--header-height));
        background-color: #fff;
        flex-direction: column;
        padding-top: 40px;
    }
    #main-nav.active {
        display: flex;
    }
    #main-nav ul {
        flex-direction: column;
        gap: 0;
        width: 100%;
    }
    #main-nav li {
        width: 100%;
        text-align: center;
    }
    #main-nav a {
        color: var(--primary-color) !important;
        display: block;
        padding: 20px;
        font-size: 1.2rem;
    }
    .btn-nav {
        margin: 20px auto;
        display: block;
        width: 80%;
    }
    #hamburger-btn {
        display: block;
    }
    #main-header:not(.scrolled) #hamburger-btn {
        color: #fff;
    }

    h1 { font-size: 2.5rem; }
    .about-grid { gap: 30px; }
    .form-group { width: 100%; }
    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .footer-social { margin-top: 20px; }
}
