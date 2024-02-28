function calculateScore() {
    let score = 0;
    // Example scoring logic for one question
    if (document.getElementById('js3').checked) {
        score++;
    }
    document.getElementById('result').textContent = "Your score is: " + score;
}