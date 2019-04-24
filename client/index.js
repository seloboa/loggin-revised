import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store, {sessionLogin} from './store';
import Login from './login';
import UserPage from './user-page';

class _Main extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    const _sessionLogin = this.props.sessionLogin;
    _sessionLogin();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      const _sessionLogin = this.props.sessionLogin;
      _sessionLogin();
    }
  }

  render() {
    console.log('rendered')
    console.log(this.props.isLoggedIn)
    const {isLoggedIn} = this.props;
    return (
      <Switch>
        {isLoggedIn && <Route path="/home" component={UserPage} />}
        {!isLoggedIn && <Route component={Login} />}
        <Redirect to="/home" />
      </Switch>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    isLoggedIn: !!user.id,
  };
};

const mapDispatchToProps = dispatch => ({
  sessionLogin: () => dispatch(sessionLogin()),
});

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Main);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
