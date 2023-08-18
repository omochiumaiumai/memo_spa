import React, { useState } from 'react';
import Button from './Button';

const MemoForm = () => {
  const [newMemoContent, setNewMemoContent] = useState('');

  const handleNewMemoChange = (event) => {
    setNewMemoContent(event.target.value);
  };

  const handleAddMemo = () => {
    if (newMemoContent.trim() !== '') {
      const memoData = JSON.parse(localStorage.getItem('memos')) || [];
      const newMemo = { id: Date.now(), content: newMemoContent };
      memoData.push(newMemo);
      localStorage.setItem('memos', JSON.stringify(memoData));
      setNewMemoContent('');
    }
  };

  return (
    <div>
      <textarea value={newMemoContent} onChange={handleNewMemoChange} />
      <Button onClick={handleAddMemo}>Add</Button>
    </div>
  );
};

export default MemoForm;
