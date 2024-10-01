const questions = [
    {
        question: "What is React?",
        options: [
            "A programming language",
            "A JavaScript library for building user interfaces",
            "A CSS framework"
        ],
        answer: 1
    },
    {
        question: "What is the main feature of React?",
        options: [
            "Virtual DOM",
            "Two-way data binding",
            "Template-based rendering"
        ],
        answer: 0
    },
    {
        question: "How do you create a component in React?",
        options: [
            "function MyComponent() {}",
            "const MyComponent = () => {}",
            "Both A and B"
        ],
        answer: 2
    },
    {
        question: "What does props stand for in React?",
        options: [
            "Properties",
            "Propsitions",
            "Property methods"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of state in a React component?",
        options: [
            "To manage data that can change over time",
            "To create components",
            "To handle events"
        ],
        answer: 0
    },
    {
        question: "Which lifecycle method is called after a component is mounted?",
        options: [
            "componentDidMount",
            "componentWillMount",
            "componentDidUpdate"
        ],
        answer: 0
    },
    {
        question: "What hook is used to manage state in functional components?",
        options: [
            "useEffect",
            "useState",
            "useReducer"
        ],
        answer: 1
    },
    {
        question: "How do you handle events in React?",
        options: [
            "Using event handlers",
            "Using onClick attributes",
            "Both A and B"
        ],
        answer: 2
    },
    {
        question: "What does ReactDOM.render() do?",
        options: [
            "It updates the virtual DOM",
            "It renders a React element into the DOM",
            "It creates a new React component"
        ],
        answer: 1
    },
    {
        question: "What is JSX?",
        options: [
            "A syntax extension for JavaScript",
            "A templating engine",
            "A library for animations"
        ],
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
