import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const container = document.getElementById('content');
container.classList.add("bg-[url('./restaurant.jpg')]", 'h-screen');

const headline = document.createElement('h1');
headline.classList.add('text-2xl', 'text-white', 'p-6', 'text-center');
headline.innerText = 'Restaurant de la Victoire';

container.appendChild(headline);