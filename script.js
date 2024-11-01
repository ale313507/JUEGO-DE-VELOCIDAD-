let timer;
let startTime;
let score = 0;

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('clearHistoryButton').addEventListener('click', clearHistory);

function startGame() {
    const userName = document.getElementById('userName').value || 'Desconocido';
    score = 0;
    showTarget();
}

function showTarget() {
    const target = document.getElementById('target');
    target.style.display = 'block';
    const randomX = Math.random() * (250); // Width of the game area - target width
    const randomY = Math.random() * (250); // Height of the game area - target height
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;

    // Start the timer for 1 second
    startTime = Date.now();
    timer = setTimeout(() => {
        alert('¡Se acabó el tiempo! Intenta de nuevo.');
        target.style.display = 'none';
    }, 1000); // 1 segundo
}

document.getElementById('target').addEventListener('click', () => {
    clearTimeout(timer);
    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
    score += 1; // Incrementar la puntuación
    saveToHistory(timeTaken, document.getElementById('userName').value || 'Desconocido');
    showTarget(); // Mostrar el siguiente objetivo
});

function saveToHistory(timeTaken, userName) {
    const historyList = document.getElementById('history');
    const timestamp = new Date().toLocaleString();
    const li = document.createElement('li');
    li.textContent = `Puntuación: ${score} (Realizado por: ${userName} a las ${timestamp}, Tiempo: ${timeTaken}s)`;
    historyList.appendChild(li);
}

function clearHistory() {
    document.getElementById('history').innerHTML = '';
}




