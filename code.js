const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
const startWrapper = document.querySelector('#start-wrapper');
yesBtn.addEventListener('click', () => {
    startWrapper.remove();
} );
noBtn.addEventListener('click', () => {
    noBtn.remove();
} );