function calculateScore() {
    let score = 0;
    
    // Question 1: What is??
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    
    // Answer is not determined yet so it will be blank
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        

        if (selectedValue === 'const') {
            score++;
        }
    }
    //Question 2: Java questions
    const q20ptions = document.querySelectorAll('input[name="q2"]:checked');
    if  (q20ptions.length === 1 && q20ptions[0].value === "true") {
        score++;
    }

    const finalScore = (score / 2) *  100;
    
    document.getElementById('result').textContent = "Your score is: " + finalScore + "%";
}
