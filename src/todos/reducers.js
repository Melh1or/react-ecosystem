import {
  COMPLETE_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_IN_PROGRESS,
} from './actions';

const initialState = {
  data: [],
  isLoading: false
}

export const todos = (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        data: state.data.concat(payload.todo)
      };
    case REMOVE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== payload.todo.id)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        data: state.data.map(todo => todo.id === payload.todo.id
          ? {...todo, isCompleted: true}
          : todo
        )
      };
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        data: payload.todos,
        isLoading: false
      };
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}
