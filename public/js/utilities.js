function hasClass(element, className) {
    return element.classList.contains(className);
}

function displayElement(element) {
    element.style.cssText = 'display: block;';
}

function hideElement(element) {
    element.style.cssText = 'display: none;';
}

function hideAllElements(selector) {
    document
        .querySelectorAll(selector)
        .forEach(element => element.style.cssText = 'display: none;');
}
