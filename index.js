const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./ecommerce.db', (err) => {
  if (err) {
    console.error('❌ Could not connect to database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database.');
  }
});

app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/chat/start', (req, res) => {
  const { user_id } = req.body;

  const sql = `INSERT INTO chat_sessions (user_id) VALUES (?)`;
  db.run(sql, [user_id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ session_id: this.lastID });
    }
  });
});

app.post('/api/chat/message', (req, res) => {
  const { session_id, message, sender } = req.body;

  const sql = `INSERT INTO messages (session_id, message, sender) VALUES (?, ?, ?)`;
  db.run(sql, [session_id, message, sender], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message_id: this.lastID });
    }
  });
});

app.get('/api/chat/messages/:session_id', (req, res) => {
  const sessionId = req.params.session_id;

  db.all(
    `SELECT * FROM messages WHERE session_id = ? ORDER BY timestamp ASC`,
    [sessionId],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
