const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const { requireLoginPage, requireAdminPage } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: '87eb34509643c468115d77f0b4af7d54a3dce336fad1565d1fd80707833723f0', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 
    }
}));

app.get('/html/admin.html', requireAdminPage, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/admin.html'));
});

// Statische Dateien (css, js, img, restliche html)
app.use(express.static(path.join(__dirname, 'public')));

// API-Routen
app.use('/api', authRoutes);
app.use('/api/admin', adminRoutes);

// Startseite -> Login
app.get('/', (req, res) => {
    res.redirect('/html/login.html');
});

app.listen(PORT, () => {
    console.log(`KlassenNova läuft auf http://localhost:${PORT}`);
});
