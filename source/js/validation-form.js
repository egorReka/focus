const formElement = document.querySelector('.dialog__form');
const inputElements = formElement.querySelectorAll('.input');
const buttonElement = formElement.querySelector('.dialog__button');

const patterns = {
  name: {
    pattern: /^[a-zA-Zа-яА-Я]+$/,
    errorMessages: 'Имя может содержать только буквы.',
  },
  phone: {
    pattern: /^((\(\d{3}\)|\d{3})\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2})$/,
    errorMessages: 'Не корректный номер телефона.',
  },
  age: {
    pattern: /^[1-9]|^[1-9][0-9]$/,
    errorMessages: 'Не корректный возраст.',
  },
};

const empty = 'Заполните поле.';
const validationInputs = () => {
  inputElements.forEach((input) => {
    input.addEventListener('input', ({ target }) => {
      const { name, value } = target;

      if (!value) {
        input.classList.add('dialog__input--error');
        input.setCustomValidity(empty);
        buttonElement.disabled = true;

        return;
      }

      input.classList.remove('dialog__input--error');
      input.setCustomValidity('');
      buttonElement.disabled = false;

      if (!patterns[name].pattern.test(value)) {
        input.classList.add('dialog__input--error');
        input.setCustomValidity(patterns[name].errorMessages);
        buttonElement.disabled = true;

        return;
      }

      input.classList.remove('dialog__input--error');
      input.setCustomValidity('');
      buttonElement.disabled = false;
    });
  });
};

function initFormValidation(sendMessage) {
  validationInputs();

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!formElement.checkValidity()) {
      return;
    }

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    sendMessage(`
      <strong>Новая заявка</strong>\nИмя: <b>${data.name}</b>\nВозраст: <b>${data.age}</b>\nТелефон: <code>+7 ${data.phone}</code>\n${data.teacher ? `Преподаватель: ${data.teacher}\n` : ''}${data.direction ? `Направление: ${data.direction}\n` : ''}
    `);

    formElement.reset();
  });

}

export { initFormValidation };
