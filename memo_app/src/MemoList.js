import React from 'react';
import Memo from './Memo';

const memoData = [
  { id: 1, content: 'メモ1の内容\n改行改行改行' },
  { id: 2, content: 'メモ2の内容' },
];

const MemoList = () => {
  return (
    <div>
      {memoData.map((memo) => (
        <Memo key={memo.id} content={memo.content} />
      ))}
    </div>
  );
};

export default MemoList;
