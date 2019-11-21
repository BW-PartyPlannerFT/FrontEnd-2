//DO NOT CHANGE CODE IN THIS FILE
// Login form with input for username and password.
// State handled locally.
// On submit redirects to private route (PartyList)
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import userpic from "./userpic.jpg";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  //   console.log("Cred", credentials);
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  const validateForm = () => {
    if (credentials.username.length === 0) {
      setErrors({ ...errors, username: "Sorry, not valid" });
      return false;
    }
    return true;
  };
  const login = e => {
    e.preventDefault();
    setIsLoading(true);

    const isvalidform = validateForm();
    if (isvalidform) {
      axios
        .post(
          "https://partyplanner-b.herokuapp.com/api/auth/login",
          credentials
        )
        .then(res => {
          console.log("Response from login", res.data);
          localStorage.setItem("token", res.data.token);
          props.history.push("/partyList");
        })
        .catch(err =>
          console.log(err, "There was an error in logging in", err)
        );
    }
  };

  return (
    <>
      <Nav />
      <div className="Login">
        <form onSubmit={login}>
          <label>
            <img className="user-pic" src={userpic} />
            <input
              className="user-login"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          {errors.username}
          <label>
            <input
              className="user-password"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
          {errors.password}
          <button className="log">Login</button>
          <Link to="/Signup">
            <button className="sign-up">Sign up</button>
          </Link>
        </form>
      </div>
      <div>
        {isLoading && (
          //Add some animation here?
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};
export default Login;
