import React from 'react';
import Button from './Button.js';

export default function MemoForm() {
  return (
    <form>
      <input type="text" name="memo" placeholder="Please enter a note." />
      <Button />
    </form>
  );
}
