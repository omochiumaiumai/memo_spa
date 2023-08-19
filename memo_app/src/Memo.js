import React from 'react';

const Memo = ({ content, onClick }) => {
  const firstLine = content.split('\n')[0];
  return (
    <div onClick={onClick}>
      <li>{firstLine}</li>
    </div>
  );
};

export default Memo;
