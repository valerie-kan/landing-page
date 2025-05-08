const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textarea = document.getElementById('comment');
const button = document.querySelector('.form-btn');
const form = document.querySelector('.form-wrapper');

let nameTouched = false;
let emailTouched = false;
let commentTouched = false;

const isValid = () => {
  const isFormValid =
    nameInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    textarea.value.trim() !== '';

  button.disabled = !isFormValid;

  button.classList.toggle('disabled', !isFormValid);
};

const validateName = () => {
  const error = document.getElementById('errName');
  const value = nameInput.value.trim();

  if (nameTouched && value === '') {
    nameInput.classList.add('invalid');
    error.style.display = 'block';
  } else {
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
    error.style.display = 'none';
  }

  isValid();
};

const validateEmail = () => {
  const error = document.getElementById('errEmail');
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailTouched && (value === '' || !emailRegex.test(value))) {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    error.style.display = 'block';
  } else {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    error.style.display = 'none';
  }

  isValid();
};

const validateComment = () => {
  const error = document.getElementById('errComment');
  const value = textarea.value;

  if (commentTouched && value === '') {
    textarea.classList.add('invalid');
    error.style.display = 'block';
  } else {
    textarea.classList.remove('invalid');
    textarea.classList.add('valid');
    error.style.display = 'none';
  }

  isValid();
};

nameInput.addEventListener('blur', () => {
  nameTouched = true;
  validateName();
});

nameInput.addEventListener('input', validateName);

emailInput.addEventListener('blur', () => {
  emailTouched = true;
  validateEmail();
});

emailInput.addEventListener('input', validateEmail);

textarea.addEventListener('blur', () => {
  commentTouched = true;
  validateComment();
});

textarea.addEventListener('input', validateComment);

form.addEventListener('submit', e => {
  e.preventDefault();
  isValid();

  if (button.disabled) {
    nameInput.classList.add('invalid');
    emailInput.classList.add('invalid');
    textarea.classList.add('invalid');
  } else {
    form.reset();
    nameInput.classList.remove('valid');
    emailInput.classList.remove('valid');
    textarea.classList.remove('valid');
  }
});
