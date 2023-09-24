function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}
Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.checkOptWithAns = function (answer) {
    if (this.getQuestionByIndex().answer == answer) {
        this.score++;
    }
    this.questionIndex++;
}
Quiz.prototype.isEnded = function () {
    return this.questionIndex == this.questions.length;
}

// 1. Javascript supports --> Functions, XHTML, CSS, HTML-- > Functions
// 2. Which language used for styling web pages-- > HTML, JQuery, CSS, XML-- > CSS
// 3. Which is not a Javascript Framework-- > Python, JQuery, Django, NodeJS-- > Django
// 4. Which is used to connect to Database-- > PHP, HTML, JS, All-- > PHP
// 5. Javascript is a-- > Language, Programming Language, Development, All-- > Programming Language
//Creating questions and quiz object
let questions = [
    new Question(
        "Javascript supports",
        ["Functions", "XHTML", "CSS", "HTML"],
        "Functions"
    ),
    new Question(
        "Which language is used for styling web pages",
        ["HTML", "JQuery", "CSS", "XML"],
        "CSS"
    ),
    new Question(
        "Which is not a Javascript framework",
        ["Python", "JQuery", "Django", "NodeJS"],
        "Django"
    ),
    new Question(
        "Which is used to connect to Database",
        ["PHP", "HTML", "JS", "All"],
        "PHP"
    ),
    new Question(
        "Javascript is a",
        ["Language", "Programming Language", "Development", "All"],
        "ProgrammingLanguage"
    )
];
let quiz = new Quiz(questions);


//Function to load quiz questions and updating it in html
function loadQuestions() {

    if (quiz.isEnded()) {
        showResult();
    } else {
        let questionText = document.getElementById("question");
        questionText.innerText = quiz.getQuestionByIndex().text;

        let options = quiz.getQuestionByIndex().options;
        for (i = 0; i < options.length; i++) {
            let ele = document.getElementById("choice" + i);
            ele.innerText = options[i];
            handleClickOnBtn("btn" + i, options[i]);
        }

        let footer = document.getElementById("progress");
        footer.innerText = `Question ${quiz.questionIndex + 1} of ${questions.length}`;
    }

};


//Function to handle option clicks
function handleClickOnBtn(id, option) {

    let buttonEle = document.getElementById(id);
    buttonEle.onclick = function () {
        quiz.checkOptWithAns(option);
        loadQuestions();
    }

}


loadQuestions();


//Function to display the result
function showResult() {
    let result = `<h1>Result</h1>
                  <h2 id="score"> Your score: ${quiz.score}. And mark precentage is ${quiz.score / questions.length * 100}`;
    let quizEle = document.getElementById("quiz");
    quizEle.innerHTML = result;
}