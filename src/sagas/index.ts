import { all } from "redux-saga/effects";
import {
  getUserListSaga,
  addUserSaga,
  editUserSaga,
  deleteUserSaga,
} from "./user/userSaga";

export default function* rootSaga() {
  yield all([
    getUserListSaga(),
    addUserSaga(),
    editUserSaga(),
    deleteUserSaga(),
  ]);
}
