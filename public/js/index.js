const theme = document.querySelector('span.color-theme');
const body = document.body;

body.onload = () => {
    if (body.classList.contains('vscode-light'))
        theme.innerText = 'Dark';
    else
        theme.innerText = 'Light';
};
