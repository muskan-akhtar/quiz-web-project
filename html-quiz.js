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

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = ""; 

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const feedback = document.getElementById("feedback");
    const isCorrect = selectedIndex === questions[currentQuestionIndex].answer;

    feedback.style.display = "block";
    feedback.textContent = isCorrect ? "Correct!" : "Wrong!";

    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
    }

    document.getElementById("next-button").style.display = "block";
}

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
    resultMessage.innerHTML += `<p>Your score: ${score} out of ${questions.length}</p>`;

    const anotherQuizButton = document.createElement("button");
    anotherQuizButton.textContent = "Would you like to take another quiz?";
    anotherQuizButton.onclick = resetQuiz; 
    resultMessage.appendChild(anotherQuizButton);

    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("quiz-container").appendChild(resultMessage);
}

function resetQuiz() {
window.location.href = "index.html#options"; 
}

displayQuestion();
