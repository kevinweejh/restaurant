import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const container = document.getElementById('content');
container.classList.add("bg-[url('./restaurant.jpg')]", 'h-screen', 'flex', 'flex-col');

const headline = document.createElement('h1');
headline.classList.add('text-2xl', 'text-white', 'p-6', 'text-center', 'bg-black/50', 'w-max', 'flex', 'mx-auto');
headline.innerText = 'Restaurant de la Victoire';

const copy = document.createElement('p');
copy.classList.add('text-lg', 'text-white', 'text-center', 'bg-black/50', 'w-max', 'flex', 'mx-auto');
copy.innerText = 'Best restaurant from here to Mars and back';

container.appendChild(headline);
container.appendChild(copy);