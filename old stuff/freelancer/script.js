const form = document.querySelector('form');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === 'example' && password === 'password') {
    error.textContent = '';
    window.location.href = 'http://www.google.com';
  } else {
    error.textContent = 'Invalid username or password.';
  }
});
