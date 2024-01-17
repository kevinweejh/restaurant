export const createElement = (element, classList, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(...classList);
    newElement.innerText = content;
    return newElement;
}