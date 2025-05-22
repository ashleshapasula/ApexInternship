const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "Python", "C", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    correct: "Da Vinci"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
  const q = quizData[currentQuestion];
  const result = document.getElementById("result");

  if (answer === q.correct) {
    score++;
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! Correct: ${q.correct}`;
    result.style.color = "red";
  }

  // Disable options
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.onclick = null;
    btn.style.pointerEvents = "none";
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h3>You scored ${score} out of ${quizData.length} 🎉</h3>`;
  }
}

loadQuestion();

// API: Get Random Joke
function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} 😄 ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to fetch joke. Try again!";
    });
}