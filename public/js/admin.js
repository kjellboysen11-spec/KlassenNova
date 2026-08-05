const userTableBody = document.getElementById('userTableBody');
const totalUsersEl = document.getElementById('totalUsers');
const totalAdminsEl = document.getElementById('totalAdmins');
const adminEmailEl = document.getElementById('adminEmail');
const logoutBtn = document.getElementById('logoutBtn');

let currentUserId = null;

async function loadMe() {
    const res = await fetch('/api/me');
    if (!res.ok) {
        window.location.href = '/html/login.html';
        return;
    }
    const data = await res.json();
    currentUserId = data.id;
    adminEmailEl.textContent = data.email;
}

async function loadUsers() {
    const res = await fetch('/api/admin/users');
    if (!res.ok) {
        window.location.href = '/html/login.html';
        return;
    }
    const data = await res.json();
    renderUsers(data.users);
}

function renderUsers(users) {
    totalUsersEl.textContent = users.length;
    totalAdminsEl.textContent = users.filter(u => u.isAdmin).length;

    userTableBody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');

        const date = new Date(user.createdAt).toLocaleDateString('de-DE');

        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${escapeHtml(user.email)}</td>
            <td><span class="roleBadge ${user.isAdmin ? 'admin' : 'user'}">${user.isAdmin ? 'Admin' : 'User'}</span></td>
            <td>${date}</td>
            <td>
                <button class="deleteBtn" data-id="${user.id}" ${user.isAdmin ? 'disabled title="Admins können nicht gelöscht werden"' : ''}>
                    Löschen
                </button>
            </td>
        `;

        userTableBody.appendChild(tr);
    });

    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', handleDelete);
    });
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function handleDelete(e) {
    const id = e.target.dataset.id;
    if (!confirm('Diesen User wirklich löschen?')) return;

    const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
    const data = await res.json();

    if (!res.ok) {
        alert(data.error || 'Löschen fehlgeschlagen.');
        return;
    }

    loadUsers();
}

logoutBtn.addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/html/login.html';
});

loadMe();
loadUsers();
