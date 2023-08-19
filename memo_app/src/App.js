import React, { useState } from 'react';
import Header from './Header';
import MemoList from './MemoList';
import MemoForm from './MemoForm';

const App = () => {
  const [memoData, setMemoData] = useState(JSON.parse(localStorage.getItem('memos')) || []);
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [newMemoContent, setNewMemoContent] = useState('');

  const handleMemoClick = (memo) => {
    if (selectedMemo && selectedMemo.id === memo.id) {
      setSelectedMemo(null);
    } else {
      setSelectedMemo(memo);
      setEditedContent(memo.content);
    }
  };

  const handleDeleteMemo = () => {
    const updatedMemos = memoData.filter((memo) => memo.id !== selectedMemo.id);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
    setMemoData(updatedMemos);
    setSelectedMemo(null);
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

  const onAddMemo = (newMemo) => {
    const updatedMemos = [...memoData, newMemo];
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
    setMemoData(updatedMemos);
  };

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
      <Header>Memo App</Header>
      <MemoForm
        handleAddMemo={handleAddMemo}
        handleNewMemoChange={handleNewMemoChange}
        newMemoContent={newMemoContent}
      />
      <MemoList
        memoData={memoData}
        selectedMemo={selectedMemo}
        editedContent={editedContent}
        onMemoClick={handleMemoClick}
        onDeleteMemo={handleDeleteMemo}
        onUpdateMemo={handleUpdateMemo}
        onEditContentChange={(event) => setEditedContent(event.target.value)}
      />
    </div>
  );
};

export default App;
