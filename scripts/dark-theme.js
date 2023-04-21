let darkMode = localStorage.getItem('darkMode');
const toggleTheme = document.getElementById('icon-toggle-theme');
const logoText = document.getElementById('logo-text');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    toggleTheme.src = "assets/icons/sun.svg";
    logoText.src = "assets/images/Logo-TxCrypt-Text-White.svg"
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
    toggleTheme.src = "assets/icons/moon.svg";
    logoText.src = "assets/images/Logo-TxCrypt-Text-Black.svg"
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