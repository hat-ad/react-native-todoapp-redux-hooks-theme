export const TOGGLE_THEME = 'TOGGLE_THEME';

export function toggleTheme(isDark) {
  return {
    type: TOGGLE_THEME,
    isDark,
  };
}

const initialState = {
  isDark: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };

    default:
      return state;
  }
};

export default appReducer;
