import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Memo from './Memo';

const MemoList = () => {
  const [memoData, setMemoData] = useState(JSON.parse(localStorage.getItem('memos')) || []);
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleMemoClick = (memo) => {
    if (selectedMemo && selectedMemo.id === memo.id) {
      setSelectedMemo(null);
    } else {
      setSelectedMemo(memo);
      setEditedContent(memo.content);
    }
  };

  const handleDeleteMemo = () => {
    const shouldDelete = window.confirm('Do you want to delete this memo?');
    if (shouldDelete) {
      const updatedMemos = memoData.filter((memo) => memo.id !== selectedMemo.id);
      localStorage.setItem('memos', JSON.stringify(updatedMemos));
      setSelectedMemo(null);
    }
  };

  const handleUpdateMemo = () => {
    const updatedMemos = memoData.map((memo) => {
      if (memo.id === selectedMemo.id) {
        return { ...memo, content: editedContent };
      }
      return memo;
    });
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
    setMemoData(updatedMemos);
    setSelectedMemo(null);
  };

  return (
    <div>
      <ul>
        {memoData.map((memo) => (
          <Memo key={memo.id} content={memo.content} onClick={() => handleMemoClick(memo)} />
        ))}
      </ul>
      {selectedMemo && (
        <div>
          <Header>Detail View</Header>
          <textarea
            value={editedContent}
            onChange={(event) => setEditedContent(event.target.value)}
          />
          <Button onClick={handleDeleteMemo}>Delete</Button>
          <Button onClick={handleUpdateMemo}>Update</Button>
        </div>
      )}
    </div>
  );
};

export default MemoList;
