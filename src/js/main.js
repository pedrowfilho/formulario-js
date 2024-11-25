document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = 'campo obrigatório';
    
    const fields = [
      { id: 'name', message: message },
      { id: 'email', message: message },
      { id: 'phone', message: message },
      { id: 'message', message: message }
    ];

    let isValid = true;
  
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorMessage = input.nextElementSibling;

      if (!input.value.trim()) {
        input.classList.remove('success');
        input.classList.add('error');
        errorMessage.textContent = field.message;
        errorMessage.style.display = 'block';
        isValid = false;
      } else {
        input.classList.remove('error');
        input.classList.add('success');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
      }
    });
  
    if (isValid) {
      alert('Formulário enviado com sucesso!');
    }
  });
  