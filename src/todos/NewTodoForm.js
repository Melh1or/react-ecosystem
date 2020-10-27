import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

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
    <FormContainer>
      <NewTodoInput
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        type="text"
      />
      <NewTodoButton onClick={onCreateClick}>Create Todo</NewTodoButton>
    </FormContainer>
  );
};

const mapStateToProps = state => ({
  todos: getTodos(state)
})

export default connect(mapStateToProps, {addTodoRequest})(NewTodoForm);
