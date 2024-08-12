const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const indicators = document.querySelector('.indicators');
let currentIndex = 0;

// Initialize indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => moveToSlide(index));
    indicators.appendChild(indicator);
});

const updateIndicators = () => {
    document.querySelectorAll('.indicators div').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
};

const moveToSlide = (index) => {
    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${100 * currentIndex}%)`;
    updateIndicators();
};

nextBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
});

prevBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
});
