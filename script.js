/* ========== Menu Icon Navbar ========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ========== Scroll Sections Active Link ========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ========== Sticky Navbar ========== */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========== Remove Navbar when click link ========== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ========== Dark Light Mode ========== */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/* ========== Scroll Reveal Animations ========== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .projects-container, .resume-row, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/* ========== Typing Effect ========== */
const typed = new Typed('.multiple-text', {
    strings: ['CSE Student', 'Web Developer', 'Problem Solver', 'Python Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ========== Project Filter Logic ========== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectBoxes.forEach(box => {
            if (filter === 'all' || box.getAttribute('data-category') === filter) {
                box.style.display = 'flex';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

/* ========== Form Submission Mockup ========== */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Deressa will get back to you soon!');
    form.reset();
});