
const questions = [
    {
        question: "What does `===` operator do in JavaScript?",
        options: [
            "Checks for value only",
            "Checks for both value and type",
            "Assigns a value"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: [
            "String",
            "Number",
            "Both A and B"
        ],
        answer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction() {}",
            "create function myFunction() {}",
            "function: myFunction() {}"
        ],
        answer: 0
    },
    {
        question: "What is the correct way to write a conditional statement in JavaScript?",
        options: [
            "if (x = 5) {}",
            "if (x == 5) {}",
            "if (x === 5) {}",
            "Both B and C"
        ],
        answer: 3
    },
    {
        question: "Which method is used to parse a string into an integer in JavaScript?",
        options: [
            "parseFloat()",
            "parseInt()",
            "convertToInt()"
        ],
        answer: 1
    },
    {
        question: "What will the following code return: Boolean(0)?",
        options: [
            "true",
            "false",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What is the output of the following code: console.log(typeof null);?",
        options: [
            '"object"',
            '"null"',
            '"undefined"'
        ],
        answer: 0
    },
    {
        question: "How can you add a comment in JavaScript?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "Both A and B"
        ],
        answer: 2
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: [
            "append()",
            "concat()",
            "join()"
        ],
        answer: 1
    }
];


let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Display the current question
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = ""; // Clear previous options

    // Create buttons for each option
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index); // Check the answer when clicked
        optionsElement.appendChild(button);
    });

    // Reset feedback and next button visibility
    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const feedback = document.getElementById("feedback");
    const isCorrect = selectedIndex === questions[currentQuestionIndex].answer;

    // Show feedback
    feedback.style.display = "block";
    feedback.textContent = isCorrect ? "Correct!" : "Wrong!";

    // Disable buttons after answering
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Increment score if correct
    if (isCorrect) {
        score++;
    }

    // Show the next button
    document.getElementById("next-button").style.display = "block";
}

// Handle the next button click to go to the next question
document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showCelebration();
    }
};

function showCelebration() {
    const resultMessage = document.createElement("div");
    resultMessage.style.textAlign = "center";

    const hurrayMessage = document.createElement("h2");
    hurrayMessage.textContent = "Congratulations! 🎉";
    resultMessage.appendChild(hurrayMessage);

    // Display the user's score
    resultMessage.innerHTML += `<p>Your score: ${score} out of ${questions.length}</p>`;

    // Create a button to take another quiz
    const anotherQuizButton = document.createElement("button");
    anotherQuizButton.textContent = "Would you like to take another quiz?";
    anotherQuizButton.onclick = resetQuiz; // Redirect back to quiz options page
    resultMessage.appendChild(anotherQuizButton);

    // Clear the quiz container and show the result
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("quiz-container").appendChild(resultMessage);
}

function resetQuiz() {
    // Redirect back to the starting page with quiz options
    window.location.href = "index.html#options"; // Ensure this matches your intended navigation
}

// Start the quiz by displaying the first question
displayQuestion();
