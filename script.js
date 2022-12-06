//  SET OF QUESTIONS
const data = [
    {
        id: 1,
        question:
            "Which of the following is a non metal that remains liquid at room temperature?",
        choices: [
            { value: "Phosphorous", isClicked: false },
            { value: "Bromine", isClicked: false },
            { value: "Chlorine", isClicked: false },
            { value: "Helium", isClicked: false },
        ],
        correctAnswer: "Bromine",
    },
    {
        id: 2,
        question:
            "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        choices: [
            { value: "Oxygen", isClicked: false },
            { value: "Hydrogen sulphide", isClicked: false },
            { value: "Carbon dioxide", isClicked: false },
            { value: "Nitrogen", isClicked: false },
        ],
        correctAnswer: "Hydrogen sulphide",
    },
    {
        id: 3,
        question:
            "Chlorophyll is a naturally occurring chelate compound in which central metal is",
        choices: [
            { value: "copper", isClicked: false },
            { value: "calcium", isClicked: false },
            { value: "iron", isClicked: false },
            { value: "magnesium", isClicked: false },
        ],
        correctAnswer: "magnesium",
    },
    {
        id: 4,
        question: "Which of the following is used in pencils",
        choices: [
            { value: "Phosphorous", isClicked: false },
            { value: "Graphite", isClicked: false },
            { value: "Silicon", isClicked: false },
            { value: "Charcoal", isClicked: false },
        ],
        correctAnswer: "Graphite",
    },
    {
        id: 5,
        question:
            "Which of the following metals forms an amalgam with other metals?",
        choices: [
            { value: "Zinc", isClicked: false },
            { value: "Tin", isClicked: false },
            { value: "Lead", isClicked: false },
            { value: "Mercury", isClicked: false },
        ],
        correctAnswer: "Mercury",
    },
];

let score = 0;

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const questionSets = document.querySelector(".question-sets");

//----- START QUIZ -----

const startBtn = document.querySelector(".start--btn");

startBtn.addEventListener("click", () => {
    firstPage.classList.toggle("start");
    secondPage.classList.toggle("start");
});

//  -------- DISPLAYING SETS EVERY QUESTION ---------
data.forEach(quest => {
    const trivia = document.createElement("div");
    const questionTrivia = document.createElement("h3");
    const hr = document.createElement("hr");

    questionTrivia.textContent = quest.question;

    hr.classList.add("hr");
    questionTrivia.classList.add("question--text");

    // ----- CREATING BUTTONS EVERY CHOICES! -----
    const choices = document.createElement("div");

    quest.choices.forEach(choice => {
        const chooseBtn = document.createElement("button");

        choices.appendChild(chooseBtn);
        chooseBtn.textContent = choice.value;

        if (choice.isClicked === false) {
            chooseBtn.classList.add("choice--btn");
            chooseBtn.classList.remove("checked");
        } else if (choice.isClicked === true) {
            chooseBtn.classList.add("checked");
            chooseBtn.classList.remove("choice--btn");
        }

        chooseBtn.addEventListener("click", e => {
            if (choice.isClicked === false) {
                chooseBtn.classList.add("checked");
                chooseBtn.classList.remove("choice--btn");
                choice.isClicked = true;
            } else if (choice.isClicked === true) {
                chooseBtn.classList.add("choice--btn");
                chooseBtn.classList.remove("checked");
                choice.isClicked = false;
            }
            if (e.target.textContent === quest.correctAnswer) {
                score++;
            }

            console.log(choice.isClicked);
        });
    });

    questionSets.appendChild(trivia);
    trivia.append(questionTrivia, choices, hr);
});

// ----- CHECK ANSWER -----

const checkAnswer = document.querySelector(".check--ans");
const result = document.querySelector(".result");

let takeQuiz = true;

checkAnswer.addEventListener("click", () => {
    if (takeQuiz === true) {
        result.textContent = `Your score is ${score}/5!`;
        checkAnswer.textContent = "Play Again";
        takeQuiz = false;
    } else if (takeQuiz === false) {
        (result.textContent = ""), (score = 0);
        checkAnswer.textContent = "Check Answer";
        takeQuiz = true;
        location.reload();
    }
});
