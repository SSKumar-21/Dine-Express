// Event listener for the signup form
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Save user data to local storage
    localStorage.setItem(email, password);
    alert('Signup successful! You can now log in.');
});

// Event listener for the login form
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists and password matches
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
        alert('Login successful! Welcome back!');
        // Redirect to another page or perform another action
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
