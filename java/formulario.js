document.addEventListener('DOMContentLoaded', function() {
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const categorySelect = document.getElementById('category');
    const mujerOrgsDiv = document.getElementById('mujer-orgs');
    const ninezOrgsDiv = document.getElementById('ninez-orgs');

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    categorySelect.addEventListener('change', function() {
        if (categorySelect.value === 'mujer') {
            mujerOrgsDiv.classList.remove('hidden');
            ninezOrgsDiv.classList.add('hidden');
        } else if (categorySelect.value === 'ninez') {
            ninezOrgsDiv.classList.remove('hidden');
            mujerOrgsDiv.classList.add('hidden');
        } else {
            mujerOrgsDiv.classList.add('hidden');
            ninezOrgsDiv.classList.add('hidden');
        }
    });
});