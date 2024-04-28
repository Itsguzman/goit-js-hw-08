import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailForm = document.querySelector('label [name="email"]');
const messageForm = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    emailForm.value = savedMessage.email;
    messageForm.value = savedMessage.message;
  }
}

onPageReload();

function onFormInput() {
  const email = emailForm.value;
  const message = messageForm.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const email = emailForm.value;
  const message = messageForm.value;

  if (email == '' || message == '') {
    alert('Please fill-out all inputs');
    form.reset();
    return;
  }
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('submit', onFormSubmit);
