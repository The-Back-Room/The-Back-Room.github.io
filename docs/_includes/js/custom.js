window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
      jtd.setTheme('dark');
  } else {
      jtd.setTheme('light');
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    jtd.setTheme('dark');
}

const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = '🌙 Dark';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = '☀️ Light';
  }
});
