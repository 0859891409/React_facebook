import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  return (
  <main className="container">
  {/* TITLE */}
  <div className="title-container">
    <p className="title-big" >facebook</p>
    <p className="title-paragraph">
      Connect with friends and the world around you on Facebook.
    </p>
  </div>
  {/* FORM */}
  <div className="form-container">
    <form className="form">
      <div className="input-container">
        <input type="text" placeholder="Email or Phone Number" className="form-input form-input--email" />
      </div>
      <div className="input-container input-container--password">
        <input type="password" placeholder="Password" className="form-input form-input--password" />
        <div className="password-eye-container hidden">
          <img src="images/eye-off.png" className="password-eye eye-off" />
        </div>
      </div>
      <button className="form-log-in-btn">Log In</button>
      <a href="#" className="form-forgot-password">Forgot Password?</a>
      <div className="divider" />
      <a href="#" className="form-create-account-btn">Create New Account</a>
    </form>
    <p className="cgit push -u origin mainreate-page-paragraph">
      <a href="#" className="create-page-link">Create a Page</a> for a
      celebrity, band or business.
    </p>
  </div>
</main>
  )}

Login.propTypes = {};

export default Login;
