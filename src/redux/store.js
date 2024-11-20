import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./async/todos/reducer";
import langReducer from "./language/reducer";
import switchMode from "./mode/reducer";

//root reducer
const rootReducer = combineReducers({
  todo: todoReducer,
  lang: langReducer,
  mode: switchMode,
});

//middleware
const logMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

//store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logMiddleware))
);

//redux-thunk

//export
export default store;
