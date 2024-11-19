import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setUpdateTodo } from "../redux/todos/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const language = useSelector((state) => state.lang.language);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    dispatch(setUpdateTodo(todo.id));
  };

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
