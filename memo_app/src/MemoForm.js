import React from 'react';
export default function MemoForm() {
  return (
    <form>
      <input type="text" name="memo" placeholder="Please enter a note." />
      <button type="button">Add</button>
    </form>
  );
}
