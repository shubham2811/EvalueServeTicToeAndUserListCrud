import { fetchList } from "../../api/userApi";
import {
  ToastrActionConstants,
  UserActionConstants,
} from "../../common/actionConstants";
import { MESSAGES } from "../../common/utils";
import { put, takeLatest, call } from "redux-saga/effects";
export function* getUserListSaga() {
  yield takeLatest(UserActionConstants.USER_GET_LIST, getUserListData);
}

function* getUserListData(action) {
  const { queryParams } = action;
  const queryString = Object.keys(queryParams)
    .map((key) => key + "=" + queryParams[key])
    .join("&");
  let response = yield call(() => {
    return fetchList(queryString);
  });
  yield put({
    payload: {
      toastrMessage: MESSAGES.LIST_LOADED_SUCCESSFULLY,
      toastrType: MESSAGES.SUCCESS,
    },
    type: ToastrActionConstants.SHOW_TOASTR,
  });
  yield put({
    type: UserActionConstants.USER_GET_LIST_SUCCESS,
    payload: response.data && response.data.results,
  });
}

/**
 * Saga for Add User
 */
export function* addUserSaga() {
  yield takeLatest(UserActionConstants.USER_ADD, addUserData);
}
function* addUserData(action) {
  yield put({
    payload: {
      toastrMessage: MESSAGES.ADDED_SUCCESSFULLY,
      toastrType: MESSAGES.SUCCESS,
    },
    type: ToastrActionConstants.SHOW_TOASTR,
  });
  yield put({
    type: UserActionConstants.USER_ADD_SUCCESS,
    payload: action.userData,
  });
}

/**
 * Saga for Edit User
 */
export function* editUserSaga() {
  yield takeLatest(UserActionConstants.USER_EDIT, editUserData);
}
function* editUserData(action) {
  yield put({
    payload: {
      toastrMessage: MESSAGES.EDITED_SUCCESSFULLY,
      toastrType: MESSAGES.SUCCESS,
    },
    type: ToastrActionConstants.SHOW_TOASTR,
  });
  yield put({
    type: UserActionConstants.USER_EDIT_SUCCESS,
    payload: action.userData,
  });
}

/**
 * Saga for delete User
 */
export function* deleteUserSaga() {
  yield takeLatest(UserActionConstants.USER_DELETE, deleteUserData);
}
function* deleteUserData(action) {
  yield put({
    payload: {
      toastrMessage: MESSAGES.DELETED_SUCCESSFULLY,
      toastrType: MESSAGES.SUCCESS,
    },
    type: ToastrActionConstants.SHOW_TOASTR,
  });
  yield put({
    type: UserActionConstants.USER_DELETE_SUCCESS,
    payload: action.userData,
  });
}
