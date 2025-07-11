//Process Section animention code 
const steps = document.querySelectorAll('.step');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

steps.forEach(step => {
    step.style.animationPlayState = 'paused'; // pause by default
    observer.observe(step);
});

