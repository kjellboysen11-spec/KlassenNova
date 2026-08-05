const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'users.json');

// Stellt sicher, dass die Datei existiert
function ensureDb() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], nextId: 1 }, null, 2));
    }
}

function readDb() {
    ensureDb();
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
}

function writeDb(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function getAllUsers() {
    return readDb().users;
}

function findUserByEmail(email) {
    const db = readDb();
    return db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

function findUserById(id) {
    const db = readDb();
    return db.users.find(u => u.id === id);
}

function createUser({ email, passwordHash, isAdmin = false }) {
    const db = readDb();

    if (db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error('EMAIL_EXISTS');
    }

    // Der allererste registrierte User wird automatisch Admin
    const makeAdmin = db.users.length === 0 ? true : isAdmin;

    const user = {
        id: db.nextId,
        email,
        password: passwordHash,
        isAdmin: makeAdmin,
        createdAt: new Date().toISOString()
    };

    db.users.push(user);
    db.nextId += 1;
    writeDb(db);

    return user;
}

function deleteUser(id) {
    const db = readDb();
    const before = db.users.length;
    db.users = db.users.filter(u => u.id !== id);
    writeDb(db);
    return db.users.length < before;
}

module.exports = {
    getAllUsers,
    findUserByEmail,
    findUserById,
    createUser,
    deleteUser
};
