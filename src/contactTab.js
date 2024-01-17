import { createElement } from './utils.js';

export default () => {
    const contactTab = () => {
        const contactTab = createElement('div', ['flex', 'flex-col', 'mb-6'], '', 'contactTab');

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(contactTab);
    }

    contactTab();
}