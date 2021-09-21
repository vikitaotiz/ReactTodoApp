import { useState } from 'react';
const InputTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const newTodo = () => {
    if (text) {
      const todo = { text, completed: false };
      addTodo(todo);
      setText('');
    }
  };

  return (
    <div className="outlined">
      <input
        type="text"
        className="no-border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo..."
      />
      <button type="button" className="btn no-border" onClick={newTodo}>+</button>
    </div>
  );
};

export default InputTodo;
