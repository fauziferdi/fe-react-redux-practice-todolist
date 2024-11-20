import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  PROCESS_TODO_SUCCESS,
  SET_UPDATE_TODO,
} from "../todos/actions";

//state
const initialState = {
  todos: [],
  loading: false,
  Error: null,
  isSuccess: false,
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        Error: null,
        isSuccess: false,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        Error: action.payload,
      };
    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        isSuccess: true,
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
