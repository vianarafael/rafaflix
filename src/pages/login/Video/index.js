import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import PageDefault from '../../../components/pageDefault';
import FormInput from '../../../components/form-input/form-input.component';
import './style.scss';

import Button from '../../../components/Button/button.component';

import { signInWithGoogle } from '../../../firebase/firebase.utils';

const LoginVideo = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPW, setLoginPW] = useState('');

  return (
    <>
      <div className="container">
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form>
            <FormInput
              name="email"
              type="email"
              label="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <FormInput
              name="password"
              type="password"
              label="password"
              onChange={(e) => setLoginPW(e.target.value)}
              required
            />
            <div className="buttons">
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  // console.log(loginEmail, loginPW);
                  axios
                    .post('http://localhost:5000/users/login', {
                      email: loginEmail,
                      password: loginPW,
                    })
                    .then((res) => {
                      console.log(res.data);
                      history.push('/');
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Sign In
              </Button>
              <Button onClick={signInWithGoogle} isGoogleSignIn>
                Sign In With Google
              </Button>
            </div>
          </form>
        </div>

        <div className="sign-up">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form">
            <FormInput
              type="text"
              name="displayName"
              // value={displayName}
              // onChange={this.handleChange}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              label="User Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              // value={email}
              // onChange={this.handleChange}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              // value={password}
              // onChange={this.handleChange}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              // value={confirmPassword}
              // onChange={this.handleChange}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              label="Confirm Password"
              required
            />
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // connect to the server
                axios
                  .post('http://localhost:5000/users/register', {
                    name: userName,
                    email,
                    password,
                    password2,
                  })
                  .then((res) => console.log(res.data))
                  .catch((err) => console.log(err));
              }}
            >
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginVideo;
