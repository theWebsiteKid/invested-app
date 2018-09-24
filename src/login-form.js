import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';

let LoginForm = () =>
    <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            // fetch('/', {

            // })
        }}>
        <UserAuthenticationInput className="email" placeHolder="Email" />
        <UserAuthenticationInput className="password" placeHolder="Password" />
        <input type="submit" value="Continue"></input>
    </form>

export default LoginForm;