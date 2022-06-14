const yesBtn = document.querySelector('#yesBtn');

const noBtn = document.querySelector('#noBtn');

const startWrapper = document.querySelector('#startWrapper');

const gamePage = document.querySelector('#mainWrapper');

yesBtn.addEventListener('click', () => {
    startWrapper.remove();
} );

noBtn.addEventListener('click', () => {
    noBtn.remove();
} );

