import { postData } from '../services/services';
import { validationNumInput } from '../services/validation';
import { closeAllModal } from './modals';

const formsModule = (state) => {
  function bindForm(formSelector) {
    const forms = document.querySelectorAll(formSelector);
    const messages = {
      loading: 'assets/img/form/spinner.svg',
      success: 'Спасибо! Ожидайте, мы с Вами свяжемся',
      failure: 'Что-то пошло не так',
    };

    function showStatusMessage(message) {
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message;

      setTimeout(() => {
        statusMessage.remove();
      }, 3000);

      return statusMessage;
    }

    forms.forEach((item) => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(item);
        if (item.dataset.calc === 'end') {
          for (let key in state) {
            formData.append(key, state[key]);
          }
        }

        const statusLoadingImg = document.createElement('img');
        statusLoadingImg.src = messages.loading;
        statusLoadingImg.classList.add('statusLoadingImg');
        item.append(statusLoadingImg);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        postData('https://jsonplaceholder.typicode.com/posts', json)
          .then((data) => {
            console.log(data);
            statusLoadingImg.remove();
            item.append(showStatusMessage(messages.success));
          })
          .catch(() => {
            statusLoadingImg.remove();
            item.append(showStatusMessage(messages.failure));
          })
          .finally(() => {
            item.reset();
            setTimeout(closeAllModal, 3000);
            for (let key in state) {
              delete state[key];
            }
          });
      });
    });

    validationNumInput('[name="user_phone"]');
  }

  bindForm('.form');
};

export default formsModule;
