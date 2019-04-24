import React from 'react';
import {connect} from 'react-redux';
import {logout} from './store';

const UserPage = ({user, logout}) => {
  return (
    <div className="h100 w100 flex column align-items-center justify-center">
      <div className="flex">
        <img className="rounded mr1" src={user.imageUrl} />
        <h1>Welcome back!</h1>
      </div>
      <div>
        <button
          className="btn bg-red white p1 rounded"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({user}) => {
  return {
    user: user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
