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
    <div className=" bg-gray-300 h-full ">
        <form className="bg-white w-1/3 mx-auto my-20 p-4 rounded-lg h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 ">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full focus:outline-none"
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
          <div className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700">
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
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
          <button style={{background:"#1977f2"}} className="w-full text-gray-200 rounded-lg tracking-wider text-xl font-bold px-4 py-2">Log In</button>
          <div className="flex justify-center my-2">
          <a href="#" className=" text-sm text-blue-600  ">
            Forgot Password?
          </a>
          </div>
          <hr className="my-4"></hr>
          <div className="flex justify-center my-2">
          <button style={{background:"#54b72b"}} className=" text-gray-200 rounded-lg  text-xl font-bold px-6 py-2">Create New Account</button>
          </div>

        </form>
        
    </div>
  );
}

Login.propTypes = {};

export default Login;
