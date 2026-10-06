/**
 * Srikanth V - Projects Showcase Hub Application Logic
 * Interactive Studio Controller, Search & Filter, Device Simulator, & Theme Manager
 */

// 1. Projects Master Catalog
const PROJECTS = [
  {
    id: 'pro-01',
    num: 'PRO-01',
    title: 'Counter App',
    category: ['html', 'tools'],
    type: 'HTML / JS',
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Keyboard Events'],
    icon: '🔢',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    description: 'Interactive counter with real-time numerical color states, step controls, and hotkey navigation.',
    features: [
      'Positive, negative & neutral visual states',
      'Keyboard shortcuts (+, -, R)',
      'Smooth micro-animations & haptic states'
    ],
    liveUrl: 'projects/pro-01/index.html',
    sourcePath: 'pro 1/Counter App.html'
  },
  {
    id: 'pro-02',
    num: 'PRO-02',
    title: 'Student Profile Card',
    category: ['html', 'academic'],
    type: 'HTML / JS',
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'DOM Manipulation'],
    icon: '👨‍🎓',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    description: 'Dynamic academic profile generator featuring automatic score grading, pass/fail evaluation, and instant badge creation.',
    features: [
      'Real-time pass/fail evaluation (>= 50 marks)',
      'Sample data auto-fill for testing',
      'Clean student record card generation'
    ],
    liveUrl: 'projects/pro-02/index.html',
    sourcePath: 'pro 2/Student Profile Card.html'
  },
  {
    id: 'pro-03',
    num: 'PRO-03',
    title: 'My Hobbies Showcase',
    category: ['react', 'portals'],
    type: 'React 19',
    tech: ['React 19', 'Vite', 'Component Props', 'CSS Flexbox'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    description: 'Visual showcase highlighting gaming, cricket, volleyball, and traveling with modular cards and imagery.',
    features: [
      'Reusable HobbyCard child components',
      'Responsive media & photography grid',
      'Interactive card hover transformations'
    ],
    liveUrl: 'projects/pro-03/index.html',
    sourcePath: 'pro 3/project 03/src/'
  },
  {
    id: 'pro-04',
    num: 'PRO-04',
    title: 'Student Academic Status Portal',
    category: ['react', 'academic'],
    type: 'React 19',
    tech: ['React 19', 'Vite', 'Dashboard UI', 'Progress Bars'],
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    description: 'Comprehensive academic dashboard tracking CGPA, enrolled subjects with animated progress bars, and placement eligibility.',
    features: [
      'Real-time CGPA and attendance monitor',
      '5 enrolled subjects with completion progress',
      'Placement eligibility evaluation algorithm'
    ],
    liveUrl: 'projects/pro-04/index.html',
    sourcePath: 'pro 4/project 04/src/'
  },
  {
    id: 'pro-05',
    num: 'PRO-05',
    title: 'Attendance Tracker System',
    category: ['react', 'tools', 'academic'],
    type: 'React 19',
    tech: ['React 19', 'useState Hook', 'Array Mapping', 'Live Counters'],
    icon: '📋',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
    description: 'Real-time classroom attendance engine tracking 20 students with instant present/absent counters and summary statistics.',
    features: [
      'Interactive toggle for 20 team members',
      'Instant present and absent tally computation',
      'Color-coded presence badges and counts'
    ],
    liveUrl: 'projects/pro-05/index.html',
    sourcePath: 'pro 5/Project 05/src/'
  },
  {
    id: 'pro-06',
    num: 'PRO-06',
    title: 'Modern Web Calculator',
    category: ['react', 'tools'],
    type: 'React 19',
    tech: ['React 19', 'Expression Parser', 'State Hooks', 'CSS Grid'],
    icon: '🧮',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    description: 'Tactile calculator supporting continuous arithmetic expressions, backspace editing, and real-time result evaluation.',
    features: [
      'Full 4-function arithmetic operations',
      'Backspace (⌫) & All-Clear (AC) controls',
      'Dual line display for input and calculated result'
    ],
    liveUrl: 'projects/pro-06/index.html',
    sourcePath: 'pro 6/Project 06/src/'
  },
  {
    id: 'pro-07',
    num: 'PRO-07',
    title: 'Admission Registration & Validation',
    category: ['react', 'academic', 'tools'],
    type: 'React 19',
    tech: ['React 19', 'RegEx Engine', 'Form Validation', 'Multi-Input State'],
    icon: '📝',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    description: 'Robust student registration system enforcing password complexity, email verification, phone validation, and real-time error feedback.',
    features: [
      '10 validated form input fields',
      'RegEx password & email security validation',
      'Instant inline error alerts and submission validation'
    ],
    liveUrl: 'projects/pro-07/index.html',
    sourcePath: 'pro 7/project 07/src/'
  },
  {
    id: 'pro-08',
    num: 'PRO-08',
    title: 'Srikanth V — Developer Portfolio',
    category: ['react', 'portals'],
    type: 'React 19',
    tech: ['React 19', 'Editorial CSS', 'Dark/Light Theme', 'Semantic HTML'],
    icon: '💼',
    gradient: 'linear-gradient(135deg, #3a4fd7 0%, #1e1b4b 100%)',
    description: 'Editorial-grade developer portfolio featuring project case studies, career milestones, skill matrices, and contact details.',
    features: [
      'Bricolage Grotesque & Serif typography',
      'Experience timeline and technical skill badges',
      'Integrated theme system and clean layout'
    ],
    liveUrl: 'projects/pro-08/index.html',
    sourcePath: 'pro 8/project 08/src/'
  },
  {
    id: 'pro-09',
    num: 'PRO-09',
    title: 'Daily Task Planner & Todo App',
    category: ['react', 'tools'],
    type: 'React 19',
    tech: ['React 19', 'LocalStorage', 'useMemo Filter', 'Inline Editing'],
    icon: '✅',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    description: 'Productivity suite with persistent browser storage, live keyword search, inline task renaming, and status filter tabs.',
    features: [
      'Automatic LocalStorage synchronization',
      'In-place inline task name editing',
      'Real-time search filtering & active/completed tabs'
    ],
    liveUrl: 'projects/pro-09/index.html',
    sourcePath: 'pro 9/project 09/src/'
  },
  {
    id: 'pro-10',
    num: 'PRO-10',
    title: 'Northstar Student Report Card',
    category: ['react', 'academic'],
    type: 'React 19',
    tech: ['React 19', 'Dynamic Computations', 'Grade Algorithms', 'Print CSS'],
    icon: '📊',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
    description: 'Academic progress report system with editable subject marks, auto-grade assignment (A+ to F), percentage tally, and print stylesheet.',
    features: [
      'Editable student records and marks inputs',
      'Instant score totaling & grade calculation',
      'Print-ready assessment report formatting'
    ],
    liveUrl: 'projects/pro-10/index.html',
    sourcePath: 'pro 10/project 10/src/'
  }
];

// Global State
let activeProjectId = 'pro-01';
let currentFilter = 'all';
let currentSearch = '';

// DOM Elements
const studioIframe = document.getElementById('studio-iframe');
const studioRibbon = document.getElementById('studio-ribbon');
const studioUrlText = document.getElementById('studio-url-text');
const studioActiveTitle = document.getElementById('studio-active-title');
const studioActiveBadge = document.getElementById('studio-active-badge');
const studioActiveDesc = document.getElementById('studio-active-desc');
const studioActiveTags = document.getElementById('studio-active-tags');
const studioStandaloneBtn = document.getElementById('studio-standalone-btn');
const studioReloadBtn = document.getElementById('studio-reload-btn');
const studioFullscreenBtn = document.getElementById('studio-fullscreen-btn');
const studioDeviceFrame = document.getElementById('studio-device-frame');

const projectsGrid = document.getElementById('projects-grid');
const filterChips = document.querySelectorAll('.filter-chip');
const searchInput = document.getElementById('search-input');
const projectCountLabel = document.getElementById('project-count-label');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// 2. Initialize Studio Ribbon
function initStudioRibbon() {
  studioRibbon.innerHTML = '';
  PROJECTS.forEach((proj, idx) => {
    const btn = document.createElement('button');
    btn.className = `ribbon-btn ${proj.id === activeProjectId ? 'active' : ''}`;
    btn.innerHTML = `<span>${proj.icon}</span> <span>${idx + 1}. ${proj.title}</span>`;
    btn.setAttribute('data-id', proj.id);
    btn.addEventListener('click', () => {
      loadProjectIntoStudio(proj.id);
    });
    studioRibbon.appendChild(btn);
  });
}

// 3. Load Project into Studio
function loadProjectIntoStudio(projectId, shouldScroll = false) {
  const proj = PROJECTS.find(p => p.id === projectId);
  if (!proj) return;

  activeProjectId = projectId;

  // Update Ribbon Active State
  document.querySelectorAll('.ribbon-btn').forEach(btn => {
    if (btn.getAttribute('data-id') === projectId) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Iframe
  studioIframe.src = proj.liveUrl;
  studioUrlText.textContent = `https://srikanthv.io/${proj.liveUrl}`;
  studioStandaloneBtn.href = proj.liveUrl;

  // Update Info Panel
  studioActiveTitle.innerHTML = `<span>${proj.icon}</span> <span>${proj.title}</span>`;
  studioActiveBadge.textContent = proj.type;
  studioActiveBadge.className = `badge-tag ${proj.type.includes('React') ? 'badge-react' : 'badge-html'}`;
  studioActiveDesc.textContent = proj.description;

  // Update Tags
  studioActiveTags.innerHTML = '';
  proj.tech.forEach(t => {
    const pill = document.createElement('span');
    pill.className = 'tech-pill';
    pill.textContent = t;
    studioActiveTags.appendChild(pill);
  });

  if (shouldScroll) {
    document.getElementById('studio').scrollIntoView({ behavior: 'smooth' });
  }
}

// 4. Device Switcher
function initDeviceSwitcher() {
  const deviceBtns = document.querySelectorAll('.device-btn');
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-device');
      studioDeviceFrame.className = 'device-frame';
      if (mode === 'tablet') {
        studioDeviceFrame.classList.add('tablet');
      } else if (mode === 'mobile') {
        studioDeviceFrame.classList.add('mobile');
      }
    });
  });
}

// 5. Studio Action Buttons
function initStudioActions() {
  studioReloadBtn.addEventListener('click', () => {
    const currentSrc = studioIframe.src;
    studioIframe.src = 'about:blank';
    setTimeout(() => {
      studioIframe.src = currentSrc;
    }, 100);
  });

  studioFullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      studioDeviceFrame.requestFullscreen().catch(err => {
        window.open(studioIframe.src, '_blank');
      });
    } else {
      document.exitFullscreen();
    }
  });
}

// 6. Render Project Cards in Gallery
function renderProjectsGrid() {
  projectsGrid.innerHTML = '';

  const query = currentSearch.toLowerCase().trim();

  const filtered = PROJECTS.filter(proj => {
    // Filter Category
    const matchesCategory = currentFilter === 'all' || proj.category.includes(currentFilter);
    // Search Query
    const matchesSearch = !query || 
      proj.title.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.tech.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (projectCountLabel) {
    projectCountLabel.textContent = `Showing ${filtered.length} of ${PROJECTS.length} Applications`;
  }

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 32px; margin-bottom: 12px;">🔍</p>
        <h3>No applications found matching "${currentSearch}"</h3>
        <p style="font-size: 14px; margin-top: 6px;">Try searching for "React", "Calculator", "Form", or click "All Projects".</p>
      </div>
    `;
    return;
  }

  filtered.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="card-hero" style="background: ${proj.gradient};">
        <div class="card-hero-meta">
          <span class="pro-num">${proj.num}</span>
          <span class="tech-type-badge ${proj.type.includes('React') ? 'badge-react' : 'badge-html'}">${proj.type}</span>
        </div>
        <div class="card-hero-icon">${proj.icon}</div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${proj.title}</h3>
        <p class="card-desc">${proj.description}</p>
        
        <ul class="card-features">
          ${proj.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="card-tech-list">
          ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button type="button" class="card-btn-run" data-run-id="${proj.id}">
            ⚡ Run in Studio
          </button>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-btn-standalone">
            ↗ Standalone
          </a>
        </div>
      </div>
    `;

    card.querySelector('[data-run-id]').addEventListener('click', () => {
      loadProjectIntoStudio(proj.id, true);
    });

    projectsGrid.appendChild(card);
  });
}

// 7. Search & Filter Handlers
function initSearchAndFilters() {
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      renderProjectsGrid();
    });
  });

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderProjectsGrid();
  });
}

// 8. Theme Manager (Dark / Light Mode)
function initThemeManager() {
  const savedTheme = localStorage.getItem('srikanth_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon('light');
  } else {
    updateThemeIcon('dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('srikanth_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  themeToggleBtn.innerHTML = theme === 'light' ? '🌙' : '☀️';
  themeToggleBtn.title = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// 9. Boot on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initStudioRibbon();
  initDeviceSwitcher();
  initStudioActions();
  renderProjectsGrid();
  initSearchAndFilters();
  initThemeManager();
  
  // Default first project
  loadProjectIntoStudio('pro-01', false);
});
