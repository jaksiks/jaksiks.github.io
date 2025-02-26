/**
 * Theme Switcher
 * This script allows switching between different color themes.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Create theme switcher button
  const header = document.querySelector('header');
  const themeSwitcher = document.createElement('div');
  themeSwitcher.className = 'theme-switcher';
  themeSwitcher.innerHTML = `
    <button id="gruvbox-theme" class="theme-btn" title="Gruvbox Theme">Gruvbox</button>
    <button id="nord-theme" class="theme-btn" title="Nord Theme">Nord</button>
  `;
  
  // Add styles for the theme switcher
  const style = document.createElement('style');
  style.textContent = `
    .theme-switcher {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }
    
    .theme-btn {
      background-color: var(--bg-light);
      color: var(--text-color);
      border: 1px solid var(--accent-color);
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .theme-btn:hover {
      background-color: var(--accent-color);
      color: var(--bg-color);
    }
    
    .theme-btn.active {
      background-color: var(--accent-color);
      color: var(--bg-color);
    }
  `;
  document.head.appendChild(style);
  
  // Insert the theme switcher after the nav
  const nav = header.querySelector('nav');
  if (nav) {
    nav.after(themeSwitcher);
  } else {
    header.appendChild(themeSwitcher);
  }
  
  // Set initial active theme
  const currentTheme = localStorage.getItem('theme') || 'gruvbox';
  setTheme(currentTheme);
  document.getElementById(`${currentTheme}-theme`).classList.add('active');
  
  // Add event listeners to the theme buttons
  document.getElementById('gruvbox-theme').addEventListener('click', function() {
    setTheme('gruvbox');
    setActiveButton(this);
  });
  
  document.getElementById('nord-theme').addEventListener('click', function() {
    setTheme('nord');
    setActiveButton(this);
  });
  
  // Function to set the active theme
  function setTheme(theme) {
    const linkElement = document.querySelector('link[href^="styles/theme"]');
    if (linkElement) {
      // If there's already a theme, update it
      linkElement.href = `styles/theme${theme === 'gruvbox' ? '' : '-' + theme}.css`;
    } else {
      // Create a new link element if none exists
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = `styles/theme${theme === 'gruvbox' ? '' : '-' + theme}.css`;
      document.head.appendChild(newLink);
    }
    
    // Save the theme preference
    localStorage.setItem('theme', theme);
  }
  
  // Function to set the active button
  function setActiveButton(button) {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }
});