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
