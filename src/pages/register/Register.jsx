import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';




const Register = () => {

	const navigate = useNavigate();

	const [user, setUser] = useState({
		username : "",
		email : "",
		password : "",
        phoneno: ""
	});

	//handles input
	const handleInput = (event) =>{
		let name = event.target.name;
		let value = event.target.value;

		setUser({...user, [name]:value});
	}

	// Handles Submit
	const handleSubmit = async (event)=> {
		event.preventDefault();
		//Object Destructuring
		//Store Object Data into Variables
		const { username, email, password, phoneno } = user;
		try {
			const res = await fetch('/register', {
				method : "POST",
				headers : {
					"Content-Type" : "application/json",
				
				},
				body : JSON.stringify({
					username, email, password, phoneno
				})
			})

			if(res.status === 400 || !res){
				window.alert("Already Used Details");
			} else {
				window.alert("Registered Successfully");
				navigate('/')
            }
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
		
			<div className="mt-3 mb-5 p-5 w-75">
			  <div >
			    <div className="col-12">
			      <div >
			        <h5 className="title text-center p-4 mb-3" style={{backgroundColor: "pink"}}>Register</h5>
			      </div>
			      <div className="body">
			      	<button className="btn btn-primary w-100 mb-4">
			      		<span className="fa fa-google me-2"></span>Sign up With Google
			      	</button>
			      	<button className="btn btn-primary w-100 mb-4">
			      		<span className="fa fa-facebook me-2"></span>Sign up With Facebook
			      	</button>
			      	<p className="mx-auto text-center"><hr/>OR</p>
			        <form onSubmit={handleSubmit} method="POST">
			          <div className="mb-3">
			            <label htmlFor="exampleInput" className="form-label">Username: </label>
			            <input type="text" className="form-control" id="username" name="username" value={user.username}
			            onChange={handleInput}/>	           
			          </div>
			          <div className="mb-3">
			            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
			            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
			            name="email" value={user.email}
			            onChange={handleInput}/>
			            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			          </div>
			          <div className="mb-3">
			            <label for="exampleInputPassword1" className="form-label">Password</label>
			            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password}
			            onChange={handleInput}/>
			          </div>
                      <div className="mb-3">
			            <label for="exampleInputPassword1" className="form-label">Phone Number: </label>
			            <input type="tel" className="form-control" id="exampleInputPassword1" name="phoneno" value={user.phoneno}
			            onChange={handleInput}/>
			          </div>
			          <div className="mb-3 form-check">
			            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
			            <label className="form-check-label" for="exampleCheck1">I agree to the Terms and Conditions</label>
			          </div>
			          <button type="submit" className="btn btn-outline-primary w-100 mt-3" disable={!user.username || !user.email || !user.password || !user.phoneno }>Register</button>
					  <br/>
					  <p>Already a User? Login <Link to="/login">Here</Link>.</p>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
		)
}


export default Register;