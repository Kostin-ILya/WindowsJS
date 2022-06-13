function closeAllModal(selector, activeClass, overflowClass) {
  document.querySelectorAll(selector).forEach((item) => {
    item.classList.remove(activeClass);
  });

  document.body.classList.remove(overflowClass);
  document.body.style.marginRight = '';
}

const modalsModule = (activeClass, showModalTimer, state) => {
  const showModalByTime = setTimeout(() => {
    document.querySelector('.popup').classList.add(activeClass);
    document.body.classList.add('overflow');
  }, showModalTimer);
  function calcScroll() {
    const div = document.createElement('div');
    div.style.cssText = `
    width: 50px;
    height: 50px;
    overflow: scroll;
    visivility: hidden;  
   `;
    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

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
      closeAllModal('[data-modal]', 'show', 'overflow');
    });

    // Скрытие модалки при нажатии на оверлей
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        if (e.target === modal) {
          closeAllModal('[data-modal]', 'show', 'overflow');
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains(activeClass)) {
        closeAllModal('[data-modal]', 'show', 'overflow');
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
        closeAllModal('[data-modal]', 'show', 'overflow');

        modal.classList.add(activeClass);
        document.body.classList.add('overflow');
        document.body.style.marginRight = `${calcScroll()}px`; // Для того чтобы не прыгала страница
        clearTimeout(showModalByTime);
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
    '.popup_calc_profile_close',
    false
  );
  bindModal(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );
};

export { modalsModule, closeAllModal };
