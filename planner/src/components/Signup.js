//Sign up form with inputs for username, email and passwords.
//Inputs need validation.
//State will be managed locally
//axios post request.
//Once signed up, onClick will redirect to login pg.
import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Nav from "./Nav";
import axios from "axios";

const Signup = props => {
  console.log("signup props", props);
  const [newCreds, setNewCreds] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = e => {
    setNewCreds({
      ...newCreds,
      [e.target.name]: e.target.value
    });
  };
  const validateForm = () => {
    if (newCreds.username.length === 0) {
      setErrors({ ...errors, username: "Sorry, username not valid" });
      return false;
    }
    if (newCreds.password.length === 0) {
      setErrors({ ...errors, password: "Sorry, password not valid" });
      return false;
    }
    return true;
  };
  const signup = e => {
    e.preventDefault();

    const isvalidform = validateForm();
    if (isvalidform)
      axios
        .post(
          "https://partyplanner-b.herokuapp.com/api/auth/register",
          newCreds
        )
        .then(res => {
          console.log(res.data, res);
          localStorage.setItem("token", res.data.user);
          props.history.push("/");
          setNewCreds("");
        })
        .catch(err => alert("There was an error in signing up", err));
  };

  return (
    <>
      <Nav />
      <div className="Signup-Links">
        <h1 className="reg">REGISTER</h1>
        <form onSubmit={signup}>
          <label>
            {" "}
            {/* USERNAME: */}
            <input
              className="reg-user"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={newCreds.username}
              onChange={handleChange}
            />
          </label>
          <div
          className="user-err">
          {errors.username}
          </div>
          <label>
            {" "}
            {/* EMAIL: */}
            <input
              className="email-user"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={newCreds.email}
              onChange={handleChange}
            />
          </label>
          <div
          className="pass-err">
          {errors.password}
          </div>
          <label>
            {" "}
            {/* PASSWORD: */}
            <input
              className="pass-user"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={newCreds.password}
              onChange={handleChange}
            />
          </label>

          <button className="reg-sub">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Signup;
