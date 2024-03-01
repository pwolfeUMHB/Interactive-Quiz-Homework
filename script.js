function calculateScore() {
    let score = 0;
    // Example scoring logic for one question
        if (document.getElementById('correctAnswer1').checked) {
            score += 20;
        }
        if (document.getElementById('correctAnswer2').checked) {
            score += 20;
        }
        if (document.getElementById('correctAnswer3').checked) {
            score += 20;
        }
        if (document.getElementById('correctAnswer4').checked) {
            score += 20;
        }
    
        if (document.getElementById('whichApplyCorrectAnswer1').checked) {
            score += 6.666666667;
        }
        if (document.getElementById('whichApplyCorrectAnswer2').checked) {
            score += 6.666666666;
        }
        if (document.getElementById('whichApplyCorrectAnswer3').checked) {
            score += 6.666666667;
        }

        if (document.getElementById('whichApplyinCorrectAnswer1').checked) {
            score -= 6.666666667;
        }
        if (document.getElementById('whichApplyinCorrectAnswer2').checked) {
            score -= 6.666666666;
        }
        if (document.getElementById('whichApplyinCorrectAnswer3').checked) {
            score -= 6.666666667;
        }

    document.getElementById('Grade').textContent = "Your score is: " + score;
}