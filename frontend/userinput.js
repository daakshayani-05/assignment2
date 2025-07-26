import React, { useState } from 'react';

const UserInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const send = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div style={{ marginTop: '10px', display: 'flex' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: '8px' }}
        onKeyDown={(e) => e.key === 'Enter' && send()}
      />
      <button onClick={send} style={{ marginLeft: '5px' }}>Send</button>
    </div>
  );
};

export default UserInput;
