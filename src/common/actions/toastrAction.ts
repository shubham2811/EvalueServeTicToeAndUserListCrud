import { ToastrActionConstants } from '../actionConstants';

/** Action method for show Toastr */
export const showToastr = (toastrObj) => ({
  type: ToastrActionConstants.SHOW_TOASTR,
  payload: toastrObj

});
/** Action method for close Toastr */
export const closeToastr = () => ({
  type: ToastrActionConstants.CLOSE_TOASTR
});
