# Interactive Quiz Homework

## Objective
Create an interactive quiz using HTML, CSS, and JavaScript, focusing on conditional statements and loops.

## Requirements

- **HTML**: Construct the quiz with questions, options (radio buttons for multiple-choice, checkboxes for true/false), and a submit button.

- **CSS**: Style your quiz for a better user experience. Include styles for the quiz container, questions, and feedback messages.

- **JavaScript**: Implement logic to:
  - Calculate the score based on correct answers.
  - Use loops to iterate through questions.
  - Dynamically display the score and feedback using `.textContent`.

## Deliverables
Submit the following files:
- `quiz.html`: The quiz structure.
- `style.css`: Styles for the quiz.
- `script.js`: Logic to run the quiz and display results.

## Basic Code Outline

### HTML, CSS, & JS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ...
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="quizContainer">
        <form id="quizForm">
            ...
            <input type="button" value="Submit" onclick="calculateScore()">
        </form>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```html
### CSS (`style.css`)
```css
body {
    font-family: Arial, sans-serif;
}

#quizContainer {
    width: 60%;
    margin: auto;
    padding: 20px;
}

label {
    margin-right: 10px;
}

input[type=button] {
    margin-top: 20px;
}
```css
### JavaScript (`script.js`)

```javascript
function calculateScore() {
    let score = 0;
    // Example scoring logic for one question
    if (document.getElementById('js3').checked) {
        score++;
    }
    document.getElementById('result').textContent = "Your score is: " + score;
}
```javascript
