import { createElement } from './utils.js';

export default () => {
    const homeTab = () => {
        const homeTab = createElement('div', ['flex', 'flex-col', 'mb-6'], '', 'homeTab');
        const homeHeadline = createElement('h1', ['text-2xl', 'text-white', 'p-6', 'text-center', 'bg-black/50', 'w-max', 'flex', 'mx-auto'], 'Restaurant de la Victoire');
        homeTab.appendChild(homeHeadline);

        const homeSubtext = createElement('p', ['text-lg', 'text-white', 'text-center', 'bg-black/50', 'w-max', 'flex', 'mx-auto'], 'Best restaurant from here to Mars and back');
        homeTab.appendChild(homeSubtext);

        const tabContentDiv = document.getElementById('tabContent');
        tabContentDiv.appendChild(homeTab);
    }

    homeTab();
}