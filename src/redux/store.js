import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./todos/reducer";
import langReducer from "./language/reducer";
import switchMode from "./mode/reducer";

//root reducer
const rootReducer = combineReducers({
  todo: todoReducer,
  lang: langReducer,
  mode: switchMode,
});

//store
const store = createStore(rootReducer, composeWithDevTools());

//export
export default store;
