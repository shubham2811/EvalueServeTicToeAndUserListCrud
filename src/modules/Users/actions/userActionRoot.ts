import { UserActionConstants } from "../../../common/actionConstants";

/** Action method to load the users List */
export const getUserList = (queryParams) => ({
  type: UserActionConstants.USER_GET_LIST,
  queryParams,
});

/** Action method to add user */
export const addUser = (userData) => ({
  type: UserActionConstants.USER_ADD,
  userData,
});

/** Action method to Edit user */
export const editUser = (userData) => ({
  type: UserActionConstants.USER_EDIT,
  userData
});

/** Action method to Delete user */
export const deleteUser = (userData) => ({
  type: UserActionConstants.USER_DELETE,
  userData
});
