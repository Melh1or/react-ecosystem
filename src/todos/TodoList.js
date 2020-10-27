import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
                    completedTodos,
                    incompleteTodos,
                    isLoading,
                    loadTodos,
                    removeTodoRequest,
                    completeTodoRequest
                  }) => {

  useEffect(() => {
    loadTodos()
  }, [])

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <ListWrapper>
      <NewTodoForm/>
      <h3>Incomplete:</h3>
      {incompleteTodos.map(todo =>
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemove={removeTodoRequest}
          onComplete={completeTodoRequest}
        />
      )}

      <h3>Completed:</h3>
      {completedTodos.map(todo =>
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemove={removeTodoRequest}
          onComplete={completeTodoRequest}
        />
      )}
    </ListWrapper>
  )

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = {
  loadTodos,
  removeTodoRequest,
  completeTodoRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
