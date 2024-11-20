import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setUpdateTodo,
} from "../redux/async/todos/actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);
  const updateTodoId = useSelector((state) => state.todo.updateTodoId);
  const todos = useSelector((state) => state.todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateTodoId) {
      dispatch(updateTodo(updateTodoId, { text: text, completed: false }));
      dispatch(setUpdateTodo(null));
    } else {
      dispatch(addTodo({ id: uuidv4(), text: text, completed: false }));
    }
    setText("");
  };

  useEffect(() => {
    if (updateTodoId) {
      const todoToEdit = todos.find((todo) => todo.id === updateTodoId);
      if (todoToEdit) {
        setText(todoToEdit.text);
      }
    } else {
      setText("");
    }
  }, [updateTodoId, todos]);

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={
            language === "indonesia"
              ? "Tambahkan tugas baru ..."
              : "Add a new task.."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <button
          className={`btn btn-sm ${
            updateTodoId ? "btn-warning" : "btn-primary"
          }`}
          type="submit"
        >
          {updateTodoId
            ? language === "indonesia"
              ? "Ubah"
              : "Update"
            : language === "indonesia"
            ? "Tambah"
            : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
