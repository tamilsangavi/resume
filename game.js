let randomNumber;

function startNewGame() {
    randomNumber = generateRandomFourDigitNumber();
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    console.log(randomNumber);  // For testing purposes. Remove or comment out in production.
}

function generateRandomFourDigitNumber() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const guess = document.getElementById('guess').value;
    const resultElement = document.getElementById('result');

    if (guess === randomNumber) {
        resultElement.textContent = 'Congratulations! You guessed the correct number!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Sorry, that is not correct. Try again!';
        resultElement.style.color = 'red';
    }
});

// Start a new game when the page loads
window.onload = startNewGame;
