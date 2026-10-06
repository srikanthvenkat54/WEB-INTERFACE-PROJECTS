const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const projectsDir = path.join(rootDir, 'projects');

// Create projects directory
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Pro 1 (Counter App)
const pro1Dest = path.join(projectsDir, 'pro-01');
if (!fs.existsSync(pro1Dest)) fs.mkdirSync(pro1Dest, { recursive: true });

const pro1Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter App | Srikanth V</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: rgba(17, 24, 39, 0.85);
      --card-border: rgba(255, 255, 255, 0.1);
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --accent: #6366f1;
      --accent-glow: rgba(99, 102, 241, 0.35);
      --positive: #10b981;
      --negative: #ef4444;
      --neutral: #3b82f6;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background-image: 
        radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 40%);
    }
    .back-nav {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 50;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 9999px;
      color: #e5e7eb;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      backdrop-filter: blur(12px);
      transition: all 0.2s ease;
    }
    .back-btn:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(99, 102, 241, 0.4);
      color: #ffffff;
      transform: translateY(-1px);
    }
    .card {
      width: 100%;
      max-width: 440px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 40px 32px;
      text-align: center;
      backdrop-filter: blur(20px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px -10px var(--accent-glow);
      position: relative;
      overflow: hidden;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 30%, #9ca3af 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 14px;
      margin-bottom: 32px;
    }
    .counter-display {
      margin: 24px 0 32px;
      padding: 24px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 20px;
      position: relative;
    }
    #count {
      font-family: 'JetBrains Mono', monospace;
      font-size: 72px;
      font-weight: 700;
      line-height: 1;
      color: var(--neutral);
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: inline-block;
    }
    .count-status {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 8px;
      font-weight: 500;
    }
    .btn-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }
    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      padding: 14px 20px;
      border-radius: 14px;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    button:active {
      transform: scale(0.97);
    }
    #increase {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4);
    }
    #increase:hover {
      box-shadow: 0 12px 24px -4px rgba(16, 185, 129, 0.6);
      transform: translateY(-2px);
    }
    #decrease {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(239, 68, 68, 0.4);
    }
    #decrease:hover {
      box-shadow: 0 12px 24px -4px rgba(239, 68, 68, 0.6);
      transform: translateY(-2px);
    }
    #reset {
      grid-column: span 2;
      width: 100%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #e5e7eb;
    }
    #reset:hover {
      background: rgba(255, 255, 255, 0.14);
      color: #ffffff;
      transform: translateY(-1px);
    }
    .shortcuts {
      margin-top: 20px;
      font-size: 12px;
      color: #6b7280;
    }
    kbd {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      padding: 2px 6px;
      font-family: 'JetBrains Mono', monospace;
      color: #d1d5db;
    }
  </style>
</head>
<body>

  <div class="back-nav">
    <a href="../../index.html" class="back-btn">← Back to Hub</a>
  </div>

  <div class="card">
    <span class="badge">Project 01 • HTML & JS</span>
    <h1>Counter App</h1>
    <p class="subtitle">Interactive state manipulation with vanilla JavaScript</p>

    <div class="counter-display">
      <h2 id="count">0</h2>
      <div class="count-status" id="status">At Zero</div>
    </div>

    <div class="btn-grid">
      <button id="increase" aria-label="Increase count">+1</button>
      <button id="decrease" aria-label="Decrease count">-1</button>
      <button id="reset" aria-label="Reset count">↺ Reset to Zero</button>
    </div>

    <div class="shortcuts">
      Shortcuts: <kbd>↑</kbd> Add • <kbd>↓</kbd> Subtract • <kbd>R</kbd> Reset
    </div>
  </div>

  <script>
    let counter = 0;
    const count = document.getElementById("count");
    const status = document.getElementById("status");

    function updateDisplay() {
      count.textContent = counter;
      if (counter > 0) {
        count.style.color = 'var(--positive)';
        status.textContent = 'Positive (' + counter + ')';
      } else if (counter < 0) {
        count.style.color = 'var(--negative)';
        status.textContent = 'Negative (' + counter + ')';
      } else {
        count.style.color = 'var(--neutral)';
        status.textContent = 'At Zero';
      }
      count.style.transform = 'scale(1.15)';
      setTimeout(() => { count.style.transform = 'scale(1)'; }, 150);
    }

    document.getElementById("increase").addEventListener("click", function () {
      counter++;
      updateDisplay();
    });

    document.getElementById("decrease").addEventListener("click", function () {
      counter--;
      updateDisplay();
    });

    document.getElementById("reset").addEventListener("click", function () {
      counter = 0;
      updateDisplay();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' || e.key === '+') {
        counter++;
        updateDisplay();
      } else if (e.key === 'ArrowDown' || e.key === '-') {
        counter--;
        updateDisplay();
      } else if (e.key.toLowerCase() === 'r') {
        counter = 0;
        updateDisplay();
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(pro1Dest, 'index.html'), pro1Html);
fs.writeFileSync(path.join(rootDir, 'pro 1', 'index.html'), pro1Html);

// 2. Pro 2 (Student Profile Card)
const pro2Dest = path.join(projectsDir, 'pro-02');
if (!fs.existsSync(pro2Dest)) fs.mkdirSync(pro2Dest, { recursive: true });

const pro2Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile Card | Srikanth V</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: rgba(17, 24, 39, 0.88);
      --card-border: rgba(255, 255, 255, 0.1);
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --accent: #3b82f6;
      --accent-hover: #2563eb;
      --pass: #10b981;
      --fail: #ef4444;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background-image: 
        radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.12) 0%, transparent 40%);
    }
    .back-nav {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 50;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 9999px;
      color: #e5e7eb;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      backdrop-filter: blur(12px);
      transition: all 0.2s ease;
    }
    .back-btn:hover {
      background: rgba(59, 130, 246, 0.2);
      border-color: rgba(59, 130, 246, 0.4);
      color: #ffffff;
      transform: translateY(-1px);
    }
    .container {
      width: 100%;
      max-width: 440px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 36px 30px;
      backdrop-filter: blur(20px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 35px -5px rgba(59, 130, 246, 0.2);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #93c5fd;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    h2 {
      font-size: 26px;
      font-weight: 800;
      margin-bottom: 6px;
      letter-spacing: -0.02em;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 14px;
      margin-bottom: 24px;
    }
    .sample-btn {
      background: transparent;
      border: 1px dashed rgba(255, 255, 255, 0.2);
      color: #9ca3af;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      cursor: pointer;
      margin-bottom: 18px;
      transition: all 0.2s;
      width: 100%;
    }
    .sample-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #e5e7eb;
      border-color: rgba(255, 255, 255, 0.35);
    }
    .form-group {
      margin-bottom: 16px;
      text-align: left;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #d1d5db;
      margin-bottom: 6px;
    }
    input {
      width: 100%;
      padding: 13px 16px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      color: #ffffff;
      font-size: 15px;
      font-family: inherit;
      outline: none;
      transition: all 0.2s ease;
    }
    input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }
    button#btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      font-family: inherit;
      transition: all 0.2s ease;
      box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
      margin-top: 8px;
    }
    button#btn:hover {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      transform: translateY(-2px);
      box-shadow: 0 12px 24px -4px rgba(59, 130, 246, 0.6);
    }
    #profile {
      margin-top: 24px;
      empty-cells: hide;
    }
    .result-card {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 20px;
      text-align: left;
      animation: fadeIn 0.3s ease-out;
      position: relative;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .result-card h3 {
      font-size: 16px;
      font-weight: 700;
      color: #e5e7eb;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px;
    }
    .status-badge {
      font-size: 12px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
    }
    .status-pass {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    .status-fail {
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }
    .data-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 14px;
    }
    .data-label {
      color: var(--text-muted);
    }
    .data-val {
      color: #f3f4f6;
      font-weight: 600;
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>

  <div class="back-nav">
    <a href="../../index.html" class="back-btn">← Back to Hub</a>
  </div>

  <div class="container">
    <span class="badge">Project 02 • HTML & JS</span>
    <h2>Student Profile Card</h2>
    <p class="subtitle">Dynamic card generator and performance assessment</p>

    <button type="button" class="sample-btn" id="sample-btn">⚡ Fill Sample Student Details</button>

    <div class="form-group">
      <label for="name">Student Name</label>
      <input type="text" id="name" placeholder="e.g. SRIKANTH V">
    </div>

    <div class="form-group">
      <label for="roll">Roll Number</label>
      <input type="text" id="roll" placeholder="e.g. 411625149048">
    </div>

    <div class="form-group">
      <label for="marks">Total Marks (out of 100)</label>
      <input type="number" id="marks" placeholder="e.g. 88" min="0" max="100">
    </div>

    <button id="btn">Generate Profile</button>

    <div id="profile"></div>
  </div>

  <script>
    document.getElementById("sample-btn").addEventListener("click", function() {
      document.getElementById("name").value = "SRIKANTH V";
      document.getElementById("roll").value = "411625149048";
      document.getElementById("marks").value = "88";
    });

    document.getElementById("btn").addEventListener("click", function () {
      let name = document.getElementById("name").value.trim();
      let roll = document.getElementById("roll").value.trim();
      let marks = document.getElementById("marks").value.trim();

      if (name === "" || roll === "" || marks === "") {
        alert("Please fill all the fields");
        return;
      }

      let marksNum = Number(marks);
      let isPass = marksNum >= 50;
      let result = isPass ? "Pass" : "Fail";
      let badgeClass = isPass ? "status-pass" : "status-fail";

      document.getElementById("profile").innerHTML = \`
        <div class="result-card">
          <h3>
            <span>Student Performance Report</span>
            <span class="status-badge \${badgeClass}">\${result}</span>
          </h3>
          <div class="data-row">
            <span class="data-label">Full Name</span>
            <span class="data-val">\${name}</span>
          </div>
          <div class="data-row">
            <span class="data-label">Roll Number</span>
            <span class="data-val">\${roll}</span>
          </div>
          <div class="data-row">
            <span class="data-label">Score</span>
            <span class="data-val">\${marks} / 100</span>
          </div>
          <div class="data-row">
            <span class="data-label">Academic Status</span>
            <span class="data-val" style="color: \${isPass ? 'var(--pass)' : 'var(--fail)'}">\${result}</span>
          </div>
        </div>
      \`;
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(pro2Dest, 'index.html'), pro2Html);
fs.writeFileSync(path.join(rootDir, 'pro 2', 'index.html'), pro2Html);

// 3. Copy React built projects (pro 3 to 10)
const reactProjects = [
  { folder: 'pro 3/project 03/dist', target: 'pro-03' },
  { folder: 'pro 4/project 04/dist', target: 'pro-04' },
  { folder: 'pro 5/Project 05/dist', target: 'pro-05' },
  { folder: 'pro 6/Project 06/dist', target: 'pro-06' },
  { folder: 'pro 7/project 07/dist', target: 'pro-07' },
  { folder: 'pro 8/project 08/dist', target: 'pro-08' },
  { folder: 'pro 9/project 09/dist', target: 'pro-09' },
  { folder: 'pro 10/project 10/dist', target: 'pro-10' },
];

for (const rp of reactProjects) {
  const src = path.join(rootDir, rp.folder);
  const dest = path.join(projectsDir, rp.target);
  if (!fs.existsSync(src)) {
    console.error(`Dist not found for ${rp.folder}`);
    continue;
  }
  console.log(`Copying ${rp.folder} -> ${rp.target}...`);
  copyDirRecursive(src, dest);
}

console.log('Successfully organized all 10 deployable projects inside /projects/ directory!');
