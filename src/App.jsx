import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { switchlang } from "../src/redux/language/actions";
import { switchMode } from "../src/redux/mode/actions";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);
  const mode = useSelector((state) => state.mode.mode);

  const toggleLang = () => {
    const newLang = language === "indonesia" ? "english" : "indonesia";
    dispatch(switchlang(newLang));
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    dispatch(switchMode(newMode));
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${
        mode === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-success mb-4 me-4"
                name="language"
                onClick={toggleMode}
              >
                {mode}
              </button>
              <button
                className="btn btn-outline-primary mb-4"
                name="language"
                onClick={toggleLang}
              >
                {language}
              </button>
            </div>

            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  {language === "indonesia" ? "Daftar Tugas" : "To-Do List"}
                </h1>
                <TodoInput />
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
