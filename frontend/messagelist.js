import React from 'react';

const Message = ({ sender, text }) => {
  const isUser = sender === 'user';
  return (
    <div style={{
      textAlign: isUser ? 'right' : 'left',
      margin: '5px 0',
      padding: '6px 12px',
      borderRadius: '15px',
      backgroundColor: isUser ? '#cce5ff' : '#e2ffe2',
      display: 'inline-block'
    }}>
      {text}
    </div>
  );
};

export default Message;
