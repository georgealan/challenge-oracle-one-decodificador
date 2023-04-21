let darkMode = localStorage.getItem('darkMode');
const toggleTheme = document.getElementById('icon-toggle-theme');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    toggleTheme.src = "assets/icons/sun.svg";
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
    toggleTheme.src = "assets/icons/moon.svg";
}

if(darkMode === 'enabled') {
    enableDarkMode();
}

toggleTheme.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})