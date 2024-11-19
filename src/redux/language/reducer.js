import { LANG_SWITCH } from "./actions";

//state
const initialState = {
  language: "indonesia",
};

//reducer
const langSwitch = (state = initialState, action) => {
  switch (action.type) {
    case LANG_SWITCH:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

//export
export default langSwitch;
