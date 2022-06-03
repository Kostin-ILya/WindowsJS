const modalsModule = (
  triggerSelector,
  modalSelector,
  closeSelector,
  openModalTimer,
  closeClickOverlay = true
) => {
  const trigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);
  const windows = document.querySelectorAll('[data-modal]');

  function closeAllModal() {
    windows.forEach((item) => {
      item.classList.remove('show');
    });

    document.body.classList.remove('overflow');
  }
  close.addEventListener('click', () => {
    closeAllModal();
  });

  // Скрытие модалки при нажатии на оверлей
  modal.addEventListener('click', (e) => {
    if (closeClickOverlay) {
      if (e.target === modal) {
        closeAllModal();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeAllModal();
    }
  });

  trigger.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      closeAllModal();

      modal.classList.add('show');
      document.body.classList.add('overflow');
      clearTimeout(openModalTimer);
    });
  });
};

export default modalsModule;
