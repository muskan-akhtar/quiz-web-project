const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Multi Language"],
        answer: 0
    },
    {
        question: "Which tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>"],
        answer: 1
    },
    {
        question: "Which tag is used to insert an image?",
        options: ["<img>", "<image>", "<picture>"],
        answer: 0
    },
    {
        question: "What does the <p> tag represent?",
        options: ["Paragraph", "Page", "Picture"],
        answer: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "font", "class"],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<url>"],
        answer: 1
    },
    {
        question: "Which of the following is a self-closing tag?",
        options: ["<div>", "<img>", "<p>"],
        answer: 1
    },
    {
        question: "Which tag is used to define the title of a document?",
        options: ["<head>", "<title>", "<meta>"],
        answer: 1
    },
    {
        question: "What does the <br> tag do?",
        options: ["Creates a line break", "Creates a new paragraph", "Creates a new line"],
        answer: 0
    },
    {
        question: "Which tag is used to define a form in HTML?",
        options: ["<form>", "<input>", "<fieldset>"],
        answer: 0
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
