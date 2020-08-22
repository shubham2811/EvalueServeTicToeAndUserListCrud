import React from "react";
import { Switch  } from "react-router-dom";
import { connect } from "react-redux";
import RouteWithLayout from "./RouteWithLayout";
import { Main as MainLayout } from "./layouts";
import { closeToastr } from "./actions/toastrAction";
import { Toastr, Loader } from "../shared/components";
import UserContainer from "../modules/Users/UserContainer";
import TicTacContainer from "../modules/TicTac/TicTacContainer";
const routesList = [
  {
    component: TicTacContainer,
    path: "/tic-tac-toe",
    exact : true
  },
  {
    component:  UserContainer,
    path: "/",
    exact:true
  },
  {
    component:  UserContainer,
    path: "/users",
    exact:true
  },
];

const Routes = props => {
  return (
    <>
    <Switch>
      {routesList &&
        routesList.map((route:any, i) => (
          <RouteWithLayout
            path={route.path}
            key={i}
            layout={MainLayout}
            component={route.component}
            exact={route.exact}
          />
        ))}
           
    </Switch>
    {props.toastr.showToastr && (
        <Toastr toastr={props.toastr} closeToastr={props.closeToastr} />
      )}
    {props.loader.showLoader && (
       <Loader showLoader = {props.loader.showLoader} />
      )}
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  closeToastr: () => dispatch(closeToastr())
});
const mapStateToProps = state => ({
  toastr: state && state.toastr,
  loader:state.loader
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
