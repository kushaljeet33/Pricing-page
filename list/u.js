document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
