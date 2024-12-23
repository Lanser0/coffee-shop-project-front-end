const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Toggle between login and register forms
loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#4d3b2177";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
});

// Show the register form when "Sign Up" is clicked
registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#4d3b2177";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
});

// Handle login form submission and redirection
const loginFormSubmitBtn = document.querySelector(".login-form button");
loginFormSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    window.location.href = "home.html"; // Redirect to dashboard page after successful login
});
