import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

<<<<<<< HEAD
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
    if (credentials.password.length === 0) {
      setErrors({ ...errors, password: "Sorry, password not valid" });
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
        <h1 className="header-1">Party Planner</h1>
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
          <div
          className="log-err">
          {errors.username}
          </div>
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
          <div
          className="pass-err">
          {errors.password}
          </div>
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
=======
const Login = (props) => {
	const [error, setError] = useState('');
	
	return (
		<div>
			<Header />
			<section className='log-in-page-section'>
				<h2>Log In</h2>
				<Formik
					initialValues={{
						username : '',
						password : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('/auth/login', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/partyList');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
								if (error) {
									setError('Wrong information. Please try again.');
								};
							});
					}}
				>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>Username</label>
									<Field name='username' type='text' placeholder='Enter Username' />
								</div>

								<div className='input-container'>
									<label htmlFor='password'>Password</label>
									<Field name='password' type='password' placeholder='Enter Password' />
									<p className='sign-in-error'>{error}</p>
								</div>

								<button className='planner-sign-in-button button-spacing' type='submit'>
									Log In
								</button>
							</Form>
						);
					}}
				</Formik>

				<Link to='/planner/register'>
					<p>Create an Account</p>
				</Link>
			</section>
		</div>
	);
};

export default Login;
>>>>>>> d6519b226c6190cad3e30475bad0d728046230e7
