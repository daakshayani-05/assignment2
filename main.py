from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3
from datetime import datetime

app = FastAPI()

# Define request body format
class ChatRequest(BaseModel):
    user_id: str
    message: str

@app.post("/chat")
def chat(req: ChatRequest):
    # Step 1: Connect to DB
    conn = sqlite3.connect("ecommerce.db")
    cursor = conn.cursor()

    # Step 2: Start session (if not already started)
    cursor.execute("INSERT INTO chat_sessions (user_id) VALUES (?)", (req.user_id,))
    session_id = cursor.lastrowid

    # Step 3: Save user message
    cursor.execute(
        "INSERT INTO messages (session_id, message, sender) VALUES (?, ?, ?)",
        (session_id, req.message, "user")
    )

    # Step 4: Generate dummy response (we'll use AI in next step)
    response_text = "Hello! I’m your shopping assistant 🤖. How can I help you today?"

    # Step 5: Save bot message
    cursor.execute(
        "INSERT INTO messages (session_id, message, sender) VALUES (?, ?, ?)",
        (session_id, response_text, "bot")
    )

    # Step 6: Commit and close
    conn.commit()
    conn.close()

    return {"response": response_text}
