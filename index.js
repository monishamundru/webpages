const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    //example validation
    /* if (username.trim() === '' || password.trim === '') {
         alert('Please enter username and password');
         return;*/

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Validate password length
    if (password.length < 9) {
        alert("Password must be at least 9 characters long.");
        return;
    }

    // Simulated login
    if (username === 'admin' && password === 'passwords') {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});