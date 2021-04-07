import React, { useState } from 'react';

import api from '../../../services/api'
import FormInput from '../../../components/form-input/form-input.component';
import './style.scss';

import Button from '../../../components/Button/button.component';

const RegisterSignin = ({ handleSetUser }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPW, setLoginPW] = useState('');

  const [msg, setMsg] = useState('');

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
                  api.post(
                      '/session',
                      {
                        email: loginEmail,
                        password: loginPW,
                      }
                    )
                    .then((res) => {
                      localStorage.setItem('user', JSON.stringify(res.data));
                      handleSetUser(res.data);
                    })
                    .catch((err) => setMsg('Wrong user name or password'));
                }}
              >
                Sign In
              </Button>
            </div>
          </form>
          <h4 className="err-msg">{msg}</h4>
        </div>

        <div className="sign-up">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form">
            <FormInput
              type="text"
              name="displayName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              label="User Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
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

                api
                  .post(
                    '/signup',
                    {
                      name: userName,
                      email,
                      password,
                      password2,
                    }
                  )
                  // .then((res) => {
                  //   localStorage.setItem('user', JSON.stringify(res.data));
                  //     // handleSetUser(res.data);
                  //   return res.data
                  // })
                  .then(() =>
                  {
                    setMsg("user registered")
                  })
                  .catch((err) => console.log(err));
              }}
            >
              SIGN UP
            </Button>
          </form>
          <div className="err-msg">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSignin;
