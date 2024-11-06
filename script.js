// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 
        icon.getAttribute('data-lucide') === 'menu' ? 'x' : 'menu'
    );
    lucide.createIcons();
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');
const formInputs = contactForm.querySelectorAll('input, textarea');

const showError = (input, message) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    input.classList.add('error');
};

const clearError = (input) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    input.classList.remove('error');
};

formInputs.forEach(input => {
    input.addEventListener('input', () => clearError(input));
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (isValid) {
        // Handle form submission
        console.log('Form submitted:', Object.fromEntries(new FormData(contactForm)));
        contactForm.reset();
    }
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();