import { UserActionConstants } from "../../common/actionConstants";
const initialState = {
  userList: [],
};
const userReducerRoot = (state = initialState, action) => {
  switch (action.type) {
    case UserActionConstants.USER_GET_LIST_SUCCESS:
      return { ...state, userList: action.payload };
    case UserActionConstants.USER_ADD_SUCCESS:
      return { ...state, userList: [...state.userList, action.payload] };
    case UserActionConstants.USER_EDIT_SUCCESS:
      const userArray = state.userList.map((item: any) => {
        if (item.cell === action.payload.cell) {
          item = { ...action.payload };
        }
        return item;
      });
      return { ...state, userList: userArray };
    case UserActionConstants.USER_DELETE_SUCCESS:
      const data = state.userList.filter(
        (item: any) => item.cell !== action.payload.cell
      );
      return { ...state, userList: data };
    default:
      return state;
  }
};
export default userReducerRoot;
