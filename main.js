// Global variables
const input = document.querySelector('.input');
const countBtn = document.querySelector('.count-button');
const result = document.querySelector('.result');

// Event listeners
countBtn.addEventListener('click', countVowels);

function countVowels() {
    let vowelCount = 0;

    const stringSplit = input.value.split('');

    for (const letter of stringSplit) {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            vowelCount++;
        }
    }

    if (vowelCount == 1) {
        result.textContent = `There is ${vowelCount} vowel`;
    } else {
        result.textContent = `There are ${vowelCount} vowels`;
    }

    input.value = '';

}