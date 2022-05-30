const modals = () => {
  const modalTimerId = setTimeout(() => {
    document.querySelector('.popup').classList.add('show');
    document.body.classList.add('overflow');
  }, 600000);

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    function closeModal(popupSelector) {
      const popup = document.querySelector(popupSelector);

      popup.classList.remove('show');
      document.body.classList.remove('overflow');
    }

    trigger.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.classList.add('show');
        document.body.classList.add('overflow');
        clearTimeout(modalTimerId);
      });
    });

    close.addEventListener('click', () => {
      closeModal(modalSelector);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modalSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal(modalSelector);
      }
    });
  }

  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  bindModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modals;
