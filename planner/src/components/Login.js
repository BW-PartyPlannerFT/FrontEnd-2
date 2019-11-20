//DO NOT CHANGE CODE IN THIS FILE
// Login form with input for username and password.
// State handled locally.
// On submit redirects to private route (PartyList)
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  //   console.log("Cred", credentials);
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("https://partyplanner-b.herokuapp.com/api/auth/login", credentials)
      .then(res => {
        console.log("Response from login", res.data);
        localStorage.setItem("token", res.data.user);
        props.history.push("/partyList");
      })
      .catch(err => alert(err, "There was an error in logging in", err));
  };

  return (
    <>
      <Nav />
      <div className="Login">
        <form onSubmit={login}>
          <label>
            <input className="user-login"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label>
            <input className="user-password"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
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
