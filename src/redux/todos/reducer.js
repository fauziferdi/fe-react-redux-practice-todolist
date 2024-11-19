import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_UPDATE_TODO,
} from "../todos/actions";

//state
const initialState = {
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Celebrate", completed: false },
  ],
  updateTodoId: null,
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case SET_UPDATE_TODO:
      return {
        ...state,
        updateTodoId: action.payload,
      };

    default:
      return state;
  }
};

//export
export default todoReducer;
