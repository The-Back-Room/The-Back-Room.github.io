document.addEventListener("DOMContentLoaded", function () {
    if (!jtd) { return; }

    const toggleSchemeBtn = document.querySelector('.js-toggle-dark-mode');
    const unsetColorScheme = document.querySelector('.js-unset-color-scheme');

    // If the browser suggests a color scheme, and user hasn't saved/switch one yet..
    if (window.matchMedia && !localStorage['jtd-theme']) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            jtd.setTheme('dark');
            toggleSchemeBtn.textContent = '🔆 Light Mode';
            toggleSchemeBtn.ariaLabel = 'Switch to Light Mode';
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            jtd.setTheme('light');
            toggleSchemeBtn.textContent = '🌙 Dark Mode';
            toggleSchemeBtn.ariaLabel = 'Switch to Dark Mode';
        }
    } else if (localStorage['jtd-theme']) {
        jtd.setTheme(localStorage['jtd-theme']);
    }

    jtd.addEvent(toggleSchemeBtn, 'click', function () {
        if (jtd.getTheme() === 'dark') {
            localStorage['jtd-theme'] = 'light';
            jtd.setTheme('light');
            toggleSchemeBtn.textContent = '🌙 Dark Mode';
            toggleSchemeBtn.ariaLabel = 'Switch to Dark Mode';
        } else {
            jtd.setTheme('dark');
            localStorage['jtd-theme'] = 'dark';
            toggleSchemeBtn.textContent = '🔆 Light Mode';
            toggleSchemeBtn.ariaLabel = 'Switch to Light Mode';
        }
    });

    // Add a way to unset the saved theme.
    // "default" respect's the site config setting, but not the user browser pref
    // So, check the pref and set the theme to the preferred one, if possible.
    jtd.addEvent(unsetColorScheme, 'click', function () {
        delete localStorage['jtd-theme'];

        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                jtd.setTheme('dark');
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                jtd.setTheme('light');
            }
        } else {
            jtd.setTheme('default');
        }
    });
});