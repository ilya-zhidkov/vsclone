const mainSection = document.querySelector('body > main');
const sidebarIcons = document.querySelector('aside ul.icons');
const explorerSection = document.querySelector('section.explorer');
const extensionsSection = document.querySelector('section.extensions');

mainSection.style.cssText = 'grid-template-columns: auto 1fr;';

(function () {
    const icons = sidebarIcons.children;

    for (let index = 0; index < icons.length; index++) {
        icons.item(index).onclick = function() {
            if (!hasClass(this, 'active')) {
                [...icons].forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
            else {
                hideAllElements('aside section');
                this.classList.remove('active');
            } 

            if (!(hasClass(this, 'active') && hasClass(this.firstElementChild, 'fa-copy')))
                hideElement(explorerSection);
            else {
                hideAllElements('aside section');
                displayElement(explorerSection);
            }

            if (!(hasClass(this, 'active') && hasClass(this.firstElementChild, 'fa-shapes')))
                hideElement(extensionsSection);
            else {
                hideAllElements('aside section');
                displayElement(extensionsSection);
            }
        }
    }
})();
