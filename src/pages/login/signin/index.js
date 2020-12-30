import React from 'react';
import { connect } from 'react-redux';
import { logUser } from '../../../redux/logged-user/logged-user.action';
import RegisterSignin from '../register-signin';
import Dashboard from '../Dashboard';
// import logUser from '../../../redux/logged-user/logged-user.action';

function Signin({ logUser }) {
  return (
    <>
      {Boolean(localStorage.getItem('logged')) || (logUser && logUser.user) ? (
        <Dashboard />
      ) : (
        <RegisterSignin />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  logUser: state.logUser,
});

export default connect(mapStateToProps)(Signin);