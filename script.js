function calculateScore() {
    let score = 0;
    
    // Question 1: What is??
    const sliderValue = parseInt(document.getElementById('slider').value);
    
    // Answer is not determined yet so it will be blank
    if (sliderValue >= 10 && sliderValue<=20) {
        score++;
}

    //Question 2: Java questions
    const q20ptions = document.querySelectorAll('input[name="q2"]:checked');
    if  (q20ptions.length === 1 && q20ptions[0].value === "false") {
        score++;
    }
    document.getElementById(result).textContent = "Your score is: " + score + "";
}
