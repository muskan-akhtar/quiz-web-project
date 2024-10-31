const questions = [
    {
        question: "What is Next.js?",
        options: [
            "A framework for building server-rendered React applications",
            "A CSS library",
            "A JavaScript database"
        ],
        answer: 0
    },
    {
        question: "Which of the following features does Next.js provide?",
        options: [
            "Static site generation",
            "Server-side rendering",
            "Both A and B"
        ],
        answer: 2
    },
    {
        question: "How do you create a new page in a Next.js application?",
        options: [
            "By creating a new JavaScript file in the pages directory",
            "By using a command in the terminal",
            "By modifying the next.config.js file"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of getStaticProps in Next.js?",
        options: [
            "To fetch data at build time for static generation",
            "To fetch data on the client-side",
            "To redirect users"
        ],
        answer: 0
    },
    {
        question: "What does the Link component do in Next.js?",
        options: [
            "It creates a hyperlink to an external website",
            "It navigates between pages in a Next.js application",
            "It manages user sessions"
        ],
        answer: 1
    },
    {
        question: "Which command is used to start a Next.js development server?",
        options: [
            "npm run dev",
            "next start",
            "npm start"
        ],
        answer: 0
    },
    {
        question: "How can you implement dynamic routing in Next.js?",
        options: [
            "By using the pages directory with square brackets",
            "By creating a custom server",
            "By modifying the next.config.js file"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of getServerSideProps in Next.js?",
        options: [
            "To fetch data on the client-side",
            "To fetch data at request time for server-side rendering",
            "To pre-render pages at build time"
        ],
        answer: 1
    },
    {
        question: "What file is used for global CSS styles in a Next.js project?",
        options: [
            "styles.css",
            "globals.css",
            "index.css"
        ],
        answer: 1
    },
    {
        question: "What is API Routes in Next.js?",
        options: [
            "A way to create serverless functions",
            "A way to manage user authentication",
            "A method to optimize images"
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
