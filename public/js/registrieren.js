const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    registerError.textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    if (password !== passwordConfirm) {
        registerError.textContent = 'Passwörter stimmen nicht überein.';
        return;
    }

    try {
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            registerError.textContent = data.error || 'Registrierung fehlgeschlagen.';
            return;
        }

        if (data.isAdmin) {
            window.location.href = '/html/admin.html';
        } else {
            window.location.href = '../../html/einrichtung.html';
        }
    } catch (err) {
        registerError.textContent = 'Verbindung zum Server fehlgeschlagen.';
    }
});
