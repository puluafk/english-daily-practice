/* English Daily Practice – main logic */

const STORAGE_KEY = "englishDailyProgress_v1";

const state = {
  level: null,
  type: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  selected: null,
  answered: false,
  isDaily: false
};

// ---------- Progress & Stats ----------
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return {
    xp: 0,
    streak: 0,
    lastPracticeDate: null,
    levels: {
      beginner: { completed: 0, total: 40 },
      intermediate: { completed: 0, total: 36 },
      advanced: { completed: 0, total: 36 }
    },
    dailyCompletedToday: false
  };
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateStatsUI() {
  const p = loadProgress();
  document.getElementById("xp-count").textContent = p.xp;
  document.getElementById("streak-count").textContent = p.streak;

  ["beginner", "intermediate", "advanced"].forEach(lvl => {
    const pct = Math.min(100, Math.round((p.levels[lvl].completed / p.levels[lvl].total) * 100));
    document.getElementById(`progress-${lvl}`).style.width = pct + "%";
    document.getElementById(`progress-text-${lvl}`).textContent = pct + "%";
  });
}

function addXP(amount) {
  const p = loadProgress();
  p.xp += amount;
  saveProgress(p);
  updateStatsUI();
}

function updateStreak() {
  const p = loadProgress();
  const today = new Date().toDateString();
  if (p.lastPracticeDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (p.lastPracticeDate === yesterday.toDateString()) {
    p.streak += 1;
  } else {
    p.streak = 1;
  }
  p.lastPracticeDate = today;
  saveProgress(p);
  updateStatsUI();
}

function markLevelProgress(level, count) {
  const p = loadProgress();
  p.levels[level].completed = Math.min(
    p.levels[level].total,
    p.levels[level].completed + count
  );
  saveProgress(p);
  updateStatsUI();
}

// ---------- Navigation ----------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ---------- Home ----------
document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    state.level = card.dataset.level;
    state.isDaily = false;
    document.getElementById("level-title").textContent =
      state.level.charAt(0).toUpperCase() + state.level.slice(1);
    document.getElementById("level-subtitle").textContent = "Choose an exercise type";
    showScreen("screen-level");
  });
});

document.getElementById("btn-back-home").addEventListener("click", () => {
  showScreen("screen-home");
});

document.getElementById("btn-daily").addEventListener("click", () => {
  state.level = "intermediate";
  state.type = "quiz";
  state.isDaily = true;
  startExercise();
});

// ---------- Level menu ----------
document.querySelectorAll(".type-card").forEach(card => {
  card.addEventListener("click", () => {
    state.type = card.dataset.type;
    state.isDaily = false;
    startExercise();
  });
});

document.getElementById("btn-back-level").addEventListener("click", () => {
  showScreen("screen-level");
});

// ---------- Exercise logic ----------
function startExercise() {
  const pool = EXERCISES[state.level][state.type];
  state.questions = shuffle([...pool]).slice(0, state.isDaily ? 6 : 8);
  state.currentIndex = 0;
  state.score = 0;
  state.selected = null;
  state.answered = false;

  document.getElementById("exercise-type-label").textContent =
    state.isDaily ? "Daily Challenge" :
    state.type.charAt(0).toUpperCase() + state.type.slice(1);

  renderQuestion();
  showScreen("screen-exercise");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const body = document.getElementById("exercise-body");
  const total = state.questions.length;
  const idx = state.currentIndex + 1;

  document.getElementById("question-counter").textContent = `${idx} / ${total}`;
  document.getElementById("exercise-progress").style.width = ((idx - 1) / total * 100) + "%";

  state.selected = null;
  state.answered = false;
  document.getElementById("btn-check").disabled = true;
  document.getElementById("btn-check").classList.remove("hidden");
  document.getElementById("btn-next").classList.add("hidden");

  let html = "";

  if (q.type === "reading") {
    html += `<div class="reading-passage">${q.passage}</div>`;
  }

  html += `<div class="question-text">${q.question}</div>`;

  if (q.type === "mc" || q.type === "reading") {
    html += `<div class="options">`;
    q.options.forEach((opt, i) => {
      html += `<button class="option" data-index="${i}">${opt}</button>`;
    });
    html += `</div>`;
  } else if (q.type === "fill") {
    html += `<input type="text" class="fill-blank-input" id="fill-input" placeholder="Type your answer…" autocomplete="off" />`;
  }

  html += `<div id="feedback-area"></div>`;
  body.innerHTML = html;

  if (q.type === "mc" || q.type === "reading") {
    body.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (state.answered) return;
        body.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.selected = parseInt(btn.dataset.index, 10);
        document.getElementById("btn-check").disabled = false;
      });
    });
  } else {
    const input = document.getElementById("fill-input");
    input.addEventListener("input", () => {
      document.getElementById("btn-check").disabled = input.value.trim().length === 0;
    });
    input.focus();
  }
}

function checkAnswer() {
  if (state.answered) return;
  const q = state.questions[state.currentIndex];
  let isCorrect = false;

  if (q.type === "mc" || q.type === "reading") {
    isCorrect = state.selected === q.answer;

    document.querySelectorAll(".option").forEach((btn, i) => {
      btn.classList.add("disabled");
      if (i === q.answer) btn.classList.add("correct");
      if (i === state.selected && !isCorrect) btn.classList.add("wrong");
    });
  } else {
    const input = document.getElementById("fill-input");
    const userAnswer = input.value.trim().toLowerCase();
    const accepted = (q.accepted || [q.answer]).map(a => a.toLowerCase());
    isCorrect = accepted.includes(userAnswer);
    input.classList.add(isCorrect ? "correct" : "wrong");
    input.disabled = true;
  }

  if (isCorrect) state.score++;

  const feedback = document.getElementById("feedback-area");
  feedback.innerHTML = `
    <div class="feedback ${isCorrect ? "correct" : "wrong"}`;
  feedback.innerHTML = `
    <div class="feedback ${isCorrect ? "correct" : "wrong"}>
      ${isCorrect ? "✅ Correct!" : "❌ Incorrect"}
      ${q.explanation ? `<br><small>${q.explanation}</small>` : ""}
      ${!isCorrect && q.type === "fill" ? `<br><small>Expected: <strong>${q.answer}</strong></small>` : ""}
    </div>
  `;

  state.answered = true;
  document.getElementById("btn-check").classList.add("hidden");
  document.getElementById("btn-next").classList.remove("hidden");

  const total = state.questions.length;
  document.getElementById("exercise-progress").style.width =
    ((state.currentIndex + 1) / total * 100) + "%";
}

document.getElementById("btn-check").addEventListener("click", checkAnswer);

document.getElementById("btn-next").addEventListener("click", () => {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    finishExercise();
  }
});

function finishExercise() {
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);
  const xpGained = state.score * 10 + (pct === 100 ? 20 : 0);

  addXP(xpGained);
  updateStreak();
  markLevelProgress(state.level, state.score);

  if (state.isDaily) {
    const p = loadProgress();
    p.dailyCompletedToday = true;
    saveProgress(p);
  }

  let emoji = "👍";
  let title = "Good effort!";
  if (pct === 100) { emoji = "🏆"; title = "Perfect!"; }
  else if (pct >= 80) { emoji = "🎉"; title = "Great job!"; }
  else if (pct >= 60) { emoji = "😊"; title = "Nice work!"; }
  else if (pct < 40) { emoji = "💪"; title = "Keep practicing!"; }

  document.getElementById("result-emoji").textContent = emoji;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-score").textContent = `You scored ${state.score} / ${total} (${pct}%)`;
  document.getElementById("result-xp-value").textContent = xpGained;

  showScreen("screen-result");
}

document.getElementById("btn-again").addEventListener("click", () => {
  startExercise();
});

document.getElementById("btn-home").addEventListener("click", () => {
  showScreen("screen-home");
});

// ---------- Init ----------
updateStatsUI();
