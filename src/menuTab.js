import { createElement } from './utils.js';

export default () => {
    const menuTab = () => {
        const menuTab = createElement('div', ['flex', 'flex-col', 'mb-6'], '', 'menuTab');

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(menuTab);
    }

    menuTab();
}