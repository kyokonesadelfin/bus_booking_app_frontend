import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {

    const [ credentials, setCredentials ] = useState({
		email: undefined,
		password: undefined
	})

	const { loading, error, dispatch} = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async(e) => {
		e.preventDefault();
		dispatch({ type:"LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", credentials);
			dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
			alert("Login Success")
			navigate("/")
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};


	
	return (
		<>
		<div >
		  <div className="p-5 w-75 mt-2 mb-5">
		    <div>
		      <div className="col-12 mb-3">
		        <h5 className="title text-center fw-bold" id="exampleModalLabel" style={{backgroundColor: "pink", height: "100px", fontSize: "40px"}}>Login</h5>
		      </div>
		      <div className="body">
		      	<button className="btn btn-primary w-100 mb-4">
		      		<span className="fa fa-google me-2"></span>Sign in With Google
		      	</button>
		      	<button className="btn btn-primary w-100 mb-4">
		      		<span className="fa fa-facebook me-2"></span>Sign in With Facebook
		      	</button>
		      	<p className="mx-auto text-center"><hr/>OR</p>
		          <div className="mb-3">
		            <label for="exampleInputEmail1" className="form-label">Email address</label>
		            <input type="email" 
					placeholder="Enter email" className="form-control"
				     id="email" aria-describedby="emailHelp" 
		            onChange={handleChange}/>
		            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		          </div>
		          <div className="mb-3">
		            <label for="exampleInputPassword1" className="form-label">Password</label>
		            <input type="password" className="form-control" id="password" 
		            onChange={handleChange}/>
		          </div>
		          <div className="mb-3 form-check">
		            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
		            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
		          </div>
		          <button disabled={loading} className="btn btn-outline-primary w-100 mt-3" onClick={handleClick}>Submit</button>
		        	{error && <span data-testid="error-msg">Please enter a valid email.</span>}
		      </div> 
			  <p>Not yet a User? Click <Link to="/register">Here</Link> to Register</p>
		    </div>
		  </div>
		</div>
		</>
		)
}


export default Login;