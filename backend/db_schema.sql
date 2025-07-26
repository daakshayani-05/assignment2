
CREATE TABLE IF NOT EXISTS chat_sessions (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price REAL,
    stock INTEGER
);

CREATE TABLE IF NOT EXISTS chat_sessions (
    id INTEGER PRIMARY KEY,
    user_id TEXT,
    start_time DATETIME DEFAULT
CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY,
    session_id INTEGER,
    message TEXT NOT NULL,
    sender TEXT CHECK(sender IN('user','bot')),
    timestamp DATETIME DEFAULT
CURRENT_TIMESTAMP,
    FOREIGN KEY(session_id)REFERENCES
chat_sessions(id)
);