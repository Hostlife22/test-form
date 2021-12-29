const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const onInputChange = () =>
  formElem.reportValidity()
    ? submitBtnElem.removeAttribute('disabled')
    : submitBtnElem.setAttribute('disabled', true);

const clearForm = () => {
  formElem.reset();
};

const createUser = formData => {
  const baseUrl = 'https://61c8c4dcadee460017260de8.mockapi.io/form';

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      clearForm();
    });
};

const onSubmitForm = e => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  createUser(formData);
};

formElem.addEventListener('keyup', onInputChange);
formElem.addEventListener('submit', onSubmitForm);
