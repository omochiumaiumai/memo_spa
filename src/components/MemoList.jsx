import React from 'react';
import Header from './Header';
import Button from './Button';
import Memo from './Memo';
import useAuth from './useAuth';
import PropTypes from 'prop-types';

export default function MemoList({
  memoData,
  selectedMemo,
  editedContent,
  onMemoClick,
  onDeleteMemo,
  onUpdateMemo,
  onEditContentChange,
}) {
  const auth = useAuth();
  const authButtons = auth && (
    <>
      <Button onClick={onDeleteMemo}>Delete</Button>
      <Button onClick={onUpdateMemo}>Update</Button>
    </>
  );

  return (
    <div>
      <ul>
        {memoData.map((memo) => (
          <Memo key={memo.id} content={memo.content} onClick={() => onMemoClick(memo)} />
        ))}
      </ul>
      {selectedMemo && (
        <div>
          <Header level={2}>Detail View</Header>
          <textarea value={editedContent} onChange={onEditContentChange} />
          {authButtons}
        </div>
      )}
    </div>
  );
}
MemoList.propTypes = {
  memoData: PropTypes.array,
  selectedMemo: PropTypes.object,
  editedContent: PropTypes.string,
  onMemoClick: PropTypes.func,
  onDeleteMemo: PropTypes.func,
  onUpdateMemo: PropTypes.func,
  onEditContentChange: PropTypes.func,
};
