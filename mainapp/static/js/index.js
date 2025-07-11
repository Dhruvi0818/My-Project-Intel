// how it work section  
    const stepBoxes = document.querySelectorAll('.step-box');

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

  stepBoxes.forEach(step => {
    step.style.animationPlayState = 'paused';
    observer.observe(step);
  });
 