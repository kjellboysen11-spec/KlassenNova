const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');

const router = express.Router();

// POST /api/register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email und Passwort werden benötigt.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'Passwort muss mindestens 6 Zeichen lang sein.' });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = db.createUser({ email, passwordHash });

        req.session.userId = user.id;
        req.session.isAdmin = user.isAdmin;

        return res.json({ success: true, isAdmin: user.isAdmin });
    } catch (err) {
        if (err.message === 'EMAIL_EXISTS') {
            return res.status(409).json({ error: 'Diese Email ist bereits registriert.' });
        }
        console.error(err);
        return res.status(500).json({ error: 'Serverfehler bei der Registrierung.' });
    }
});

// POST /api/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email und Passwort werden benötigt.' });
    }

    const user = db.findUserByEmail(email);
    if (!user) {
        return res.status(401).json({ error: 'Email oder Passwort falsch.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ error: 'Email oder Passwort falsch.' });
    }

    req.session.userId = user.id;
    req.session.isAdmin = user.isAdmin;

    return res.json({ success: true, isAdmin: user.isAdmin });
});

// POST /api/logout
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.json({ success: true });
    });
});

// GET /api/me
router.get('/me', (req, res) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ loggedIn: false });
    }
    const user = db.findUserById(req.session.userId);
    if (!user) {
        return res.status(401).json({ loggedIn: false });
    }
    return res.json({
        loggedIn: true,
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    });
});

module.exports = router;
