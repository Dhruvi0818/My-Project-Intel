 //faqs js code 
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.parentElement;

      // Close all other open items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('open');
        }
      });

      // Toggle the clicked one
      currentItem.classList.toggle('open');
    });
  });
