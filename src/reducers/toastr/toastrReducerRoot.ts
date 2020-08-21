import { ToastrActionConstants } from '../../common/actionConstants';
const defaultState = {
  toastrMessage: '',
  toastrType: ''
};
const toastrReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ToastrActionConstants.SHOW_TOASTR:
      return {
        ...state,
        showToastr: true,
        toastrMessage: action.payload.toastrMessage,
        toastrType: action.payload.toastrType
      };
    case ToastrActionConstants.CLOSE_TOASTR:
      return {
        ...state,
        showToastr: false, toastrMessage: '', toastrType: '' };

    default:
      return state;
  }
};

export default toastrReducer;
