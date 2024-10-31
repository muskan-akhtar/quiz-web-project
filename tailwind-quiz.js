const questions = [
    {
        question: "What does Tailwind CSS primarily focus on?",
        options: ["Utility-first styling", "Component-based styling", "Class-based styling"],
        answer: 0
    },
    {
        question: "Which of the following is used to add margin in Tailwind CSS?",
        options: ["m-4", "margin-4", "p-4"],
        answer: 0
    },
    {
        question: "How do you apply padding on all sides in Tailwind CSS?",
        options: ["p-4", "pd-4", "padding-4"],
        answer: 0
    },
    {
        question: "Which class is used for setting text color to blue in Tailwind CSS?",
        options: ["text-blue-500", "color-blue-500", "bg-blue-500"],
        answer: 0
    },
    {
        question: "Which utility class applies a flex container in Tailwind CSS?",
        options: ["display-flex", "flex", "container-flex"],
        answer: 1
    },
    {
        question: "What is the purpose of 'justify-center' in Tailwind CSS?",
        options: ["Centers items along the main axis", "Centers items along the cross axis", "Centers items along both axes"],
        answer: 0
    },
    {
        question: "Which class is used to add a background color in Tailwind CSS?",
        options: ["bg-color", "background", "bg"],
        answer: 2
    },
    {
        question: "Which class adds rounded corners in Tailwind CSS?",
        options: ["round", "border-radius", "rounded"],
        answer: 2
    },
    {
        question: "How do you make text bold in Tailwind CSS?",
        options: ["font-bold", "font-weight-bold", "text-bold"],
        answer: 0
    },
    {
        question: "Which class is used for setting width to full in Tailwind CSS?",
        options: ["w-100", "width-full", "w-full"],
        answer: 2
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
