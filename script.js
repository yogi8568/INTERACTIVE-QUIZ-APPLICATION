const quizData = [
    { question: "Which of the following is not a programming language?", options: ["Python", "Java", "HTML", "SQL"], answer: "HTML" },
    { question: "Which language is used for web development?", options: ["Python", "Java", "Javascript", "C++"], answer: "Javascript" },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Program Unit", "Central Processor Unit", "Central Processing Utility"], answer: "Central Processing Unit" },
    { question: "Which of the following is an example of an operating system?", options: ["Microsoft Word", "Linux", "Google Chrome", "Adobe Photoshop"], answer: "Linux" },
    { question: "What is the function of RAM in a computer?", options: ["To store data permanently", "To store data temporarily", "To process data", "To manage input and output operations"], answer: "To store data temporarily" },
    { question: "Which of the following is a web browser?", options: ["Google", "Bing", "Facebook", "Firefox"], answer: "Firefox" },
    { question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Microsoft" },
    { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"], answer: "Uniform Resource Locator" },
    { question: "Which of the following is a storage device?", options: ["Monitor", "Keyboard", "Mouse", "Hard Drive"], answer: "Hard Drive" },
    { question: "Which of the following is an example of cloud storage?", options: ["Dropbox", "SSD", "USB Flash Drive", "External Hard Drive"], answer: "Dropbox" }
];


let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(button);
    });
    nextButton.style.display = "none";
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestionIndex].answer;
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        nextButton.style.display = "block";
        nextButton.onclick = loadQuestion;
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.textContent = `Quiz Completed! Your score: ${score}/${quizData.length}`;
    optionsEl.innerHTML = "";
    nextButton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", loadQuestion);
