// JavaScript for Multilingual Tabs 
function showTips(language) {
    const allContents = document.querySelectorAll('.tips-content');
    const allTabs = document.querySelectorAll('.tab-btn');
    allContents.forEach(content => content.style.display = 'none');
    allTabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(language).style.display = 'block';
    event.currentTarget.classList.add('active');
}


// js code for the FAQS 
const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Close all open answers first
        document.querySelectorAll('.faq-answer').forEach((ans) => {
            ans.style.display = 'none';
        });

        // Remove active styles from all
        questions.forEach((q) => q.classList.remove('active'));

        // Open the clicked one if it was not already open
        const answer = btn.nextElementSibling;
        if (!btn.classList.contains('active')) {
            answer.style.display = 'block';
            btn.classList.add('active');
        }
    });
});

