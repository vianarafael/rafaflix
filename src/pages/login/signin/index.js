import React, { useState, useEffect } from 'react';
import RegisterSignin from '../register-signin';
import Dashboard from '../Dashboard';

import { connect } from 'react-redux';
import { setLogUser } from '../../../redux/logged-user/logged-user.action';

function Signin({ logUser, setLogUser }) {
  const [user, setUser] = useState();

  const handleSetUser = (data) => {
    setUser(data);
    setLogUser('in');
  };

  useEffect(() =>
  {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (logUser.user === 'out') {
      setUser(null);
    }
    return () => console.log('cleanup')
  }, []);

  return (
    <>
      {user ? (
        <Dashboard user={user} handleSetUser={handleSetUser} />
      ) : (
        <RegisterSignin handleSetUser={handleSetUser} />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  logUser: state.logUser,
});

const mapDispatchToProps = (dispatch) => ({
  setLogUser: (loggedUser) => dispatch(setLogUser(loggedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
