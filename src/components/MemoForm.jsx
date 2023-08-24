import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default function MemoForm({ handleAddMemo, handleNewMemoChange, newMemoContent }) {
  return (
    <div>
      <textarea value={newMemoContent} onChange={handleNewMemoChange} />
      <Button onClick={handleAddMemo}>Add</Button>
    </div>
  );
}
MemoForm.propTypes = {
  handleAddMemo: PropTypes.func,
  handleNewMemoChange: PropTypes.func,
  newMemoContent: PropTypes.string,
};
