const commandPalette = document.querySelector('main > div.modal');
const commandInput =  document.querySelector('main > div.modal > form input');

// As soon as we click on the list item in the command palette to change a theme...
theme.parentElement.parentElement.onclick = () => {
    if (theme.innerText === 'Light') {
        body.classList.replace('vscode-dark', 'vscode-light');
        localStorage.setItem('theme', 'vscode-light');
        theme.innerText = 'Dark';
    }
    else {
        body.classList.replace('vscode-light', 'vscode-dark');
        localStorage.setItem('theme', 'vscode-dark');
        theme.innerText = 'Light';
    }

    commandPalette.style.display = 'none';
}

document.onkeydown = event => {
    // If 'Escape' key was pressed...
    if (event.keyCode === 27)
        commandPalette.style.display = 'none';

    // If 'Ctrl + P' keys were pressed...
    if (event.ctrlKey && event.keyCode === 80) {
        commandPalette.style.display = 'block';
        commandInput.focus();
    }
};
