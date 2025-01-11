  function setToggleText() {
    const toggleSchemeBtn = document.querySelector('.js-toggle-dark-mode');
    if (jtd.getTheme() === 'dark') {
      toggleSchemeBtn.textContent = '🔆';
      toggleSchemeBtn.ariaLabel = 'Switch to Light Mode';
    } else {
      toggleSchemeBtn.textContent = '🌙';
      toggleSchemeBtn.ariaLabel = 'Switch to Dark Mode';
    }
  }

// If the browser suggests a color scheme, and user hasn't saved/switch one yet..
    if (window.matchMedia && !localStorage['jtd-theme']) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        jtd.setTheme('dark');
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        jtd.setTheme('light');
      }
    } else if (localStorage['jtd-theme']) {
      jtd.setTheme(localStorage['jtd-theme']);
    }

    setToggleText();

    jtd.addEvent(toggleSchemeBtn, 'click', function() {
      if (jtd.getTheme() === 'dark') {
        localStorage['jtd-theme'] = 'light';
        jtd.setTheme('light');
      } else {
        jtd.setTheme('dark');
        localStorage['jtd-theme'] = 'dark';
      }
      setToggleText();
    });
...
