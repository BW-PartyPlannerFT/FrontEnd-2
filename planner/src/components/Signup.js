import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

<<<<<<< HEAD
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
=======
const Signup = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Create an Account</h2>
                    <Link to='/planner/register'><button className='planner-sign-in-button'>I'm a party planner</button></Link>
            
                    <Link to='/planner/login'><p>Already have an account? Log in here.</p></Link>
                </div>
            </section>
        </div>
    )
>>>>>>> d6519b226c6190cad3e30475bad0d728046230e7
};

export default Signup;