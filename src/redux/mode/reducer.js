import { SWITCH_MODE } from "./actions";

//state
const initialState = {
  mode: "light",
};

//reducer
const switchMode = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

//export
export default switchMode;
