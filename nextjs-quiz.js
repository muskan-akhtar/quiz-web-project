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
