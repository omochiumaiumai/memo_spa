import React from 'react';

const Memo = ({ content }) => {
  const firstLine = content.split('\n')[0];
  return (
    <div>
      <p>{firstLine}</p>
    </div>
  );
};

export default Memo;
