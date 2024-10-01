let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide'); // Ensure this matches your HTML structure
const quizOptions = document.querySelector('.quiz-options');

// Function to show the next slide
function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex++;

    if (currentSlideIndex < slides.length) {
        slides[currentSlideIndex].classList.add('active');
    } else {
        // Once all slides are shown, hide the slider and show quiz options
        document.querySelector('.slider').style.display = 'none'; // Hide slider
        quizOptions.style.display = 'block'; // Show quiz options
        clearInterval(slideInterval); // Stop the slide interval
    }
}

// Set an interval to automatically show the next slide every 3 seconds
const slideInterval = setInterval(showNextSlide, 3000);

// Function to start the quiz based on the selected type
function startQuiz(quizType) {
    let url;
    switch (quizType) {
        case 'html':
            url = 'html-quiz.html';
            break;
        case 'react':
            url = 'react-quiz.html';
            break;
        case 'nextjs':
            url = 'nextjs-quiz.html';
            break;
        case 'javascript':
            url = 'javascript-quiz.html';
            break;
    }
    window.location.href = url; // Redirect to the selected quiz page
}

// Function to display the end screen of the quiz
function showQuizEndScreen(score, totalQuestions) {
    const resultMessage = document.createElement('div');
    resultMessage.style.textAlign = "center";

    const hurrayMessage = document.createElement('h2');
    hurrayMessage.textContent = "Congratulations! 🎉";
    resultMessage.appendChild(hurrayMessage);

    // Display the user's score
    resultMessage.innerHTML += `<p>Your score: ${score} out of ${totalQuestions}</p>`;

    // Create a button to take another quiz
    const anotherQuizButton = document.createElement("button");
    anotherQuizButton.textContent = "Would you like to take another quiz?";
    anotherQuizButton.onclick = () => {
        window.location.href = 'index.html#options'; // Redirect to quiz options with #options hash
    };
    resultMessage.appendChild(anotherQuizButton);

    document.body.innerHTML = ''; // Clear the body content
    document.body.appendChild(resultMessage); // Append the result message
}

// Start by displaying the first slide if available
if (slides.length > 0) {
    slides[currentSlideIndex].classList.add('active'); // Show the first slide
}

// Function to check if #options is in the URL and show the quiz options if it is
function checkForQuizOptions() {
    if (window.location.hash === '#options') {
        document.querySelector('.slider').style.display = 'none'; // Hide the intro slider
        quizOptions.style.display = 'block'; // Show the quiz options
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', function () {
    checkForQuizOptions(); // Check the URL hash on page load
});
