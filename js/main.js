'use strict'
console.log('work');

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onMainScreen() {
    var elModal = document.querySelector('.modal');
    console.log('object :>> ', elModal.style.display);
    if (elModal.style.display === 'none') {
        toggleMenu();
    }
}


function openModal() {
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'block';
    document.body.classList.toggle('modal-open');
}

function closeModal() {
    var elModal = document.querySelector('.modal');
    if (elModal.style.display === 'block') document.body.classList.toggle('modal-open');
    elModal.style.display = 'none';
}