let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide'); 
const quizOptions = document.querySelector('.quiz-options');


function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex++;

    if (currentSlideIndex < slides.length) {
        slides[currentSlideIndex].classList.add('active');
    } else {
        
        document.querySelector('.slider').style.display = 'none'; 
        quizOptions.style.display = 'block'; 
        clearInterval(slideInterval); 
    }
}


const slideInterval = setInterval(showNextSlide, 3000);


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
    window.location.href = url; 
}


function showQuizEndScreen(score, totalQuestions) {
    const resultMessage = document.createElement('div');
    resultMessage.style.textAlign = "center";

    const hurrayMessage = document.createElement('h2');
    hurrayMessage.textContent = "Congratulations! 🎉";
    resultMessage.appendChild(hurrayMessage);

    
    resultMessage.innerHTML += `<p>Your score: ${score} out of ${totalQuestions}</p>`;

    
    const anotherQuizButton = document.createElement("button");
    anotherQuizButton.textContent = "Would you like to take another quiz?";
    anotherQuizButton.onclick = () => {
        window.location.href = 'index.html#options'; 
    };
    resultMessage.appendChild(anotherQuizButton);

    document.body.innerHTML = ''; 
    document.body.appendChild(resultMessage); 
}


if (slides.length > 0) {
    slides[currentSlideIndex].classList.add('active'); 
}


function checkForQuizOptions() {
    if (window.location.hash === '#options') {
        document.querySelector('.slider').style.display = 'none';
        quizOptions.style.display = 'block'; 
    }
}


document.addEventListener('DOMContentLoaded', function () {
    checkForQuizOptions(); 
});
