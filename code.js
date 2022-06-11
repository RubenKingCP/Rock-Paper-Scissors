const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const startWrapper = document.querySelector('#startWrapper');
yesBtn.addEventListener('click', () => {
    startWrapper.remove();
} );
noBtn.addEventListener('click', () => {
    noBtn.remove();
} );

