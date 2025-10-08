 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');     
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        usernameError.textContent = '';     
        emailError.textContent = '';
        passwordError.textContent = ''; 
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        }   else if (usernameInput.value.length < 3) {  
            usernameError.textContent = 'Username must be at least 3 characters.';
            isValid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';  
            isValid = false;
        }   else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Email is not valid.';
            isValid = false;
        }   
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        }   else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        }   
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }   
    });
});