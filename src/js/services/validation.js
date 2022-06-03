const validationPhoneInput = (inputSelector) => {
  const inputs = document.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '');
    });
  });
};

const OldvalidationPhoneInput = (inputSelector) => {
  const inputs = document.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener('keydown', function (event) {
      // Разрешаем: backspace, delete, tab и escape
      if (
        event.keyCode === 46 ||
        event.keyCode === 8 ||
        event.keyCode === 9 ||
        event.keyCode === 27 ||
        // Разрешаем: Ctrl+A
        (event.keyCode === 65 && event.ctrlKey === true) ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)
      ) {
        // Ничего не делаем
        return;
      } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if (
          (event.keyCode < 48 || event.keyCode > 57) &&
          (event.keyCode < 96 || event.keyCode > 105)
        ) {
          event.preventDefault();
        }
      }
    });
  });
};

export { validationPhoneInput, OldvalidationPhoneInput };
