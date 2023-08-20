import React, { useContext } from 'react';
import Button from './Button';
import AuthContext from './AuthContext.js';
import PropTypes from 'prop-types';

export default function MemoForm({ handleAddMemo, handleNewMemoChange, newMemoContent }) {
  const auth = useContext(AuthContext);
  return (
    <div>
      <textarea value={newMemoContent} onChange={handleNewMemoChange} />
      {auth && <Button onClick={handleAddMemo}>Add</Button>}
    </div>
  );
}
MemoForm.propTypes = {
  handleAddMemo: PropTypes.func,
  handleNewMemoChange: PropTypes.func,
  newMemoContent: PropTypes.string,
};
