import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';

const NewTodoForm = ({todos, addTodoRequest}) => {
  const [inputValue, setInputValue] = useState('');

  const onCreateClick = () => {
    const isDuplicateText = todos.some(todo => todo.text === inputValue);

    if (!isDuplicateText) {
      addTodoRequest(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="new-todo-input"
        type="text"/>
      <button onClick={onCreateClick} className="new-todo-button">Create Todo</button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getTodos(state)
})

export default connect(mapStateToProps, {addTodoRequest})(NewTodoForm);
