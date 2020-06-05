const theme = document.querySelector('span.color-theme');
const currentTheme = localStorage.getItem('theme');
const body = document.body;

body.onload = () => {
    if (currentTheme)
        body.classList.replace(body.className, currentTheme);
    if (body.classList.contains('vscode-light'))
        theme.innerText = 'Dark';
    else
        theme.innerText = 'Light';
};
