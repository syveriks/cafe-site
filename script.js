
// Плавное появление элементов при прокрутке

const elements = document.querySelectorAll(
    '.menu-card, .about, .hero-content, .hero-image'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(element => {
    element.classList.add('hidden');
    observer.observe(element);
});

// Кнопка меню

document.querySelectorAll('a[href="#menu"]').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Пользователь открыл меню MOKKA COFFEE');
    });
});

// Текущий год в подвале

const footerText = document.querySelector('footer p:last-child');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} MOKKA COFFEE`;
}
