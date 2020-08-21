import { LoaderActionConstants } from "../../common/actionConstants";
const defaultState = {
  showLoader: false,
};
const loaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LoaderActionConstants.SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
      };
    case LoaderActionConstants.HIDE_LOADER:
      return { ...state, showLoader: false };

    default:
      return state;
  }
};

export default loaderReducer;
