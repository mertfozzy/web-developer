function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer ;
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0; //1.soru (sayaç)
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex]; //kaçıncı sorudan başlasın veya devam etsin
}

Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex; //sorular bittiyse quiz bitmiş
}

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;

}

var q1 = new Question("Which one ise a script language?", ["C#", "Javascript", "Java", "Python"], "Javascript");
var q2 = new Question("Which language can be use to control Arduino?", ["C/C++", "Javascript", "Typescript", "React"] , "C/C++");
var q3 = new Question("Which langueage is using for iOS programming?", ["Objective-C", "Java", "C++", "Kotlin"], "Objective-C");

var questions = [q1, q2, q3];

var quiz = new Quiz(questions);


loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    }
    else{
        document.querySelector("#question").textContent = quiz.getQuestion().text; //soruyu alıp htmlde h5 içine koy
        var choices = quiz.getQuestion().choices;

        for(var i=0; i<choices.length; i++){ //şıkları butonlara koyma
            //console.log(choices[i]);
            
            var element = document.querySelector("#choice"+i); //htmlde idlerdeki sayıları değiştirdik
            element.innerHTML = choices[i];

            guess("btn"+i, choices[i]);//hangi şık hangi butona değer göndericek
        }

        showProgress();


    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);//şimdiki soru için cevabı aldık
        loadQuestion();//sonraki soruyu yüklettik
    }
}

function showScore() {
    var html = `<h2> Score : </h2><h4> ${quiz.score} </h4>`;

    document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
    var questionNumber = quiz.questionIndex+1;
    var totalQuestionNumber = quiz.questions.length;
    document.querySelector("#progress").innerHTML = `Question : ${questionNumber} of ${totalQuestionNumber}`;
}

