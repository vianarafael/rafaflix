import React from 'react';

import PageDefault from '../../../components/pageDefault';
import FormInput from '../../../components/form-input/form-input.component';
import './style.scss';

import Button from '../../../components/Button/button.component';

import { signInWithGoogle } from '../../../firebase/firebase.utils';

const LoginVideo = () => {
  return (
    <>
      <div className="container">
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={console.log('submit')}>
            <FormInput
              name="email"
              type="email"
              label="email"
              // value={this.state.email}
              // handleChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              label="password"
              // value={this.state.password}
              // handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <Button type="submit">Sign In</Button>
              <Button onClick={signInWithGoogle} isGoogleSignIn>
                Sign In With Google
              </Button>
            </div>
          </form>
        </div>

        <div className="sign-up">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form" onSubmit={console.log('o')}>
            <FormInput
              type="text"
              name="displayName"
              // value={displayName}
              // onChange={this.handleChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              // value={email}
              // onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              // value={password}
              // onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              // value={confirmPassword}
              // onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <Button type="submit">SIGN UP</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginVideo;
