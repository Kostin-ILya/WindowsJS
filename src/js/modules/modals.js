function closeAllModal() {
  document.querySelectorAll('[data-modal]').forEach((item) => {
    item.classList.remove('show');
  });

  document.body.classList.remove('overflow');
}

const modalsModule = (state) => {
  const modalTimerId = setTimeout(() => {
    document.querySelector('.popup').classList.add('show');
    document.body.classList.add('overflow');
  }, 600000);

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    close.addEventListener('click', () => {
      closeAllModal();
    });

    // Скрытие модалки при нажатии на оверлей
    modal.addEventListener('click', (e) => {
      //  if (e.target === modal && closeClickOverlay)
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
        if (e.target.classList.contains('popup_calc_button')) {
          if (!state.width || !state.height) {
            return;
          }
        }
        if (e.target.classList.contains('popup_calc_profile_button')) {
          if (!state.profile) {
            return;
          }
        }

        if (e.target) {
          e.preventDefault();
        }
        closeAllModal();

        modal.classList.add('show');
        document.body.classList.add('overflow');
        clearTimeout(modalTimerId);
      });
    });
  }

  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close'
  );
  bindModal(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );
};

export { modalsModule, closeAllModal };
