const form = document.getElementById("contact-form");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input);
      isValid = false;
    } else {
      showSuccess(input);
    }
  });

  if (isValid) {
    alert('Formulario enviado com sucesso!');
  }
}

function showError(input) {
  input.style.borderColor = "red";

  const errorMessage = input.nextElementSibling;

  if (errorMessage) {
    errorMessage.style.display = "block";
  }
}

function showSuccess(input) {
  input.style.borderColor = "green";

  const errorMessage = input.nextElementSibling;

  if (errorMessage) {
    errorMessage.style.display = "none";
  }
}
