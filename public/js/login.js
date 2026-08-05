const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            loginError.textContent = data.error || 'Login fehlgeschlagen.';
            return;
        }

        if (data.isAdmin) {
            window.location.href = '/html/admin.html';
        } else {
            window.location.href = '../../html/einrichtung.html';
        }
    } catch (err) {
        loginError.textContent = 'Verbindung zum Server fehlgeschlagen.';
    }
});
