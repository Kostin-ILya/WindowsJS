import { postData } from '../services/services';
import { validationPhoneInput } from '../services/validation';

const formsModule = (formSelector) => {
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
    }, 5000);

    return statusMessage;
  }

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      const statusLoadingImg = document.createElement('img');
      statusLoadingImg.src = messages.loading;
      statusLoadingImg.classList.add('statusLoadingImg');
      form.append(statusLoadingImg);

      postData('https://jsonplaceholder.typicode.com/posts', json)
        .then((data) => {
          console.log(data);
          statusLoadingImg.remove();
          form.append(showStatusMessage(messages.success));
        })
        .catch(() => {
          statusLoadingImg.remove();
          form.append(showStatusMessage(messages.failure));
        })
        .finally(() => {
          form.reset();
        });
    });
  });

  validationPhoneInput('[name="user_phone"]');
};

export default formsModule;
