document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
    const numbersContainer = document.getElementById('lotto-numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('lotto-number');
        circle.textContent = number;
        circle.style.backgroundColor = getNumberColor(number);
        numbersContainer.appendChild(circle);
    });
}

function getNumberColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa';    // Gray
    return '#b0d840';      // Green
}
