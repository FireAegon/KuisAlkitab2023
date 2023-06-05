function startQuiz() {
  window.location.href = "quiz.html";
}

const questions = [
  {
    question: "Berapa murid Tuhan Yesus?",
    choices: ["12", "30", "2", "Tidak ada"],
    answer: 0
  },
  {
    question: "Apa arti kalimat Apa arti dari ” Eli-Eli lama sabakhtani “, yang diucapkan Yesus ketika disalibkan?",
    choices: ["Tuhan ku, Allah ku, mengapa engkau menjemputku aku", "Tuhan ku, Tuhan ku, mengapa engkau meninggalkan aku", "Sudah selesai", "Allah ku, Allah ku, mengapa engkau meninggalkan aku"],
    answer: 3
  },
  {
    question: "Siapakah Nama Murid yang paling dikasihi Yesus?",
    choices: ["Yudas Iskariot", "Yunus", "Yohanes", "Petrus"],
    answer: 2
  },
  {
    question: "Dimanakah Tuhan Yesus dibaptis?",
    choices: ["Sungai Nil", "Sungai Ucil", "Kolam Renang Labersa", "Sungai Yordan"],
    answer: 3
  },
  {
    question: "Siapakah yang membawa bangsa Israel keluar dari Tanah Mesir?",
    choices: ["Musa", "Yunus", "Yohanes", "Yakub"],
    answer: 0
  },
  {
    question: "Siapakah yang mengadili Tuhan Yesus ketika hendak disalib?",
    choices: ["Raja Herodes", "Pontius Pilatus", "Barnabas", "Daud"],
    answer: 1
  },
  {
    question: "Siapakah murid yang di juluki Tuhan Yesus sebagai penjala manusia?",
    choices: ["Musa", "Yunus", "Yohanes", "Petrus"],
    answer: 3
  },
  {
    question: "Dimanakah Bahterah Nuh kandas?",
    choices: ["Gunung Ararat", "Gunung Sinai", "Bukit Golgota", "Bukit Sion"],
    answer: 0
  },
  {
    question: "Sapa nama ayah Simson?",
    choices: ["Asamoah", "Yakub", "Yudas Iskariot", "Manoah"],
    answer: 3
  },
  {
    question: "Siapakah nama murid Tuhan Yesus yang berdoa di Taman Getsemani?",
    choices: ["Yudas, Yakobus, Petrus", "Yohanes, Simon, Petrus", "Yohanes, Yakub, Yudas", "Yohanes, Yakobus, Petrus"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = questions[currentQuestion].question;

  choicesElement.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    const choice = questions[currentQuestion].choices[i];
    const button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("data-index", i);
    button.addEventListener("click", selectAnswer);
    choicesElement.appendChild(button);
  }
}

function selectAnswer(event) {
  const selectedChoiceIndex = parseInt(event.target.getAttribute("data-index"));
  const correctChoiceIndex = questions[currentQuestion].answer;
  const choices = document.querySelectorAll("#choices button");

  choices.forEach((choice) => {
    choice.disabled = true;
  });

  if (selectedChoiceIndex === correctChoiceIndex) {
    event.target.classList.add("correct");
    score++;
  } else {
    event.target.classList.add("wrong");
    choices[correctChoiceIndex].classList.add("correct");
  }

  setTimeout(() => {
    choices.forEach((choice) => {
      choice.disabled = false;
      choice.classList.remove("correct", "wrong");
    });

    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 1000);
}

function displayResult() {
  const quizElement = document.getElementById("quiz");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const totalQuestionsElement = document.getElementById("totalQuestions");
  const resetButton = document.getElementById("resetButton");

  quizElement.style.display = "none";
  resultElement.style.display = "block";
  scoreElement.textContent = score;
  totalQuestionsElement.textContent = questions.length;

  setTimeout(() => {
    resetButton.style.opacity = 1;
  }, 1000);
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;

  const quizElement = document.getElementById("quiz");
  const resultElement = document.getElementById("result");

  quizElement.style.display = "block";
  resultElement.style.display = "none";

  displayQuestion();
}

displayQuestion();
