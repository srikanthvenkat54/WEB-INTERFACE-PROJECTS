# Web Interface & Application Projects Suite 🚀

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-success?style=for-the-badge&logo=github)](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5 & CSS3](https://img.shields.io/badge/HTML5%20%26%20CSS3-Modern%20Design-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/)

A unified showcase and live interactive suite of **10 web applications** engineered by **Srikanth V**. This repository features standalone and integrated web applications combining pure HTML/CSS/JavaScript with modern React 19 SPAs, featuring an in-page **Live Interactive Studio & Multi-Device Simulator**.

---

## 🌐 Live Deployment

👉 **[Launch Live Applications Suite](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/)**

---

## 📱 Application Catalog (10 Projects)

| # | Project Name | Tech Stack | Type | Live Standalone Link | Description |
|---|---|---|---|---|---|
| **01** | **Counter App** | HTML5, CSS3, Vanilla JS | Utility | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-01/) | Real-time counter with positive/negative color feedback, keyboard shortcuts (`↑`, `↓`, `R`), and haptic animations. |
| **02** | **Student Profile Card** | HTML5, CSS3, Vanilla JS | Academic | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-02/) | Dynamic student record card generator with auto pass/fail classification and score calculation. |
| **03** | **My Hobbies Showcase** | React 19, Vite, Flexbox | Showcase | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-03/) | Modular card gallery showcasing personal hobbies (gaming, sports, travel) with responsive media cards. |
| **04** | **Student Academic Portal** | React 19, Vite, Dashboard UI | Portal | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-04/) | Comprehensive student dashboard tracking CGPA, enrolled subjects with progress bars, and placement eligibility. |
| **05** | **Attendance Tracker** | React 19, Hooks, Array Map | Management | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-05/) | Classroom attendance engine managing 20 members with real-time present/absent counters and summary statistics. |
| **06** | **Modern Web Calculator** | React 19, Expression Evaluator | Utility | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-06/) | Tactile calculator supporting continuous arithmetic expressions, backspace editing, and real-time computation. |
| **07** | **Admission Form Validation** | React 19, RegEx Engine | Form | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-07/) | Robust registration form with 10 validated inputs, password complexity enforcement, and live error alerts. |
| **08** | **Developer Portfolio** | React 19, Editorial Typography | Portfolio | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-08/) | Editorial-grade developer portfolio featuring project case studies, career milestones, skill matrices, and dark mode. |
| **09** | **Daily Task & Todo Planner** | React 19, LocalStorage API | Productivity | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-09/) | Task manager with automatic browser LocalStorage persistence, live search filtering, and inline task editing. |
| **10** | **Northstar Student Report Card**| React 19, Dynamic Engine | Academic | [Launch App](https://srikanthvenkat54.github.io/WEB-INTERFACE-PROJECTS/projects/pro-10/) | Interactive progress report card with editable subject marks, automated grade computation (A+ to F), and print CSS. |

---

## 🛠️ Key Suite Features

1. **Live Interactive Studio**:
   - In-page live runner allowing testing and interacting with all 10 projects directly inside `index.html`.
   - **Device Simulator**: Toggle seamlessly between Desktop (Full Width), Tablet (768px), and Mobile (390px iPhone-style bezel).
   - Frame controls: Live reload, fullscreen mode, and standalone launch.
2. **Real-time Filter & Search Engine**:
   - Search applications by keyword, technology, or feature.
   - Filter chips: `All Projects (10)`, `Pure HTML & JS (2)`, `React 19 SPAs (8)`, `Portals & Academic (3)`, `Productivity & Tools (4)`.
3. **Dark & Light Mode**:
   - Integrated theme switcher with persistent `localStorage` preference.
4. **Zero-Config GitHub Pages Ready**:
   - All React SPAs are built using relative base paths (`base: './'`).
   - Production bundles are structured in `projects/pro-XX/` so they run immediately on GitHub Pages without server-side execution.
   - Automated GitHub Actions CI/CD workflow included in `.github/workflows/deploy.yml`.

---

## 📁 Repository Structure

```
WEB-INTERFACE-PROJECTS/
├── index.html                  # Master Single Index Portal & Interactive Suite
├── css/
│   └── style.css               # Glassmorphism & High-Tech Design System
├── js/
│   └── app.js                  # Studio Controller, Filter Engine & Device Simulator
├── projects/                   # Production-Ready Deployed Applications
│   ├── pro-01/                 # Counter App (Vanilla JS/CSS)
│   ├── pro-02/                 # Student Profile Card (Vanilla JS/CSS)
│   ├── pro-03/                 # My Hobbies (React 19 build)
│   ├── pro-04/                 # Student Portal (React 19 build)
│   ├── pro-05/                 # Attendance Tracker (React 19 build)
│   ├── pro-06/                 # Calculator (React 19 build)
│   ├── pro-07/                 # Form Validation (React 19 build)
│   ├── pro-08/                 # Portfolio (React 19 build)
│   ├── pro-09/                 # Todo App (React 19 build)
│   └── pro-10/                 # Report Card (React 19 build)
├── pro 1/                      # Original source: Counter App
├── pro 2/                      # Original source: Student Profile Card
├── pro 3/project 03/           # Original source: React project 3
├── pro 4/project 04/           # Original source: React project 4
├── pro 5/Project 05/           # Original source: React project 5
├── pro 6/Project 06/           # Original source: React project 6
├── pro 7/project 07/           # Original source: React project 7
├── pro 8/project 08/           # Original source: React project 8
├── pro 9/project 09/           # Original source: React project 9
├── pro 10/project 10/          # Original source: React project 10
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD Pipeline
├── build_react_projects.js     # Script to build all React projects
└── setup_deploy_projects.js    # Script to organize production distribution
```

---

## 💻 Local Development

### 1. Run the Unified Suite Locally
Run the lightweight built-in HTTP server:
```bash
node serve.js
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Rebuilding the React Projects
To recompile all 8 React projects after editing source code:
```bash
node build_react_projects.js
node setup_deploy_projects.js
```

---

## 🚀 GitHub Pages Deployment Instructions

### Method A: Deploy via GitHub Actions (Recommended)
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push changes to the `main` branch. The included `.github/workflows/deploy.yml` workflow will automatically run and deploy your site!

### Method B: Deploy from Branch (Classic)
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live immediately!

---

## 👨‍💻 Author

**Srikanth V**  
- **GitHub**: [@srikanthvenkat54](https://github.com/srikanthvenkat54)
- **Repository**: [WEB-INTERFACE-PROJECTS](https://github.com/srikanthvenkat54/WEB-INTERFACE-PROJECTS)
