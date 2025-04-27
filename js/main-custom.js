// Typing animation for the hero section
document.addEventListener("DOMContentLoaded", function () {
    const typingAnimationElement = document.getElementById('typing-animation');
    if (!typingAnimationElement) return;

    const typingTexts = [
        'Web Developer  ',
        'Software Engineer  ',
        'UI/UX Designer  ',
        'Problem Solver  '
    ];

    function playTypingAnimation(text) {
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                typingAnimationElement.textContent += text[i];
            }, i * 200);
        }
        setTimeout(() => {
            typingAnimationElement.textContent = '';
            playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
        }, text.length * 200);
    }

    playTypingAnimation(typingTexts[0]);
});