import axios from "axios";

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";
export const PROCESS_TODO_SUCCESS = "PROCESS_TODO_SUCCESS";
export const SET_UPDATE_TODO = "SET_UPDATE_TODO";

//action creator
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      const response = await axios.get("http://localhost:3000/todos");
      const data = await response.data;
      dispatch({ type: FETCH_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_REQUEST, payload: error.message });
    }
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.post(`http://localhost:3000/todos`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_REQUEST, payload: error.message });
    }
  };
};

export const setUpdateTodo = (id) => ({
  type: SET_UPDATE_TODO,
  payload: id,
});

export const updateTodo = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.put(`http://localhost:3000/todos/${id}`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_REQUEST, payload: error.message });
    }
  };
};
