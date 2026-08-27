// AI Social Content OS - Main Application Engine (Vanilla JS)
(function() {
  'use strict';

  const STORAGE_KEY_TASKS = 'ai_social_os_tasks_v1';
  const STORAGE_KEY_STATUS = 'ai_social_os_status_v1';
  const STORAGE_KEY_BLOCKERS = 'ai_social_os_blockers_v1';
  const STORAGE_KEY_NOTES = 'ai_social_os_notes_v1';
  const STORAGE_KEY_ENV = 'ai_social_os_env_v1';
  const STORAGE_KEY_ACTIVE_SECTION = 'ai_social_os_active_section_v1';

  // State
  let state = {
    activeSectionId: 'dashboard', // 'dashboard' or section id e.g. '00-start-here'
    specialView: null, // 'file-tree', 'architecture', 'database', 'env-vars', 'prompt-builder', 'testing-center', 'launch-checklist'
    completedTasks: {},
    taskStatuses: {},
    taskBlockers: {},
    sectionNotes: {},
    envConfigured: {},
    searchQuery: '',
    commandPaletteOpen: false,
    selectedCommandIndex: 0,
    mobileSidebarOpen: false
  };

  // Initialize from LocalStorage
  function loadState() {
    try {
      state.completedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) || '{}');
      state.taskStatuses = JSON.parse(localStorage.getItem(STORAGE_KEY_STATUS) || '{}');
      state.taskBlockers = JSON.parse(localStorage.getItem(STORAGE_KEY_BLOCKERS) || '{}');
      state.sectionNotes = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES) || '{}');
      state.envConfigured = JSON.parse(localStorage.getItem(STORAGE_KEY_ENV) || '{}');
      const savedSection = localStorage.getItem(STORAGE_KEY_ACTIVE_SECTION);
      if (savedSection) {
        state.activeSectionId = savedSection;
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(state.completedTasks));
      localStorage.setItem(STORAGE_KEY_STATUS, JSON.stringify(state.taskStatuses));
      localStorage.setItem(STORAGE_KEY_BLOCKERS, JSON.stringify(state.taskBlockers));
      localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(state.sectionNotes));
      localStorage.setItem(STORAGE_KEY_ENV, JSON.stringify(state.envConfigured));
      localStorage.setItem(STORAGE_KEY_ACTIVE_SECTION, state.activeSectionId);
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  }

  // Calculate Progress Stats
  function getProgressMetrics() {
    const sections = window.DOCS_DATA.sections || [];
    let totalTasks = 0;
    let completedCount = 0;
    const sectionStats = {};
    const phaseStats = {};

    window.DOCS_DATA.phases.forEach(p => {
      phaseStats[p.id] = { total: 0, completed: 0, title: p.title };
    });

    sections.forEach(sec => {
      const secTasks = sec.tasks || [];
      let secCompleted = 0;
      secTasks.forEach(t => {
        totalTasks++;
        if (state.completedTasks[t.id]) {
          completedCount++;
          secCompleted++;
        }
      });
      sectionStats[sec.id] = {
        total: secTasks.length,
        completed: secCompleted,
        percentage: secTasks.length > 0 ? Math.round((secCompleted / secTasks.length) * 100) : 100
      };

      if (sec.phaseId && phaseStats[sec.phaseId]) {
        phaseStats[sec.phaseId].total += secTasks.length;
        phaseStats[sec.phaseId].completed += secCompleted;
      }
    });

    const overallPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    const remainingTasks = totalTasks - completedCount;
    
    // Determine Current Active Phase
    let currentPhase = window.DOCS_DATA.phases[0];
    for (const p of window.DOCS_DATA.phases) {
      const pStat = phaseStats[p.id];
      if (pStat && pStat.completed < pStat.total) {
        currentPhase = p;
        break;
      }
    }

    // Determine Next Actionable Task
    let nextTask = null;
    let nextTaskSection = null;
    for (const sec of sections) {
      for (const t of (sec.tasks || [])) {
        if (!state.completedTasks[t.id]) {
          nextTask = t;
          nextTaskSection = sec;
          break;
        }
      }
      if (nextTask) break;
    }

    return {
      totalTasks,
      completedCount,
      remainingTasks,
      overallPercentage,
      sectionStats,
      phaseStats,
      currentPhase,
      nextTask,
      nextTaskSection
    };
  }

  // Toast Notification
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast px-4 py-3 rounded-lg border text-sm font-medium flex items-center gap-2 shadow-2xl backdrop-blur-md ${
      type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' :
      type === 'warning' ? 'bg-amber-950/90 border-amber-500/50 text-amber-200' :
      type === 'purple' ? 'bg-purple-950/90 border-purple-500/50 text-purple-200' :
      'bg-slate-900/90 border-slate-700 text-slate-200'
    }`;
    const icon = type === 'success' ? '✓' : type === 'warning' ? '⚠️' : '⚡';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Trigger Subtle Confetti for Milestones
  function triggerCelebration() {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'confetti';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = (window.innerWidth / 2 + (Math.random() * 400 - 200)) + 'px';
      p.style.top = (window.innerHeight / 2 - 100) + 'px';
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.transform = `scale(${Math.random() * 1.2 + 0.5})`;
      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 8 + Math.random() * 12;
      let vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity - 6;
      let opacity = 1;

      let startX = parseFloat(p.style.left);
      let startY = parseFloat(p.style.top);

      const anim = setInterval(() => {
        startX += vx;
        startY += vy;
        vy += 0.4; // gravity
        opacity -= 0.02;
        p.style.left = startX + 'px';
        p.style.top = startY + 'px';
        p.style.opacity = opacity;

        if (opacity <= 0) {
          clearInterval(anim);
          p.remove();
        }
      }, 16);
    }
  }

  // Copy text to clipboard
  window.copyCode = function(button, codeText) {
    navigator.clipboard.writeText(codeText).then(() => {
      const originalText = button.innerHTML;
      button.innerHTML = `<span class="text-emerald-400">✓ Copied!</span>`;
      button.classList.add('border-emerald-500/50');
      showToast('Copied code snippet to clipboard', 'success');
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('border-emerald-500/50');
      }, 2000);
    }).catch(err => {
      showToast('Failed to copy to clipboard', 'warning');
    });
  };

  // Toggle Task Completion
  window.toggleTask = function(taskId, event) {
    if (event) event.stopPropagation();
    const isNowCompleted = !state.completedTasks[taskId];
    if (isNowCompleted) {
      state.completedTasks[taskId] = true;
      state.taskStatuses[taskId] = 'COMPLETED';
      showToast('Task marked as completed! 🎉', 'success');
      triggerCelebration();
    } else {
      delete state.completedTasks[taskId];
      state.taskStatuses[taskId] = 'NOT STARTED';
      showToast('Task marked as incomplete', 'info');
    }
    saveState();
    renderApp();
  };

  // Update Task Status
  window.setTaskStatus = function(taskId, newStatus) {
    state.taskStatuses[taskId] = newStatus;
    if (newStatus === 'COMPLETED') {
      state.completedTasks[taskId] = true;
      triggerCelebration();
    } else if (state.completedTasks[taskId]) {
      delete state.completedTasks[taskId];
    }
    saveState();
    renderApp();
  };

  // Save Blocker Note
  window.saveBlockerNote = function(taskId, note) {
    if (note && note.trim().length > 0) {
      state.taskBlockers[taskId] = note.trim();
      state.taskStatuses[taskId] = 'BLOCKED';
      showToast('Blocker note saved', 'warning');
    } else {
      delete state.taskBlockers[taskId];
    }
    saveState();
    renderApp();
  };

  // Save Section Note
  window.saveSectionNote = function(sectionId, noteText) {
    state.sectionNotes[sectionId] = noteText;
    saveState();
    showToast('Notes saved to LocalStorage', 'success');
  };

  // Toggle Env Var Configured
  window.toggleEnvVar = function(varName) {
    state.envConfigured[varName] = !state.envConfigured[varName];
    saveState();
    renderApp();
  };

  // Reset Progress Confirmation
  window.confirmResetProgress = function() {
    const modal = document.getElementById('reset-modal');
    if (modal) modal.classList.remove('hidden');
  };

  window.closeResetModal = function() {
    const modal = document.getElementById('reset-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.executeResetProgress = function() {
    state.completedTasks = {};
    state.taskStatuses = {};
    state.taskBlockers = {};
    state.sectionNotes = {};
    state.envConfigured = {};
    saveState();
    closeResetModal();
    showToast('All progress has been reset', 'warning');
    renderApp();
  };

  // Navigate to Section or View
  window.navigateTo = function(sectionOrViewId) {
    if (['file-tree', 'architecture', 'database', 'env-vars', 'prompt-builder', 'testing-center', 'launch-checklist'].includes(sectionOrViewId)) {
      state.specialView = sectionOrViewId;
      state.activeSectionId = sectionOrViewId;
    } else {
      state.specialView = null;
      state.activeSectionId = sectionOrViewId;
    }
    state.mobileSidebarOpen = false;
    saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  };

  // Toggle Mobile Menu
  window.toggleMobileMenu = function() {
    state.mobileSidebarOpen = !state.mobileSidebarOpen;
    const sidebar = document.getElementById('sidebar-container');
    const backdrop = document.getElementById('mobile-backdrop');
    if (sidebar && backdrop) {
      if (state.mobileSidebarOpen) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }
  };

  // Command Palette Open / Close
  window.openCommandPalette = function() {
    state.commandPaletteOpen = true;
    state.searchQuery = '';
    state.selectedCommandIndex = 0;
    const modal = document.getElementById('command-modal');
    const input = document.getElementById('command-input');
    if (modal && input) {
      modal.classList.remove('hidden');
      setTimeout(() => input.focus(), 50);
      renderCommandResults('');
    }
  };

  window.closeCommandPalette = function() {
    state.commandPaletteOpen = false;
    const modal = document.getElementById('command-modal');
    if (modal) modal.classList.add('hidden');
  };

  // Keyboard Shortcuts Listener (Ctrl+K, Escape)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (state.commandPaletteOpen) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      if (state.commandPaletteOpen) closeCommandPalette();
      closeResetModal();
    }
  });

  // Render Command Palette Search Results
  function renderCommandResults(query) {
    const resultsContainer = document.getElementById('command-results');
    if (!resultsContainer) return;
    const q = query.toLowerCase().trim();

    const results = [];

    // Quick views
    results.push({ type: 'View', title: 'Dashboard Overview', icon: 'layout-dashboard', id: 'dashboard' });
    results.push({ type: 'Tool', title: 'Interactive Architecture Flow', icon: 'network', id: 'architecture' });
    results.push({ type: 'Tool', title: 'Database Schema & Tables', icon: 'database', id: 'database' });
    results.push({ type: 'Tool', title: 'Environment Variables Checklist', icon: 'key', id: 'env-vars' });
    results.push({ type: 'Tool', title: 'Visual Prompt Builder', icon: 'sparkles', id: 'prompt-builder' });
    results.push({ type: 'Tool', title: 'Interactive File Tree', icon: 'folder-tree', id: 'file-tree' });
    results.push({ type: 'Tool', title: 'Testing & QA Center', icon: 'shield-check', id: 'testing-center' });
    results.push({ type: 'Tool', title: 'Final Launch Checklist', icon: 'rocket', id: 'launch-checklist' });

    // Sections
    window.DOCS_DATA.sections.forEach(sec => {
      results.push({
        type: 'Section',
        title: `${sec.number} — ${sec.title}: ${sec.subtitle}`,
        desc: sec.overview,
        id: sec.id
      });
      // Tasks
      (sec.tasks || []).forEach(t => {
        results.push({
          type: 'Task',
          title: t.title,
          desc: `In ${sec.title} • ${t.time} • ${t.difficulty}`,
          id: sec.id,
          taskId: t.id
        });
      });
    });

    // Filter
    const filtered = q === '' ? results.slice(0, 10) : results.filter(item => {
      return item.title.toLowerCase().includes(q) || (item.desc && item.desc.toLowerCase().includes(q)) || item.type.toLowerCase().includes(q);
    }).slice(0, 15);

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-10 text-center text-slate-500">
          <p class="text-sm">No documentation matches for "<span class="text-slate-300">${escapeHtml(query)}</span>"</p>
          <p class="text-xs text-slate-600 mt-1">Try searching for "Gemini", "OAuth", "Supabase", "Redis", or "Tables"</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map((item, idx) => `
      <div onclick="navigateTo('${item.id}'); closeCommandPalette();"
           class="px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/60 group">
        <div class="flex items-center gap-3">
          <span class="text-xs px-2 py-0.5 rounded font-mono font-medium ${
            item.type === 'Task' ? 'bg-blue-950/80 text-blue-300 border border-blue-800/50' :
            item.type === 'Section' ? 'bg-purple-950/80 text-purple-300 border border-purple-800/50' :
            'bg-slate-800 text-slate-300 border border-slate-700'
          }">${item.type}</span>
          <div>
            <div class="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">${escapeHtml(item.title)}</div>
            ${item.desc ? `<div class="text-xs text-slate-400 line-clamp-1">${escapeHtml(item.desc)}</div>` : ''}
          </div>
        </div>
        <span class="text-xs text-slate-500 group-hover:text-slate-300 font-mono">Jump →</span>
      </div>
    `).join('');
  }

  // HTML Escaper helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // RENDER: Header & Top Stats
  function renderHeader(metrics) {
    const headerEl = document.getElementById('top-header');
    if (!headerEl) return;

    headerEl.innerHTML = `
      <div class="max-w-[1700px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <!-- Logo & Title -->
        <div class="flex items-center gap-3">
          <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div onclick="navigateTo('dashboard')" class="flex items-center gap-3 cursor-pointer group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] glow-blue">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono text-base">
                OS
              </div>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-100 tracking-tight text-base group-hover:text-blue-400 transition-colors">AI Social Content OS</span>
                <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/60">
                  MVP Execution Center
                </span>
              </div>
              <p class="text-xs text-slate-400 hidden sm:block">Next.js 14 • Supabase • Gemini • BullMQ • LinkedIn & Instagram</p>
            </div>
          </div>
        </div>

        <!-- Global Search Bar / Command Palette Trigger -->
        <div class="flex-1 max-w-md hidden md:block">
          <button onclick="openCommandPalette()" class="w-full bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-lg flex items-center justify-between text-xs transition-all shadow-inner">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span>Search documentation, tasks, APIs, tables...</span>
            </div>
            <kbd class="px-2 py-0.5 bg-slate-800 text-slate-400 border border-slate-700 rounded text-[10px] font-mono">Ctrl+K</kbd>
          </button>
        </div>

        <!-- Header Right Actions & Progress Badge -->
        <div class="flex items-center gap-3">
          <!-- Progress Gauge Badge -->
          <div class="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <div class="text-right">
              <div class="text-xs font-semibold text-slate-200">${metrics.overallPercentage}% Complete</div>
              <div class="text-[10px] text-slate-400 font-mono">${metrics.completedCount} / ${metrics.totalTasks} Tasks</div>
            </div>
            <div class="w-12 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-full" style="width: ${metrics.overallPercentage}%"></div>
            </div>
          </div>

          <!-- Quick Tools Dropdown / Buttons -->
          <button onclick="openCommandPalette()" class="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>

          <button onclick="confirmResetProgress()" title="Reset All Progress" class="px-2.5 py-1.5 text-xs text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg border border-slate-800 hover:border-rose-900/50 transition-colors flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            <span class="hidden xl:inline">Reset</span>
          </button>
        </div>
      </div>
    `;
  }

  // RENDER: Left Sidebar Navigation
  function renderSidebar(metrics) {
    const sidebarEl = document.getElementById('sidebar-nav');
    if (!sidebarEl) return;

    const sections = window.DOCS_DATA.sections || [];
    const active = state.activeSectionId;

    sidebarEl.innerHTML = `
      <!-- Quick Navigation Hub -->
      <div class="px-3 py-2">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5 flex items-center justify-between">
          <span>Navigation Hub</span>
        </div>
        <div class="space-y-1">
          <button onclick="navigateTo('dashboard')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'dashboard' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>Execution Dashboard</span>
            </div>
            <span class="text-[10px] px-1.5 py-0.5 rounded font-mono ${metrics.overallPercentage === 100 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-800 text-slate-400'}">${metrics.overallPercentage}%</span>
          </button>

          <button onclick="navigateTo('architecture')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'architecture' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              <span>Architecture Flow</span>
            </div>
          </button>

          <button onclick="navigateTo('database')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'database' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              <span>Database & 9 Tables</span>
            </div>
            <span class="text-[10px] text-cyan-400 font-mono bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">9 SQL</span>
          </button>

          <button onclick="navigateTo('env-vars')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'env-vars' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
              <span>Environment Secrets</span>
            </div>
            <span class="text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">15 Vars</span>
          </button>

          <button onclick="navigateTo('prompt-builder')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'prompt-builder' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>Prompt Builder Engine</span>
            </div>
          </button>

          <button onclick="navigateTo('file-tree')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'file-tree' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Interactive File Tree</span>
            </div>
          </button>

          <button onclick="navigateTo('testing-center')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'testing-center' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Testing Center (QA)</span>
            </div>
          </button>

          <button onclick="navigateTo('launch-checklist')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${active === 'launch-checklist' ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'}">
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              <span>Final Launch Checklist</span>
            </div>
            <span class="text-[10px] text-yellow-400 font-mono bg-yellow-950/60 px-1.5 py-0.5 rounded border border-yellow-800/40">16 Check</span>
          </button>
        </div>
      </div>

      <div class="h-px bg-slate-800/80 my-2 mx-3"></div>

      <!-- Execution Sections (00 to 16) -->
      <div class="px-3 py-2">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5">
          <span>Execution Roadmap (00–16)</span>
        </div>
        <div class="space-y-1">
          ${sections.map(sec => {
            const stat = metrics.sectionStats[sec.id] || { total: 0, completed: 0, percentage: 0 };
            const isComplete = stat.total > 0 && stat.completed === stat.total;
            const isActive = active === sec.id;

            return `
              <button onclick="navigateTo('${sec.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all ${
                isActive ? 'nav-item active font-semibold text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
              }">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2 truncate">
                    <span class="font-mono text-[11px] ${isActive ? 'text-blue-400 font-bold' : 'text-slate-500'}">${sec.number}</span>
                    <span class="truncate">${sec.title}</span>
                  </div>
                  ${
                    isComplete ? `
                      <span class="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                    ` : `
                      <span class="text-[10px] font-mono ${isActive ? 'text-blue-300' : 'text-slate-500'}">${stat.completed}/${stat.total}</span>
                    `
                  }
                </div>
                <!-- Mini Progress Bar -->
                <div class="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div class="h-full ${isComplete ? 'bg-emerald-500' : 'bg-blue-500'} transition-all duration-300 rounded-full" style="width: ${stat.percentage}%"></div>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // RENDER: Right Progress Panel
  function renderRightPanel(metrics) {
    const panelEl = document.getElementById('right-progress-panel');
    if (!panelEl) return;

    panelEl.innerHTML = `
      <div class="p-5 space-y-6">
        <!-- Overall Progress Ring / Meter -->
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Overall Progress</span>
            <span class="text-sm font-bold font-mono text-blue-400">${metrics.overallPercentage}%</span>
          </div>
          <div class="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mb-3">
            <div class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-500 rounded-full" style="width: ${metrics.overallPercentage}%"></div>
          </div>
          <div class="grid grid-cols-2 gap-2 text-center text-xs pt-1 border-t border-slate-800/80">
            <div>
              <div class="font-bold text-slate-200 font-mono">${metrics.completedCount}</div>
              <div class="text-[10px] text-slate-400">Tasks Completed</div>
            </div>
            <div>
              <div class="font-bold text-slate-400 font-mono">${metrics.remainingTasks}</div>
              <div class="text-[10px] text-slate-400">Tasks Remaining</div>
            </div>
          </div>
        </div>

        <!-- Current Phase Status -->
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
          <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Current Active Phase</div>
          <div class="text-sm font-bold text-slate-100 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>${metrics.currentPhase ? metrics.currentPhase.title : 'Phase 1: Foundation'}</span>
          </div>
          <div class="text-xs text-slate-400 mt-1 font-mono">${metrics.currentPhase ? metrics.currentPhase.days : 'Days 1–2'}</div>
        </div>

        <!-- Next Actionable Task -->
        ${metrics.nextTask ? `
          <div class="bg-gradient-to-br from-blue-950/60 to-slate-900/90 rounded-xl p-4 border border-blue-800/40 glow-blue">
            <div class="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>Recommended Next Task</span>
            </div>
            <div class="text-xs font-semibold text-slate-100 mt-2">${escapeHtml(metrics.nextTask.title)}</div>
            <div class="text-[11px] text-slate-400 mt-1 line-clamp-2">${escapeHtml(metrics.nextTask.desc)}</div>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-[10px] text-blue-300 font-mono">${metrics.nextTask.time} • ${metrics.nextTask.difficulty}</span>
              <button onclick="navigateTo('${metrics.nextTaskSection.id}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-medium transition-colors">
                Start Task →
              </button>
            </div>
          </div>
        ` : `
          <div class="bg-emerald-950/60 rounded-xl p-4 border border-emerald-800/50 text-center">
            <div class="text-2xl mb-1">🎉</div>
            <div class="text-xs font-bold text-emerald-300">All 112 Tasks Completed!</div>
            <div class="text-[11px] text-emerald-400/80 mt-1">Your AI Social Content OS is ready for live launch!</div>
          </div>
        `}

        <!-- Phase Breakdown (Phases 1–8) -->
        <div class="space-y-2">
          <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1">Phase Breakdown</div>
          <div class="space-y-2">
            ${window.DOCS_DATA.phases.map(p => {
              const pStat = metrics.phaseStats[p.id] || { total: 0, completed: 0 };
              const pct = pStat.total > 0 ? Math.round((pStat.completed / pStat.total) * 100) : 0;
              const isDone = pStat.total > 0 && pStat.completed === pStat.total;

              return `
                <div class="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/80 text-xs">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-medium text-slate-300 truncate max-w-[170px]">${p.number}. ${p.title}</span>
                    <span class="font-mono text-[10px] ${isDone ? 'text-emerald-400 font-semibold' : 'text-slate-400'}">${pct}%</span>
                  </div>
                  <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full ${isDone ? 'bg-emerald-500' : 'bg-blue-500'} rounded-full transition-all" style="width: ${pct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // RENDER: Main Content Router
  function renderMainContent(metrics) {
    const mainEl = document.getElementById('main-content');
    if (!mainEl) return;

    if (state.specialView === 'architecture') {
      mainEl.innerHTML = renderArchitectureView();
    } else if (state.specialView === 'database') {
      mainEl.innerHTML = renderDatabaseView();
    } else if (state.specialView === 'env-vars') {
      mainEl.innerHTML = renderEnvVarsView();
    } else if (state.specialView === 'prompt-builder') {
      mainEl.innerHTML = renderPromptBuilderView();
    } else if (state.specialView === 'file-tree') {
      mainEl.innerHTML = renderFileTreeView();
    } else if (state.specialView === 'testing-center') {
      mainEl.innerHTML = renderTestingCenterView();
    } else if (state.specialView === 'launch-checklist') {
      mainEl.innerHTML = renderLaunchChecklistView();
    } else if (state.activeSectionId === 'dashboard') {
      mainEl.innerHTML = renderDashboardView(metrics);
    } else {
      const section = window.DOCS_DATA.sections.find(s => s.id === state.activeSectionId);
      if (section) {
        mainEl.innerHTML = renderSectionView(section, metrics);
      } else {
        mainEl.innerHTML = renderDashboardView(metrics);
      }
    }
  }

  // VIEW: Dashboard Home
  function renderDashboardView(metrics) {
    const data = window.DOCS_DATA;

    return `
      <div class="max-w-5xl mx-auto space-y-8 pb-16">
        <!-- Hero Banner -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 p-6 sm:p-8 glow-blue">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="relative z-10 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/60 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span>10–14 Day SaaS MVP Execution Roadmap</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Build the MVP. <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">One task at a time.</span>
            </h1>
            <p class="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              ${data.project.heroSubtitle} Complete execution manual for Next.js 14, Supabase Auth & PostgreSQL, Google Gemini AI, BullMQ background queues, LinkedIn UGC publishing, and Meta Instagram Graph API.
            </p>

            <!-- Metrics Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
                <div class="text-xs text-slate-400">Timeline</div>
                <div class="text-base font-bold text-slate-100 font-mono">${data.project.stats.days}</div>
              </div>
              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
                <div class="text-xs text-slate-400">Total Tasks</div>
                <div class="text-base font-bold text-blue-400 font-mono">${metrics.completedCount} / ${metrics.totalTasks}</div>
              </div>
              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
                <div class="text-xs text-slate-400">Social Networks</div>
                <div class="text-base font-bold text-slate-100 font-mono">LinkedIn & Instagram</div>
              </div>
              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
                <div class="text-xs text-slate-400">Overall Progress</div>
                <div class="text-base font-bold text-emerald-400 font-mono">${metrics.overallPercentage}%</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3 pt-2">
              <button onclick="navigateTo('${metrics.nextTaskSection ? metrics.nextTaskSection.id : '00-start-here'}')" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
                <span>Continue Building (${metrics.nextTask ? metrics.nextTask.title : 'Start Step 00'})</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button onclick="navigateTo('architecture')" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl text-xs font-medium border border-slate-700 transition-colors flex items-center gap-2">
                <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                <span>View Architecture Flow</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Access Execution Cards -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-bold text-slate-100 flex items-center gap-2">
              <span>Core Architectural Modules</span>
            </h2>
            <span class="text-xs text-slate-400">Click to jump into technical specifications</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div onclick="navigateTo('07-gemini-ai')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40">Section 07</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">Gemini AI Multi-Prompt Engine</h3>
              <p class="text-xs text-slate-400 leading-relaxed">Google GenAI SDK, brand voice injection, few-shot prompts, and structured JSON output.</p>
            </div>

            <div onclick="navigateTo('09-linkedin')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400 border border-indigo-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">Section 09</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">LinkedIn OAuth & UGC Post API</h3>
              <p class="text-xs text-slate-400 leading-relaxed">3-legged OAuth flow, token encryption at rest, and direct API publishing to member feeds.</p>
            </div>

            <div onclick="navigateTo('10-instagram')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40">Section 10</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">Instagram Meta Graph API</h3>
              <p class="text-xs text-slate-400 leading-relaxed">Facebook Login, Page token upgrade, 2-step media container lifecycle, and photo captions.</p>
            </div>

            <div onclick="navigateTo('11-scheduling')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">Section 11</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">BullMQ & Redis Scheduling</h3>
              <p class="text-xs text-slate-400 leading-relaxed">Distributed background queue, delayed job workers, exponential retries, and idempotency locks.</p>
            </div>

            <div onclick="navigateTo('database')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">Database</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">Supabase 9-Table Schema & RLS</h3>
              <p class="text-xs text-slate-400 leading-relaxed">Workspaces, encrypted credentials, generated drafts, queue states, and multi-tenant security policies.</p>
            </div>

            <div onclick="navigateTo('testing-center')" class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 card-hover cursor-pointer space-y-2.5">
              <div class="flex items-center justify-between">
                <div class="w-9 h-9 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 border border-rose-800/60">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40">Section 13</span>
              </div>
              <h3 class="text-sm font-bold text-slate-100">Testing & Security Audit</h3>
              <p class="text-xs text-slate-400 leading-relaxed">Automated QA tests for Auth, AI JSON validation, OAuth tokens, and penetration review.</p>
            </div>
          </div>
        </div>

        <!-- 10–14 Day Interactive Visual Roadmap -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-base font-bold text-slate-100">10–14 Day Execution Roadmap</h2>
              <p class="text-xs text-slate-400">Click any day card to jump straight to the technical execution guide</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${data.roadmapDays.map(item => `
              <div onclick="navigateTo('${item.sectionId}')" class="bg-slate-900/70 hover:bg-slate-850 rounded-xl p-4 border border-slate-800/80 hover:border-blue-500/50 transition-all cursor-pointer group flex flex-col justify-between space-y-3">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-blue-300 group-hover:bg-blue-950 group-hover:border-blue-800 border border-slate-700">Day ${item.day}</span>
                    <span class="text-[10px] text-slate-400 font-medium">${item.phase}</span>
                  </div>
                  <h4 class="text-xs font-bold text-slate-200 group-hover:text-blue-300 transition-colors">${item.title}</h4>
                  <p class="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-2">${item.summary}</p>
                </div>
                <div class="text-[10px] text-blue-400 font-mono group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Open Guide</span>
                  <span>→</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // VIEW: Documentation Section (00 to 16)
  function renderSectionView(sec, metrics) {
    const stat = metrics.sectionStats[sec.id] || { total: 0, completed: 0, percentage: 0 };
    const isComplete = stat.total > 0 && stat.completed === stat.total;
    const noteText = state.sectionNotes[sec.id] || '';

    // Find Previous / Next sections
    const allSections = window.DOCS_DATA.sections;
    const currentIndex = allSections.findIndex(s => s.id === sec.id);
    const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
    const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs text-slate-400">
          <button onclick="navigateTo('dashboard')" class="hover:text-slate-200">Execution Hub</button>
          <span>/</span>
          <span class="text-slate-400">${sec.day}</span>
          <span>/</span>
          <span class="text-slate-200 font-medium">${sec.number} — ${sec.title}</span>
        </nav>

        <!-- Section Header -->
        <div class="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono text-xs font-bold">
                Section ${sec.number}
              </span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono font-medium">
                ${sec.day}
              </span>
              <span class="px-2.5 py-1 rounded-md ${
                sec.priority === 'CRITICAL' ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60' : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
              } text-xs font-bold">
                ${sec.priority}
              </span>
            </div>

            <!-- Task Progress Counter -->
            <div class="flex items-center gap-2 text-xs font-mono">
              <span class="text-slate-400">Tasks:</span>
              <span class="${isComplete ? 'text-emerald-400 font-bold' : 'text-blue-400 font-bold'}">${stat.completed} / ${stat.total}</span>
              ${isComplete ? '<span class="text-emerald-400 font-bold">✓ Complete</span>' : ''}
            </div>
          </div>

          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${sec.title}</h1>
            <p class="text-sm sm:text-base text-slate-300 mt-1">${sec.subtitle}</p>
          </div>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4">
            ${sec.overview}
          </p>

          <!-- Metadata Pill Bar -->
          <div class="flex flex-wrap gap-4 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
            <div class="flex items-center gap-1.5 font-mono">
              <span class="text-slate-400">Estimated Time:</span>
              <span class="text-slate-200 font-semibold">${sec.estimatedTime}</span>
            </div>
            <div class="flex items-center gap-1.5 font-mono">
              <span class="text-slate-400">Difficulty:</span>
              <span class="text-slate-200 font-semibold">${sec.difficulty}</span>
            </div>
          </div>
        </div>

        <!-- Callouts (Important / Security / Warnings) -->
        ${(sec.callouts || []).map(callout => `
          <div class="rounded-xl p-4 border text-xs sm:text-sm ${
            callout.type === 'SECURITY' ? 'bg-rose-950/40 border-rose-800/60 text-rose-200' :
            callout.type === 'WARNING' ? 'bg-amber-950/40 border-amber-800/60 text-amber-200' :
            callout.type === 'TIP' ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200' :
            callout.type === 'NOTE' ? 'bg-purple-950/40 border-purple-800/60 text-purple-200' :
            'bg-blue-950/40 border-blue-800/60 text-blue-200'
          }">
            <div class="flex items-center gap-2 font-bold uppercase tracking-wider text-xs mb-1">
              <span>${callout.type === 'SECURITY' ? '🛡️' : callout.type === 'WARNING' ? '⚠️' : callout.type === 'TIP' ? '💡' : '📌'}</span>
              <span>${callout.type}: ${callout.title}</span>
            </div>
            <p class="leading-relaxed opacity-90">${callout.text}</p>
          </div>
        `).join('')}

        <!-- WHAT / WHY / HOW Breakdown -->
        <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-6">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 font-mono">1. WHAT Needs To Be Built</h3>
            <p class="text-sm text-slate-200 leading-relaxed">${sec.what}</p>
          </div>

          <div class="border-t border-slate-800/80 pt-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 font-mono">2. WHY This Component Exists</h3>
            <p class="text-sm text-slate-200 leading-relaxed">${sec.why}</p>
          </div>

          <div class="border-t border-slate-800/80 pt-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono">3. HOW To Implement Step-by-Step</h3>
            <ol class="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              ${(sec.how || []).map(step => `<li class="leading-relaxed pl-1">${escapeHtml(step)}</li>`).join('')}
            </ol>
          </div>
        </div>

        <!-- Code Snippet (if available) -->
        ${sec.codeSnippet ? `
          <div class="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div class="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span class="text-xs font-mono font-medium text-slate-300 ml-2">${sec.codeSnippet.file}</span>
              </div>
              <button onclick="copyCode(this, \`${escapeForCode(sec.codeSnippet.code)}\`)" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded border border-slate-700 transition-colors flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                <span>Copy Code</span>
              </button>
            </div>
            <pre class="p-4 sm:p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[480px]"><code>${escapeHtml(sec.codeSnippet.code)}</code></pre>
          </div>
        ` : ''}

        <!-- Interactive Task Checklist -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-base font-bold text-slate-100 flex items-center gap-2">
                <span>Interactive Tasks Checklist</span>
                <span class="text-xs font-mono font-normal text-slate-400">(${stat.completed}/${stat.total} done)</span>
              </h2>
              <p class="text-xs text-slate-400">Click checkboxes to mark tasks completed. Status is automatically saved to LocalStorage.</p>
            </div>
          </div>

          <div class="space-y-3">
            ${(sec.tasks || []).map(task => {
              const isChecked = !!state.completedTasks[task.id];
              const taskStatus = state.taskStatuses[task.id] || (isChecked ? 'COMPLETED' : 'NOT STARTED');
              const blocker = state.taskBlockers[task.id];

              return `
                <div class="bg-slate-900/80 rounded-xl border ${isChecked ? 'border-emerald-800/40 bg-emerald-950/10' : 'border-slate-800'} p-4 transition-all">
                  <div class="flex items-start gap-3">
                    <input type="checkbox"
                           id="chk-${task.id}"
                           class="custom-checkbox mt-0.5"
                           ${isChecked ? 'checked' : ''}
                           onchange="toggleTask('${task.id}', event)" />
                    
                    <div class="flex-1 space-y-1">
                      <div class="flex flex-wrap items-center justify-between gap-2">
                        <label for="chk-${task.id}" class="text-sm font-bold cursor-pointer select-none ${isChecked ? 'text-slate-400 line-through' : 'text-slate-100 hover:text-blue-300'} transition-colors">
                          ${escapeHtml(task.title)}
                        </label>
                        
                        <div class="flex items-center gap-2">
                          <select onchange="setTaskStatus('${task.id}', this.value)" class="text-[11px] font-mono font-medium rounded px-2 py-0.5 bg-slate-950 border border-slate-700 text-slate-300 cursor-pointer focus:outline-none focus:border-blue-500">
                            <option value="NOT STARTED" ${taskStatus === 'NOT STARTED' ? 'selected' : ''}>NOT STARTED</option>
                            <option value="IN PROGRESS" ${taskStatus === 'IN PROGRESS' ? 'selected' : ''}>IN PROGRESS</option>
                            <option value="BLOCKED" ${taskStatus === 'BLOCKED' ? 'selected' : ''}>BLOCKED</option>
                            <option value="COMPLETED" ${taskStatus === 'COMPLETED' ? 'selected' : ''}>COMPLETED</option>
                          </select>
                        </div>
                      </div>

                      <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(task.desc)}</p>

                      <!-- Task Metadata & Criteria Accordion -->
                      <details class="pt-2 text-xs text-slate-400 group">
                        <summary class="cursor-pointer font-mono text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 select-none">
                          <span>View Details & Completion Criteria</span>
                          <span class="group-open:rotate-180 transition-transform text-[10px]">▼</span>
                        </summary>
                        <div class="mt-3 pl-3 border-l-2 border-slate-800 space-y-3 pt-1">
                          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-slate-300">
                            <div><span class="text-slate-400">Time:</span> ${task.time}</div>
                            <div><span class="text-slate-400">Difficulty:</span> ${task.difficulty}</div>
                            <div><span class="text-slate-400">Priority:</span> ${task.priority}</div>
                            <div class="col-span-2 sm:col-span-3 truncate"><span class="text-slate-400">Files:</span> ${(task.files || []).join(', ')}</div>
                          </div>

                          <!-- Criteria List -->
                          <div>
                            <div class="font-semibold text-slate-300 text-xs mb-1">Completion Criteria:</div>
                            <ul class="space-y-1">
                              ${(task.criteria || []).map(crit => `
                                <li class="flex items-center gap-2 text-xs text-slate-300">
                                  <span class="text-blue-400">✓</span>
                                  <span>${escapeHtml(crit)}</span>
                                </li>
                              `).join('')}
                            </ul>
                          </div>

                          <!-- Blocker Note Section -->
                          <div class="pt-2 border-t border-slate-800/60">
                            <label class="block text-[11px] font-mono text-amber-400 mb-1">Mark Blocker / Issue (optional):</label>
                            <div class="flex gap-2">
                              <input type="text"
                                     placeholder="e.g. Waiting on LinkedIn App Review approval..."
                                     value="${escapeHtml(blocker || '')}"
                                     id="blocker-input-${task.id}"
                                     class="flex-1 bg-slate-950 text-xs px-2.5 py-1 rounded border border-slate-800 focus:border-amber-500 text-slate-200" />
                              <button onclick="saveBlockerNote('${task.id}', document.getElementById('blocker-input-${task.id}').value)" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700">
                                Save Blocker
                              </button>
                            </div>
                            ${blocker ? `<div class="text-[11px] text-rose-300 mt-1">🔴 Current Blocker: ${escapeHtml(blocker)}</div>` : ''}
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Section Notes (LocalStorage Persistence) -->
        <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              <span>My Implementation Notes (Section ${sec.number})</span>
            </h3>
            <span class="text-[10px] text-slate-400 font-mono">Auto-saved locally</span>
          </div>
          <textarea
            id="notes-textarea-${sec.id}"
            rows="3"
            placeholder="Write down any custom keys, schema adjustments, or test observations here..."
            class="w-full bg-slate-950 rounded-xl p-3 text-xs sm:text-sm text-slate-200 border border-slate-800 focus:border-blue-500 focus:outline-none leading-relaxed"
            onblur="saveSectionNote('${sec.id}', this.value)"
          >${escapeHtml(noteText)}</textarea>
          <div class="flex justify-end">
            <button onclick="saveSectionNote('${sec.id}', document.getElementById('notes-textarea-${sec.id}').value)" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-700 transition-colors">
              Save Notes
            </button>
          </div>
        </div>

        <!-- Next / Previous Navigation -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-800">
          ${prevSection ? `
            <button onclick="navigateTo('${prevSection.id}')" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-medium border border-slate-800 flex items-center gap-2 transition-colors">
              <span>← Previous:</span>
              <span class="font-mono text-slate-400">${prevSection.number} ${prevSection.title}</span>
            </button>
          ` : '<div></div>'}

          ${nextSection ? `
            <button onclick="navigateTo('${nextSection.id}')" class="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20">
              <span>Next:</span>
              <span class="font-mono text-blue-100">${nextSection.number} ${nextSection.title}</span>
              <span>→</span>
            </button>
          ` : `
            <button onclick="navigateTo('launch-checklist')" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors">
              <span>Go to Final Launch Checklist →</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  // Escape helper for copy code template literals
  function escapeForCode(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  }

  // SPECIAL VIEW: Architecture Flow
  function renderArchitectureView() {
    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">System Architecture & Flows</h1>
          <p class="text-sm text-slate-400 mt-1">High-level architecture, background queue pipelines, and security boundaries.</p>
        </div>

        <!-- Interactive Architecture Diagram Canvas -->
        <div class="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">End-to-End Execution Flow</span>
            <span class="text-xs text-blue-400 font-mono">Next.js 14 + Supabase + BullMQ</span>
          </div>

          <div class="space-y-4 text-xs font-mono">
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="text-indigo-400 font-bold text-sm">1. User Interaction & Authentication</div>
              <p class="text-slate-300 font-sans text-xs">
                User accesses Next.js 14 App Router. Supabase Auth handles JWT session verification via <code class="text-blue-400">middleware.ts</code>. Protected paths (/dashboard, /generate, /drafts, /schedule) enforce active session.
              </p>
            </div>

            <div class="flex justify-center text-slate-500 text-lg">↓</div>

            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="text-blue-400 font-bold text-sm">2. AI Prompt Engine & Content Generation</div>
              <p class="text-slate-300 font-sans text-xs">
                User enters a topic. Next.js Route Handler <code class="text-blue-400">POST /api/generate</code> fetches brand tone, forbidden words, and few-shot posts from <code class="text-emerald-400">brand_profiles</code>. Gemini 2.0 Flash returns structured JSON containing both LinkedIn long-form and Instagram captions.
              </p>
            </div>

            <div class="flex justify-center text-slate-500 text-lg">↓</div>

            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="text-cyan-400 font-bold text-sm">3. Draft Studio, Review & Scheduling</div>
              <p class="text-slate-300 font-sans text-xs">
                User edits copy with live character counter and preview fold. User clicks "Schedule Post", selecting target time. <code class="text-blue-400">POST /api/schedule</code> inserts a row into <code class="text-emerald-400">scheduled_posts</code> and enqueues a delayed BullMQ job in <code class="text-amber-400">Upstash Redis</code>.
              </p>
            </div>

            <div class="flex justify-center text-slate-500 text-lg">↓</div>

            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="text-emerald-400 font-bold text-sm">4. Distributed Worker & Multi-Platform Dispatch</div>
              <p class="text-slate-300 font-sans text-xs">
                <code class="text-blue-400">workers/publishWorker.ts</code> fires at the exact UTC timestamp. It decrypts the stored OAuth tokens in RAM using AES-256-GCM. Posts are published to LinkedIn UGC API or Instagram Media Containers. Results and audit logs are recorded in <code class="text-emerald-400">published_posts</code> and <code class="text-emerald-400">usage_events</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // SPECIAL VIEW: Database & 9 Tables
  function renderDatabaseView() {
    const tables = window.DOCS_DATA.databaseTables || [];

    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Database Schema & 9 Tables</h1>
          <p class="text-sm text-slate-400 mt-1">PostgreSQL relational structure, foreign key relations, column types, and Row Level Security policies.</p>
        </div>

        <div class="space-y-6">
          ${tables.map(tbl => `
            <div class="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden">
              <div class="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 class="text-base font-bold font-mono text-slate-100">${tbl.name}</h3>
                </div>
                <span class="text-xs text-slate-400 font-mono">${(tbl.columns || []).length} columns • RLS Enabled</span>
              </div>

              <div class="p-6 space-y-4">
                <p class="text-xs sm:text-sm text-slate-300">${tbl.purpose}</p>

                <!-- Security Policy Callout -->
                <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-400">
                  <span class="text-amber-400 font-bold">RLS Rule:</span> ${tbl.rls}
                </div>

                <!-- Columns Table -->
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-slate-400">
                        <th class="py-2 pr-4">Column</th>
                        <th class="py-2 pr-4">Type</th>
                        <th class="py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60">
                      ${(tbl.columns || []).map(col => `
                        <tr>
                          <td class="py-2 pr-4 font-bold text-blue-400">${col.name}</td>
                          <td class="py-2 pr-4 text-purple-300">${col.type}</td>
                          <td class="py-2 text-slate-300 font-sans">${col.desc}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // SPECIAL VIEW: Environment Variables
  function renderEnvVarsView() {
    const vars = window.DOCS_DATA.envVariables || [];

    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Environment Variables Checklist</h1>
          <p class="text-sm text-slate-400 mt-1">Check off configured environment variables for .env.local and production deployment.</p>
        </div>

        <div class="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
          <div class="space-y-3">
            ${vars.map(v => {
              const isConfigured = !!state.envConfigured[v.name];

              return `
                <div class="bg-slate-950 p-4 rounded-xl border ${isConfigured ? 'border-emerald-800/40 bg-emerald-950/10' : 'border-slate-800'} flex flex-wrap items-center justify-between gap-4 transition-all">
                  <div class="flex items-center gap-3">
                    <input type="checkbox"
                           id="env-chk-${v.name}"
                           class="custom-checkbox"
                           ${isConfigured ? 'checked' : ''}
                           onchange="toggleEnvVar('${v.name}')" />
                    <div>
                      <div class="flex items-center gap-2">
                        <label for="env-chk-${v.name}" class="font-mono text-xs sm:text-sm font-bold text-slate-100 cursor-pointer ${isConfigured ? 'line-through text-slate-400' : 'text-blue-300'}">
                          ${v.name}
                        </label>
                        <span class="text-[10px] px-1.5 py-0.5 rounded font-mono ${v.isPublic ? 'bg-blue-950 text-blue-300 border border-blue-800/50' : 'bg-rose-950 text-rose-300 border border-rose-800/50'}">
                          ${v.isPublic ? 'PUBLIC' : 'PRIVATE SECRET'}
                        </span>
                      </div>
                      <p class="text-xs text-slate-400 mt-0.5">${v.purpose}</p>
                    </div>
                  </div>

                  <button onclick="copyCode(this, '${v.name}=')" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded border border-slate-700 transition-colors">
                    Copy Key
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // SPECIAL VIEW: Prompt Builder
  function renderPromptBuilderView() {
    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Visual Prompt Builder Engine</h1>
          <p class="text-sm text-slate-400 mt-1">Inspect how brand rules, platform constraints, and JSON schemas are injected into Gemini 2.0 Flash.</p>
        </div>

        <div class="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6">
          <div class="space-y-4">
            <div class="bg-slate-950 p-4 rounded-xl border border-blue-900/40">
              <div class="text-xs font-bold font-mono uppercase tracking-wider text-blue-400 mb-1">Layer 1: System Role & Persona</div>
              <p class="text-xs text-slate-300 font-mono">"You are an elite B2B and consumer social media strategist with 10+ years of viral distribution experience..."</p>
            </div>

            <div class="bg-slate-950 p-4 rounded-xl border border-purple-900/40">
              <div class="text-xs font-bold font-mono uppercase tracking-wider text-purple-400 mb-1">Layer 2: Dynamic Brand Injection</div>
              <p class="text-xs text-slate-300 font-mono">Tone: {brand_profiles.tone_of_voice} | Target Persona: {brand_profiles.target_audience} | Prohibited Words: {brand_profiles.prohibited_words.join(", ")}</p>
            </div>

            <div class="bg-slate-950 p-4 rounded-xl border border-cyan-900/40">
              <div class="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-1">Layer 3: Dual-Platform Constraints</div>
              <p class="text-xs text-slate-300 font-mono">LinkedIn: 1-line punchy hook, whitespace formatting, takeaways, question CTA. Instagram: Narrative opener, line breaks, emojis, 5–10 hashtags.</p>
            </div>

            <div class="bg-slate-950 p-4 rounded-xl border border-emerald-900/40">
              <div class="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 mb-1">Layer 4: Gemini Response Schema</div>
              <pre class="text-xs text-emerald-300 font-mono">{
  "linkedin_content": "string",
  "instagram_caption": "string",
  "hashtags": ["string"],
  "image_prompt": "string"
}</pre>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // SPECIAL VIEW: File Tree Explorer
  function renderFileTreeView() {
    function renderTree(nodes, depth = 0) {
      return nodes.map(node => `
        <div class="text-xs font-mono">
          <div class="py-1 flex items-center gap-2 hover:bg-slate-800/60 px-2 rounded cursor-default" style="padding-left: ${depth * 18 + 8}px">
            <span class="${node.type === 'folder' ? 'text-amber-400' : 'text-blue-400'}">
              ${node.type === 'folder' ? '📁' : '📄'}
            </span>
            <span class="font-bold text-slate-200">${node.name}</span>
            <span class="text-slate-400 font-sans text-[11px] ml-2 line-clamp-1">${node.desc}</span>
          </div>
          ${node.children ? renderTree(node.children, depth + 1) : ''}
        </div>
      `).join('');
    }

    return `
      <div class="max-w-4xl mx-auto space-y-8 pb-16">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Interactive Project File Tree</h1>
          <p class="text-sm text-slate-400 mt-1">Complete Next.js 14 App Router codebase structure with descriptions for every file.</p>
        </div>

        <div class="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
          <div class="bg-slate-950 rounded-xl p-4 border border-slate-800">
            ${renderTree(window.DOCS_DATA.fileTree)}
          </div>
        </div>
      </div>
    `;
  }

  // SPECIAL VIEW: Testing Center
  function renderTestingCenterView() {
    const sec = window.DOCS_DATA.sections.find(s => s.id === '13-testing');
    return renderSectionView(sec, getProgressMetrics());
  }

  // SPECIAL VIEW: Launch Checklist
  function renderLaunchChecklistView() {
    const sec = window.DOCS_DATA.sections.find(s => s.id === '15-launch-checklist');
    const metrics = getProgressMetrics();
    const is100 = metrics.overallPercentage === 100;

    return `
      <div class="space-y-8">
        ${is100 ? `
          <div class="bg-gradient-to-r from-emerald-950/80 via-blue-950/80 to-purple-950/80 rounded-2xl p-8 border border-emerald-500/50 text-center space-y-3 glow-blue">
            <div class="text-5xl animate-bounce">🎉</div>
            <h2 class="text-3xl font-extrabold text-white">MVP COMPLETE</h2>
            <p class="text-base text-emerald-300 font-medium max-w-xl mx-auto">
              Your AI Social Content OS MVP is 100% built, tested, and ready for live production deployment & customer demos!
            </p>
          </div>
        ` : ''}
        ${renderSectionView(sec, metrics)}
      </div>
    `;
  }

  // MAIN RENDER TRIGGER
  function renderApp() {
    const metrics = getProgressMetrics();
    renderHeader(metrics);
    renderSidebar(metrics);
    renderRightPanel(metrics);
    renderMainContent(metrics);
  }

  // BOOTSTRAP
  window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderApp();

    // Command palette input listener
    const searchInput = document.getElementById('command-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderCommandResults(e.target.value);
      });
    }
  });

})();
