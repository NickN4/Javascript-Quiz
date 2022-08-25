var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var finishQuiz = false;
var question; 

currentQuestion = 0;
score = 100;
const questions = [
    {
        question: "Where did the first Marine Corps recruitments begin?",
        A: "Camp Lejeune",
        B: "The White House",
        C: "In towns",
        D: "Tun Tavern",
        correct: "D"
    },
    {
        question: "Who did the Marines fight and won fame?",
        A: "Pirates",
        B: "Spainish",
        C: "Germans",
        D: "British",
        correct: "A"
    },
    {
        question: "What part of the branch is the Marine Core?",
        A: "Department of Army",
        B: "Department of the Navy",
        C: "Department of the Airforce",
        D: "It is its own branch",
        correct: "B"
    },
    {
        question: "What was the Marines bloodiest battle?(most deaths in Marine Corp's history?",
        A: "Korean War, Battle of Chosin Reservoir",
        B: "Battle of Tripoli",
        C: "World War I, Battle of Belleau Wood",
        D: "Vietnam war, Tet Offensive",
        correct: "C"
    },
    {
        question: "How do you greet a Marine?",
        A: "RAH",
        B: "Good Moring, sir",
        C: "What's up",
        D: "Hey",
        correct: "A"
    },
    {
        question: "Who is the first to fight in a war/conflict?",
        A: "The Army",
        B: "The Navy",
        C: "The Marines",
        D: "The Airforce",
        correct: "C"
    },
    {
        question: "Which Marine Regiment is not allowed back on US soil?",
        A: "5th Regiment",
        B: "4th Regiment",
        C: "3rd Regiment",
        D: "1st Regiment",
        correct: "B"
    },
    {
        question: "What branch has the oldest hymm?",
        A: "The Marines",
        B: "The Navy",
        C: "The Army",
        D: "The Airforce",
        correct: "A"
    },
    {
        question: "What nickname is given to Marines?",
        A: "Leatherneck",
        B: "Devil Dog",
        C: "Jarhead",
        D: "All of the Above ",
        correct: "D"
    },
    {
        question: "What is the Marine Corps motto?",
        A: "OOHRAH",
        B: "The Few, The Proud",
        C: "Semper Fidelis",
        D: "First to Fight",
        correct: "C"
    }
]

function startGame() {
    finishQuiz = false;
    timerCount = 100;
    startButton.disabled = true;
    renderQuestions()
    startTimer()
}

function setScore() {

    startButton.disabled = false
}

function startTimer() {
    timer = setInterval(function () {
        
        timerElement.textContent = timerCount;
        if (timerCount !== 0) {
            timerCount--;
            if (finishQuiz && timerCount > 0) {
                clearInterval(timer);
                setScore();
            }
        }
    }, 1000);
}

function renderQuestions() {
    var viewHighscore = document.getElementsByClassName("viewHighscore");
    viewHighscore[0].setAttribute("style", "visibility: hidden");
    var title = document.getElementsByClassName("title");
    title[0].setAttribute("style", "visibility: hidden");
    var brief = document.getElementsByClassName("brief");
    brief[0].setAttribute("style", "visibility: hidden");
    var startButton = document.getElementsByClassName("start-button");
    startButton[0].setAttribute("style", "visibility: hidden");
    questions.textContent = question;

}

startButton.addEventListener("click", startGame);



