
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); 


    let form = event.target;
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let feedback = document.getElementById('feedback');

 
    let usernameRegex = /^[A-Za-z\s]{3,}$/; 
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

   
    form.classList.remove('was-validated');
    let valid = true;

    
    if (!username.value.trim() || !usernameRegex.test(username.value.trim())) {
      username.classList.add('is-invalid');
      valid = false;
    } else {
      username.classList.remove('is-invalid');
    }

    
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    
    if (!feedback.value.trim() || feedback.value.trim().length < 3) {
      feedback.classList.add('is-invalid');
      valid = false;
    } else {
      feedback.classList.remove('is-invalid');
    }

   
    if (valid) {
      let feedbackObject = {
        username: username.value,
        email: email.value,
        feedback: feedback.value
      };

      
      localStorage.setItem('userFeedback', JSON.stringify(feedbackObject));

      
      document.getElementById('successMessage').style.display = 'block';

   
      form.reset();
    } else {
      
      form.classList.add('was-validated');
    }
  });



