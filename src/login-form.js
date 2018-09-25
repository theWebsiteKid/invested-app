import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';
import loginUser from './loginUser.js';
import { Redirect } from 'react-router-dom';
import UserProfile from './user-profile.js';
// import NavBar from './nav-bar';

let LoginForm = (props) => {
    return <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            props.clearUserEmail();
            loginUser(props);
        }}>
        <UserAuthenticationInput className="email" placeHolder="Email" type="email" stateName={props.email} stateFunction={props.captureUserEmail} />
        <UserAuthenticationInput className="password" placeHolder="Password" type="password" stateName={props.password} stateFunction={props.captureUserPassword} />
        <input type="submit" value="Continue"></input>
    </form>
};

export default LoginForm;