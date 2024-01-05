const formList = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.form-input'),
  textarea: document.querySelector('.form-textarea'),
};

const localStorageKey = 'feedback-form-state';
const localFormData = JSON.parse(localStorage.getItem(localStorageKey));

if (localFormData !== null && localFormData !== undefined) {
  formList.input.value = localFormData.email;
  formList.textarea.value = localFormData.message;
}

formList.form.addEventListener('input', event => {
  const formData = {
    email: formList.input.value.trim(),
    message: formList.textarea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formList.form.addEventListener('submit', event => {
  event.preventDefault();
  const elemForm = event.target.elements;
  const formValue = {
    email: elemForm.email.value.trim(),
    message: elemForm.message.value.trim(),
  };

  if (
    elemForm.email.value.trim() !== '' &&
    elemForm.message.value.trim() !== ''
  ) {
    console.log(formValue);
    localStorage.removeItem(localStorageKey);
    formList.form.reset();
  }
});
