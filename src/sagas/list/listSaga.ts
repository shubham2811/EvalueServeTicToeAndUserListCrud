import { fetchList } from "../../api/listApi";
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
const {queryParams} = action;
const queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
  let response = yield call(() => {
    return fetchList(queryString);
  });
    yield put({
      payload: {
        toastrMessage:MESSAGES.LIST_LOADED_SUCCESSFULLY,
        toastrType: MESSAGES.SUCCESS,
      },
      type: ToastrActionConstants.SHOW_TOASTR,
    });
    yield put({
      type: UserActionConstants.USER_GET_LIST_SUCCESS,
      payload: response.data && response.data.results,
    });
  
}
