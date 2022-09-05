import React from "react";


const Contact = () => {

	return (
		<div>
			<section id="contact">
				<div className="container my-2 py-2 mb-5 pb-5">
					<div className="row">
						<div className="col-12">
							<h3 className="display-6 fs-5 text-center mb-0 fw-bolder" id="para">Contact Us</h3>
							<h1 className="display-5 text-center mb-4" id="para">Have Some <b>Question?</b> </h1>
							<hr className="w-25 mx-auto"/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<img src="https://media.istockphoto.com/vectors/contact-us-symbols-social-media-network-icon-symbols-colour-color-vector-id1192055884?k=20&m=1192055884&s=612x612&w=0&h=ZqKYB-Zk-ocEr10siF1bYiJsT7O-6XmPjXVlsWqfXUs=" alt="Contact" className="w-75 h-85" />
						</div>
						<div className="col-md-6">
							<form method="POST">
								<div className="mb-3">
								  <label for="name" className="form-label" >Your Name</label>
								  <input type="text" className="form-control" placeholder="Jane Smith"
								/>
								</div>
								<div className="mb-3">
								  <label for="exampleFormControlInput1" class="form-label" >Email address</label>
								  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
								</div>
								<div className="mb-3">
								  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
								  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
								</div>
								<button type="submit" className="btn btn-info rounded-pill px-3 my-3 fw-bolder" ><i className="fa fa-envelope me-2"></i> Send Message </button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
		);
}


export default Contact;