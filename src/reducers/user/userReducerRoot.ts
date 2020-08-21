import { UserActionConstants } from '../../common/actionConstants';
const initialState = {
    userList : []
  };
  const userReducerRoot = (state = initialState, action) => {
    switch (action.type) {
      case   UserActionConstants.USER_GET_LIST_SUCCESS:
        return { ...state, userList:action.payload };
        case   UserActionConstants.USER_ADD_SUCCESS:
          return { ...state, userList:action.payload };
          case   UserActionConstants.USER_EDIT_SUCCESS:
            return { ...state, userList:action.payload };
            case   UserActionConstants.USER_DELETE_SUCCESS:
              return { ...state, userList:action.payload };
      default:
        return state;
    }
  };
  export default userReducerRoot;
  