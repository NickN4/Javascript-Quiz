var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;

var currentQuestion = 0;
score = 100;
const questions = [

    {
        question: "Where did the first Marine Corps recruitments begin?",
        answer: {
            A: "Camp Lejeune",
            B: "The White House",
            C: "In towns",
            D: "Tun Tavern",
        },
        correct: "D"
    },
    {
        question: "Who did the Marines fight and won fame?",
        answer: {
            A: "Pirates",
            B: "Spainish",
            C: "Germans",
            D: "British",
        },
        correct: "A"
    },
    {
        question: "What part of the branch is the Marine Core?",
        answer: {
            A: "Department of Army",
            B: "Department of the Navy",
            C: "Department of the Airforce",
            D: "It is its own branch",
        },
        correct: "B"
    },
    {
        question: "What was the Marines bloodiest battle?(most deaths in Marine Corp's history?",
        answer: {
            A: "Korean War, Battle of Chosin Reservoir",
            B: "Battle of Tripoli",
            C: "World War I, Battle of Belleau Wood",
            D: "Vietnam war, Tet Offensive",
        },
        correct: "C"
    },
    {
        question: "How do you greet a Marine?",
        answer: {
            A: "RAH",
            B: "Good Moring, sir",
            C: "What's up",
            D: "Hey",
        },
        correct: "A"
    },
    {
        question: "Who is the first to fight in a war/conflict?",
        answer: {
            A: "The Army",
            B: "The Navy",
            C: "The Marines",
            D: "The Airforce",
        },
        correct: "C"
    },
    {
        question: "Which Marine Regiment is not allowed back on US soil?",
        answer: {
            A: "5th Regiment",
            B: "4th Regiment",
            C: "3rd Regiment",
            D: "1st Regiment",
        },
        correct: "B"
    },
    {
        question: "What branch has the oldest hymm?",
        answer: {
            A: "The Marines",
            B: "The Navy",
            C: "The Army",
            D: "The Airforce",
        },
        correct: "A"
    },
    {
        question: "What nickname is given to Marines?",
        answer: {
            A: "Leatherneck",
            B: "Devil Dog",
            C: "Jarhead",
            D: "All of the Above ",
        },
        correct: "D"
    },
    {
        question: "What is the Marine Corps motto?",
        answer: {
            A: "OOHRAH",
            B: "The Few, The Proud",
            C: "Semper Fidelis",
            D: "First to Fight",
        },
        correct: "C"
    }
]

function renderQuestions() {
    document.querySelector(".question").textContent = questions[currentQuestion].question;
    document.querySelector(".A").textContent = "A. " + questions[currentQuestion].answer.A;
    document.querySelector(".B").textContent = "B. " + questions[currentQuestion].answer.B;
    document.querySelector(".C").textContent = "C. " + questions[currentQuestion].answer.C;
    document.querySelector(".D").textContent = "D. " + questions[currentQuestion].answer.D;

    document.querySelector("button").setAttribute("style", "width: 200px; height: 43px; margin-left: 47%;");
    document.querySelector(".B").setAttribute("style", "width: 200px; height: 43px; margin-left: 47%");
    document.querySelector(".C").setAttribute("style", "width: 200px; height: 43px; margin-left: 47%");
    document.querySelector(".D").setAttribute("style", "width: 200px; height: 43px; margin-left: 47%");
}


function setScore() {
    finalScore = document.createElement("p");
    intialPrompt = document.createElement("p");
    intialText = document.createElement("input");
    container = document.createElement("aside");

    var brief = document.getElementsByClassName("brief");
    brief[0].setAttribute("style", "visibility: visible")


    document.querySelector(".A").remove();
    document.querySelector(".B").remove();
    document.querySelector(".C").remove();

    document.querySelector(".questions").setAttribute("class", "results");
    document.querySelector(".question").setAttribute("class", "title");
    document.querySelector(".D").setAttribute("class", "submit");

    intialText.setAttribute("style", "text");
    intialText.setAttribute("class", "intial-text");
    finalScore.setAttribute("style", "margin-right:50px")
    container.setAttribute("style", " align-items: center; margin-left:46%; width: 310px; flex-wrap: wrap; flex-direction:row;")
    D.setAttribute("style", "height: 25px;")

    document.querySelector(".title").textContent = "Quiz Complete";
    document.querySelector(".submit").textContent = "Submit";
    document.querySelector(".brief").textContent = "Answers: Q1: D.Tun Tavern, Q2: A.Pirates, Q3: B.Department of the Navy, Q4: C.World War I, Battle of Belleau Wood, Q5: A.RAH, Q6: C.The Marines, Q7: B.4th Regiment, Q8: A.The Marines, Q9: D.All of the Above, Q10: C.Semper Fidelis"
    finalScore.textContent = "Your score is " + score + ".";
    intialPrompt.textContent = "Enter intials"

    document.querySelector(".title").after(finalScore);
    finalScore.after(container)
    container.appendChild(intialPrompt);
    container.appendChild(intialText);
    container.appendChild(document.querySelector(".submit"));

}

function viewHighscore() {
    document.querySelector("section").remove()

    data = JSON.parse(localStorage.getItem("scores"));
    scoreboard = document.createElement("section");
    scoreboardH = document.createElement("h1");
    restartButton = document.createElement("button");
    clearBoardButton = document.createElement("button");

    scoreboard.setAttribute("class", "scoreboard");
    restartButton.setAttribute("class", "restart");
    clearBoardButton.setAttribute("class", "Clear scoreboard");

    restartButton.setAttribute("style", "margin-left: 48%")
    scoreboardH.setAttribute("style","justify-content: center; margin-left: 45%; font-size: 40px ")
    clearBoardButton.setAttribute("style","height: 45px; margin-left: 48%")
    

    scoreboardH.textContent = "Scoreboard"
    restartButton.textContent = "Restart"
    clearBoardButton.textContent = "Clear Scoreboard"

    document.querySelector("main").appendChild(scoreboard);
    scoreboard.appendChild(scoreboardH);
    if (data != null) {
        for (i = 0, l = 1; i < data.length; i++, l++) {
            currentScore = document.createElement("p");
            currentScore.textContent = l + ". " + data[i][0] + "- " + data[i][1];
            scoreboard.appendChild(currentScore);
        }
    }
    scoreboard.appendChild(restartButton);
    scoreboard.appendChild(clearBoardButton);
}

document.querySelector("main").addEventListener("click", function (event) {
    switch (event.target.getAttribute("class")) {
        case "start-button":
            timerCount = 100;

            B = document.createElement("button");
            C = document.createElement("button");
            D = document.createElement("button");
            userChoice = document.createElement("article")

            document.querySelector("section").setAttribute("class", "questions");
            document.querySelector(".title").setAttribute("class", "question");
            document.querySelector(".start-button").setAttribute("class", "A");
            var Highscore = document.getElementsByClassName("Highscore");
            Highscore[0].setAttribute("style", "visibility: hidden");
            var brief = document.getElementsByClassName("brief");
            brief[0].setAttribute("style", "visibility: hidden")

            B.setAttribute("class", "B");
            C.setAttribute("class", "C");
            D.setAttribute("class", "D");
            userChoice.setAttribute("style", "visibility: hidden")

            document.querySelector(".questions").appendChild(B);
            document.querySelector(".questions").appendChild(C);
            document.querySelector(".questions").appendChild(D);
            document.querySelector(".questions").appendChild(userChoice);


            renderQuestions()

            timerInterval = setInterval(function () {
                if (score !== 0) {
                    score--;
                    document.querySelector(".timer-count").textContent = "Timer: " + score;
                } else {
                    document.querySelector(".timer-count").textContent = "Timer: " + score;
                    clearInterval(timerInterval);
                    setScore();
                }
            }, 1000)
            break;
        case 'A':
        case 'B':
        case 'C':
        case 'D':
            if (event.target.getAttribute("class") == questions[currentQuestion].correct) {
                document.querySelector("article").textContent = "Correct";
            } else {
                document.querySelector("article").textContent = "Incorrect";
                if (score > 10) {
                    score = score - 10;
                } else {
                    score = 0;
                }
            }
            document.querySelector("article").setAttribute("style", "visibility: visible");
            setTimeout(function () { document.querySelector("article").setAttribute("style", "visibility: hidden"); }, 1000)

            if (currentQuestion < 9) {
                currentQuestion++;
                renderQuestions();
            } else {
                clearInterval(timerInterval);
                document.querySelector(".timer-count").textContent = "Timer: " + score;
                Highscore = document.getElementsByClassName("Highscore");
                Highscore[0].setAttribute("style", "visibility: visible");
                setScore()
            }
            break;
        case 'submit':
            if (document.querySelector(".intial-text").value === "") {
                document.querySelector("article").textContent = "Enter inials";
            } else if (document.querySelector(".intial-text").value.length > 3) {
                document.querySelector("article").textContent = "Intials cannot be greater than 3 letters";
            } else if (!/^[a-zA-Z\s.,]+$/.test(document.querySelector(".intial-text").value)) {
                document.querySelector("article").textContent = "Intials can only be letters"
            } else {
                tempScore = [document.querySelector(".intial-text").value.toUpperCase(), score];

                if (localStorage.getItem("scores") == null) {
                    localStorage.setItem("scores", JSON.stringify([tempScore]));
                } else {
                    addScore = JSON.parse(localStorage.getItem("scores"));
                    addScore.push(tempScore);
                    localStorage.setItem("scores", JSON.stringify(addScore));
                }
                viewHighscore();
            }
            if (document.querySelector("article") !== null) {
                document.querySelector("article").setAttribute("style", "visibility: visible");
                setTimeout(function () { document.querySelector("article").setAttribute("style", "visibility: hidden"); }, 1000)
            }
            break;
        case 'restart':
            window.location.reload();
            break;
        case 'Clear scoreboard':
            localStorage.removeItem("scores");
            viewHighscore();
            break;
    }
}

)




