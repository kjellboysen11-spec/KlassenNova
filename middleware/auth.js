function requireLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    return res.status(401).json({ error: 'Nicht eingeloggt.' });
}

function requireAdmin(req, res, next) {
    if (req.session && req.session.userId && req.session.isAdmin) {
        return next();
    }
    return res.status(403).json({ error: 'Kein Admin-Zugriff.' });
}

// Für den Schutz von HTML-Seiten (Redirect statt JSON-Fehler)
function requireLoginPage(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    return res.redirect('/html/login.html');
}

function requireAdminPage(req, res, next) {
    if (req.session && req.session.userId && req.session.isAdmin) {
        return next();
    }
    return res.redirect('/html/login.html');
}

module.exports = { requireLogin, requireAdmin, requireLoginPage, requireAdminPage };
