import React from "react";
import { BrowserRouter, HashRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import News from "./components/news/News";
import Musik from "./components/musik/Musik";
import SideBar from "./components/sideBar/SideBar";
import { initializeApp } from "./redux/app_reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/preloader/preloader";
import Login from "./components/login/Login";
import store from "./redux/redux_store";
import { withSuspense } from "./components/hoc/WithSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/dialogs/Dialogs_Container")
);
const UsersContainer = React.lazy(() =>
  import("./components/users/usersContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (
        <div className="preloader">
          <Preloader />
        </div>
      );
    }
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <SideBar state={this.props.state.sidebarReducer} />
        <div className="wrapper_content">
          {/* <Route path="/dialogs" render={() => (
                <DialogsContainer /> )} /> */}
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp = (props) => {
  return (
    // <React.StrictMode> 
    <HashRouter>
      <Provider store={store}>
        <AppContainer
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </HashRouter>
    // </React.StrictMode>
  );
};

export default SamuraiJsApp;
