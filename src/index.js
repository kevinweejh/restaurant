import './style.css';
import InitialPageLoad from './initialPageLoad.js';
import TabBar from './tabBar.js';
import TabContent from './tabContent.js';
import HomeTab from './homeTab.js';
import MenuTab from './menuTab.js';
import ContactTab from './contactTab.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

InitialPageLoad();

const { homeTabBtn, menuTabBtn, contactTabBtn } = TabBar();

TabContent();
HomeTab();
MenuTab();
ContactTab();

const tabSwitching = () => {
    const tabBtns = document.querySelectorAll('[id$="Btn"]');
    tabBtns.forEach((btn) => {
        console.log(btn);
        btn.addEventListener('click', () => {
            document.getElementById(btn.id.slice(0,-3)).classList.toggle('hidden');
        })
    })
}

tabSwitching();