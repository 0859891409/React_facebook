import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import app, { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
function Login({ setIsAuth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => login(data.email, data.password);
  const [errorMess, setErrorMess] = useState("");
  const history = useHistory();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsAuth(true);
        console.log("signin successfully");
        history.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setErrorMess("Email or Password is incorrect.");
      });
  };
  return (
    <main className="container">
      {/* TITLE */}
      <div className="title-container">
        <p className="title-big">facebook</p>
        <p className="title-paragraph">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      {/* FORM */}
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="form-input form-input--email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email?.type === "required" && (
            <span
              style={{
                color: "#f02849",
                fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "8px",
                textAlign: "left",
              }}
            >
              "Email is required"
            </span>
          )}
          <div className="input-container input-container--password">
            <input
              type="password"
              placeholder="Password"
              className="form-input form-input--password"
              {...register("password", { required: true })}
            />

            <div className="password-eye-container hidden">
              <img src="images/eye-off.png" className="password-eye eye-off" />
            </div>
          </div>
          {errors.password?.type === "required" && (
            <span
              style={{
                color: "#f02849",
                fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
                fontSize: "13px",
                lineHeight: "16px",
                marginBottom: "8px",
                textAlign: "left",
              }}
            >
              "Password is required"
            </span>
          )}
          <span
            style={{
              color: "#f02849",
              fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
              fontSize: "13px",
              lineHeight: "16px",
              marginBottom: "8px",
              textAlign: "left",
            }}
          >
            {errorMess}
          </span>
          <button className="form-log-in-btn">Log In</button>
          <a href="#" className="form-forgot-password">
            Forgot Password?
          </a>
          <div className="divider" />
          <a href="#" className="form-create-account-btn">
            Create New Account
          </a>
        </form>
        <p className="cgit push -u origin mainreate-page-paragraph">
          <a href="#" className="create-page-link">
            Create a Page
          </a>{" "}
          for a celebrity, band or business.
        </p>
      </div>
    </main>
  );
}

Login.propTypes = {};

export default Login;
