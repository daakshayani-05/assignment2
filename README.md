# Customer support chatbot for e-Commerce clothing site
## 🚀 Features

- 💬 **Chatbot** that supports natural language product inquiries
- 📦 **Product catalog** stored in SQLite3 with categories, prices, and stock
- 💾 **Session tracking** for chat history across multiple users
- ⚛️ **React frontend** with dynamic chat interface and product UI
- 🌐 **REST API** or WebSocket backend
- 🐳 **Dockerized** full stack environment for easy deployment
---
## Tech Stack

| Layer        | Tech              |
|--------------|-------------------|
| Frontend     | React, Vite, Axios|
| Backend      | Flask (or Node.js)|
| Database     | SQLite3           |
| Container    | Docker            |

---
## Project Structure
├── backend/
│ ├── app.py (or index.js)
│ ├── db_schema.sql
│ ├── ecommerce.db
│ └── requirements.txt / package.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Chatbot.jsx
│ │ │ └── ProductCard.jsx
│ │ └── App.jsx
│ └── package.json
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md

