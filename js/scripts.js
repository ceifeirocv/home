

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const form = document.getElementById('contactForm')
  console.log(form);
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')
    } else {
      event.preventDefault()

      const formData = new FormData();
      formData.append(
          'name',
          document.getElementById('name').value
      )
      formData.append(
          'email',
          document.getElementById('email').value
      )
      formData.append(
          'phone',
          document.getElementById('phone').value
      )
      formData.append(
          'message',
          document.getElementById('message').value
      )
      
      fetch("https://getform.io/f/2c655970-b505-497b-8337-196f69fe28e4",
      {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json",
          },
      })
      .then(response => {
        document.getElementById('submitSuccessMessage').classList.remove("d-none");
        setTimeout(() => {
          document.getElementById('submitSuccessMessage').classList.add("d-none")
          document.getElementById('name').value = ''
          document.getElementById('email').value = ''
          document.getElementById('phone').value = ''
          document.getElementById('message').value = ''
          form.classList.remove('was-validated')
        }, "5000");
      })
      .catch(error =>{
        document.getElementById('submitErrorMessage').classList.remove("d-none");
      })
    }
  }, false)
