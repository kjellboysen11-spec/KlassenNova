const express = require('express');
const db = require('../db');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /api/admin/users
router.get('/users', requireAdmin, (req, res) => {
    const users = db.getAllUsers().map(u => ({
        id: u.id,
        email: u.email,
        isAdmin: u.isAdmin,
        createdAt: u.createdAt
    }));
    res.json({ users });
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', requireAdmin, (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (id === req.session.userId) {
        return res.status(400).json({ error: 'Du kannst dich nicht selbst löschen.' });
    }

    const deleted = db.deleteUser(id);
    if (!deleted) {
        return res.status(404).json({ error: 'User nicht gefunden.' });
    }
    res.json({ success: true });
});

module.exports = router;
