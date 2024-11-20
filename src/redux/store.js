import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./async/todos/reducer";
import langReducer from "./language/reducer";
import switchMode from "./mode/reducer";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: function (error) {
    console.log("Encryption failed", error);
  },
});

//root reducer
const rootReducer = combineReducers({
  todo: todoReducer,
  lang: langReducer,
  mode: switchMode,
});

//config redux-presist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
  transforms: [encryptor],
};

//middleware
const logMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

//redux-presist
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logMiddleware))
);

//persistor
const persistor = persistStore(store);

//export
export { store, persistor };
