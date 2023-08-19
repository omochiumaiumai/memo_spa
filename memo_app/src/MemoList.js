import React from 'react';
import Header from './Header';
import Button from './Button';
import Memo from './Memo';
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
  return (
    <div>
      <ul>
        {memoData.map((memo) => (
          <Memo key={memo.id} content={memo.content} onClick={() => onMemoClick(memo)} />
        ))}
      </ul>
      {selectedMemo && (
        <div>
          <Header>Detail View</Header>
          <textarea value={editedContent} onChange={onEditContentChange} />
          <Button onClick={onDeleteMemo}>Delete</Button>
          <Button onClick={onUpdateMemo}>Update</Button>
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
