import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  deleteTodo,
  setUpdateTodo,
} from "../redux/async/todos/actions";

const TodoList = () => {
  const { todos, loading, error, isSuccess } = useSelector(
    (state) => state.todo
  );

  const language = useSelector((state) => state.lang.language);
  const dispatch = useDispatch();

  //get data pertama kali
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  //get data jika ada perubahan true
  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [isSuccess]);

  const handleEdit = (todo) => {
    dispatch(setUpdateTodo(todo.id));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-warning btn-sm me-2 "
              onClick={() => handleEdit(todo)}
            >
              {language === "indonesia" ? "Edit" : "Update"}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              {language === "indonesia" ? "Hapus" : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
