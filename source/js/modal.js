const modal = document.querySelector('#dialog');
const buttonCloseModal = modal.querySelector('#modal-close');

function openModal() {
  modal.showModal();
  document.body.style.overflow = 'hidden';
  buttonCloseModal.addEventListener('click', closeModal);
  modal.addEventListener('click', closeOnBackDropClick);
}

function closeModal() {
  modal.close();
  document.body.style.overflow = 'visible';
  buttonCloseModal.removeEventListener('click', closeModal);
  modal.removeEventListener('click', closeOnBackDropClick);
}

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;

  if (isClickedOnBackDrop) {
    closeModal();
  }
}

function setModal(openModalElement) {
  openModalElement.addEventListener('click', openModal);
}

export { setModal };
