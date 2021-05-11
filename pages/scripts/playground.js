let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let difficulty = urlParams.get("difficulty");
let questions = [];
let questionIndex = 0;
let selectedOption = null;
let questionsAmount = 20;
let progress = 0;
let numberOfCorrects = 0;

function getQuestions() {
  fetch(
    `https://opentdb.com/api.php?amount=${questionsAmount}&category=9&type=multiple&difficulty=${difficulty}`
  ).then((response) => {
    let loader = document.querySelector(".loader-container");
    let progress = document.querySelector("#progress");
    response.json().then((results) => {
      let questions_ = results.results;
      let options = [];
      questions = questions_;
      let currentQuestion = questions[questionIndex];
      options.push(currentQuestion.correct_answer);
      options = options.concat(currentQuestion.incorrect_answers);
      loader.style.display = "none";
      progress.style.display = "block";
      addQuestionTemplate(
        createQuestionTemplate(currentQuestion.question, options)
      );
      questionIndex++;
    });
  });
}
getQuestions();
function createQuestionTemplate(question, options) {
  let questionBackground = document.createElement("div");

  selectedOption = null;
  questionBackground.setAttribute("id", "question-background");
  options = shuffle(options);
  let optionsHTML = "";
  options = options.map((option, i) => {
    optionsHTML += `
      <div class="option" onclick="optionClicked(this)">
      <label>${i + 1}</label>
      <p>${option}</p>
      </div>
          `;
  });
  questionBackground.innerHTML = `
    <h1 id="question"><span>${questionIndex + 1}.</span> ${question}</h1>    
    <div id="options">
    ${optionsHTML}        
    </div>
    <button id="next-btn" class="main-btn" onclick="nextClicked()" disabled>Next Question</button>
    `;
  return questionBackground;
}
function nextClicked() {
  if (selectedOption === null) {
    return;
  }
  let correctAnswer = questions[questionIndex - 1].correct_answer;
  let options_ = document.querySelectorAll(".option p");
  let timeoutDelay = 0;
  if (selectedOption === correctAnswer) {
    numberOfCorrects++;
  } else {
    options_.forEach((o) => {
      if (o.innerText === correctAnswer) {
        let nextButton = document.querySelector("#next-btn");
        document.querySelector("#options").style.pointerEvents = "none";
        let parent = o.parentElement;
        nextButton.style.visibility = "hidden";
        parent.style.outline = "4px dashed lightgreen";
        parent.style.animation = "correct-ans-animation .3s infinite ease";
        timeoutDelay = 1000;
      }
    });
  }
  setTimeout(() => {
    if (questionIndex === questionsAmount) {
      create_Add_Result(Math.round((numberOfCorrects / questionsAmount) * 100));
      return;
    }
    let currentQuestion = questions[questionIndex];
    let options = [];
    let progressValue = document.querySelector("#progress-value");
    let progressLabel = document.querySelector("#progress label");

    options.push(currentQuestion.correct_answer);
    options = options.concat(currentQuestion.incorrect_answers);
    addQuestionTemplate(
      createQuestionTemplate(currentQuestion.question, options)
    );
    questionIndex++;
    progress = Math.round((questionIndex / questionsAmount) * 100);
    progressValue.style.width = progress + "%";
    progressLabel.innerText = "Progress: " + progress + "%";
  }, timeoutDelay);
}
function addQuestionTemplate(questionTemplate) {
  let questionBackground = document.querySelector("#question-background");
  if (questionBackground !== null) questionBackground.remove();
  document.body.appendChild(questionTemplate);
}
function shuffle(array) {
  return array.sort(() => {
    return 0.5 - Math.random();
  });
}
function optionClicked(e) {
  let options = document.querySelectorAll(".option");
  let nextButton = document.querySelector("#next-btn");
  nextButton.removeAttribute("disabled");
  options.forEach((option) => {
    option.removeAttribute("id");
  });
  e.setAttribute("id", "seleted-option");
  selectedOption = e.querySelector("p").innerText;
}
function create_Add_Result(score) {
  let questionBackground = document.querySelector("#question-background");
  let progress = document.querySelector("#progress");
  if (questionBackground !== null) questionBackground.remove();
  let result = document.createElement("div");
  result.setAttribute("id", "result-container");
  result.innerHTML = `
  <h1>Thanks for comming! Your score is: </h1>
  <p>${score}%</p>
  `;
  document.body.appendChild(result);
  progress.style.display = "none";
}
