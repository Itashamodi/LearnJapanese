// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select elements for animation
    var hiraganaEmoji = document.querySelector('.hiragana-emoji');
    var learnJapaneseSection = document.querySelector('.learn-japanese-section');

    // Add animation on page load
    hiraganaEmoji.classList.add('animate-rotate');

    // Add animation on hover
    learnJapaneseSection.addEventListener('mouseover', function () {
        learnJapaneseSection.classList.add('animate-bounce');
    });

    learnJapaneseSection.addEventListener('mouseout', function () {
        learnJapaneseSection.classList.remove('animate-bounce');
    });
});
