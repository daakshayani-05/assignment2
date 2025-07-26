import React, { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import axios from 'axios';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const newUserMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, newUserMsg]);

    // Send to backend
    const res = await axios.post('http://127.0.0.1:8000/chat', {
      user_id: 'archana_01',
      message: text
    });

    const newBotMsg = { sender: 'bot', text: res.data.response };
    setMessages((prev) => [...prev, newBotMsg]);
  };

  return (
    <div style={styles.container}>
      <MessageList messages={messages} />
      <UserInput onSend={handleSend} />
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    background: '#f5f5f5'
  }
};

export default ChatWindow;
