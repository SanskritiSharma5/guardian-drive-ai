/* ============================================
   GuardianDrive AI — Express Server
   ============================================ */

const express = require('express');
const cors = require('cors');
const path = require('path');
const { initialize } = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// ---- Serve static frontend files ----
app.use(express.static(path.join(__dirname)));

// ---- API Routes ----
app.use('/api/auth', require('./routes/auth'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/alerts', require('./routes/alerts'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/contacts', require('./routes/contacts'));

// ---- Health check ----
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'GuardianDrive AI Backend', timestamp: new Date().toISOString() });
});

// ---- Catch-all: serve index.html ----
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ---- Initialize DB then start server ----
initialize().then(() => {
    app.listen(PORT, () => {
        console.log(`
╔══════════════════════════════════════════╗
║   🚗 GuardianDrive AI Backend Server    ║
║──────────────────────────────────────────║
║   Running on: http://localhost:${PORT}      ║
║   API Base:   http://localhost:${PORT}/api  ║
║   Database:   SQLite (guardiandrive.db)  ║
╚══════════════════════════════════════════╝
        `);
    });
}).catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
});

module.exports = app;
