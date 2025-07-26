import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default MessageList;
