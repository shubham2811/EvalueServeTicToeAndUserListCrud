import { all } from "redux-saga/effects";
import { getUserListSaga } from "./list/listSaga";

export default function* rootSaga() {
  yield all([getUserListSaga()]);
}
