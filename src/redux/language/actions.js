export const LANG_SWITCH = "LANG_SWITCH";

//action creator
export const switchlang = (lang) => ({
  type: LANG_SWITCH,
  payload: lang,
});
