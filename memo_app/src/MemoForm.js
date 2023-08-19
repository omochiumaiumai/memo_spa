import React, { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default function MemoForm({ onAddMemo }) {
  const [newMemoContent, setNewMemoContent] = useState('');

  const handleNewMemoChange = (event) => {
    setNewMemoContent(event.target.value);
  };

  const handleAddMemo = () => {
    if (newMemoContent.trim() !== '') {
      const newMemo = { id: Date.now(), content: newMemoContent };
      onAddMemo(newMemo);
      setNewMemoContent('');
    }
  };

  return (
    <div>
      <textarea value={newMemoContent} onChange={handleNewMemoChange} />
      <Button onClick={handleAddMemo}>Add</Button>
    </div>
  );
}
MemoForm.propTypes = {
  onAddMemo: PropTypes.func,
};
