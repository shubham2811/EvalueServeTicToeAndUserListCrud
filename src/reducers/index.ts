import UserReducer from "./user/userReducerRoot";

import toastrReducer from "./toastr/toastrReducerRoot";
import LoaderReducer from "./loader/loaderReducerRoot";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
const commonReducer = combineReducers({
  user: UserReducer,
  toastr: toastrReducer,
  loader: LoaderReducer,
  form: reduxFormReducer,
});

export default commonReducer;
