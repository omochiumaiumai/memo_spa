import React from 'react';
import Header from './Header';
import MemoList from './MemoList';
import MemoForm from './MemoForm';

const App = () => {
  return (
    <div>
      <Header />
      <MemoList />
      <MemoForm />
    </div>
  );
};

export default App;
