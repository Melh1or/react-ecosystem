import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemove, onComplete}) => {
  const removeClick = () => {
    onRemove(todo.id)
  }

  const completeClick = () => {
    onComplete(todo.id)
  }

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted && <button onClick={completeClick} className="completed-button">Mark As Completed</button>}
        <button onClick={removeClick} className="remove-button">Remove</button>
      </div>
    </div>
  );
}

export default TodoListItem;
