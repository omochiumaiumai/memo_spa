import React from 'react';
import Button from './Button';
import useAuth from './useAuth';
import PropTypes from 'prop-types';

export default function MemoForm({ handleAddMemo, handleNewMemoChange, newMemoContent }) {
  const auth = useAuth();
  return (
    <div>
      <textarea value={newMemoContent} onChange={handleNewMemoChange} />
      <Button onClick={handleAddMemo} disabled={!auth}>
        Add
      </Button>
    </div>
  );
}
MemoForm.propTypes = {
  handleAddMemo: PropTypes.func,
  handleNewMemoChange: PropTypes.func,
  newMemoContent: PropTypes.string,
};
