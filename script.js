'use strict';

const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modalBox = document.querySelector('.modal');

function showModal() {
  modalBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', showModal);
}
function closeModal() {
  modalBox.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalBox.classList.contains('hidden')) {
    closeModal();
  }
});
