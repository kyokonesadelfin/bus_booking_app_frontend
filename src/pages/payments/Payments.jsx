import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { delBooking } from '../../redux/actions';


const Payments = () => {

  	const dispatch = useDispatch()

  const handleCart = (product) => {
			dispatch(delBooking(product))

	}


	const state = useSelector((state)=> state.addBooking)
	
	var total = 0;
	const itemList = (product) => {
		total = total + product.price;
		return (
			<li className="list-group-item d-flex justify-content-between lh-sm">
			  <div>
			  	<img src={product.image} style={{width: "90px", height: "50px"}}/>
			    <h6 className="my-0">{product.busName}</h6>
			  </div>
			  <div>
				<p>{product.source} to {product.destination}</p>
			  </div>
			  <div>
			  <button onClick={()=>handleCart(product)} className="btn btn-danger">Cancel</button>
			  </div>
			  <span className="text-muted">${product.price}</span>
			</li>
			);
	}


	return (
		<>
			<div className="container my-5 mt-5 pt-4 pb-5 mb-5">
			<div className="row g-5">
			<div className="col-md-5 col-lg-5 order-md-last">
			        <h4 className="d-flex justify-content-between align-items-center mb-3">
			          <span className="text-primary mt-4 pt-4">Bus Bookings</span>
			          <span className="badge bg-primary rounded-pill mt-5">{state.length}</span>
			        </h4>
			        <ul className="list-group mb-3">

			        	{state.map(itemList)} 
			         
			          <li className="list-group-item d-flex justify-content-between">
			            <span>Total (USD)</span>
			            <strong>${total}</strong>
			          </li>
			        </ul>

			        <form className="card p-5 my-5">
			          <div className="input-group">
			            <input type="text" className="form-control" placeholder="Promo code" spellcheck="false" data-ms-editor="true" />
			            <button type="submit" className="btn btn-secondary">Redeem</button>
			          </div>
			        </form>
			      </div>
			    
			      <div className="col-md-7 col-lg-7 mt-1 pt-2">
			        <h4 className="mb-3">Billing address</h4>
			        <form className="needs-validation" noValidate="">
			          <div className="row g-3">
			            <div className="col-sm-6">
			              <label htmlFor="firstName" className="form-label">First name</label>
			              <input type="text" className="form-control" id="firstName" placeholder="" required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Valid first name is required.
			              </div>
			            </div>

			            <div className="col-sm-6">
			              <label htmlFor="lastName" className="form-label">Last name</label>
			              <input type="text" className="form-control" id="lastName" placeholder=""  required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Valid last name is required.
			              </div>
			            </div>

			            <div className="col-12">
			              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
			              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
			              <div className="invalid-feedback">
			                Please enter a valid email address.
			              </div>
			            </div>

			            <div className="col-12">
			              <label htmlFor="address" className="form-label">Address</label>
			              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Please enter your address.
			              </div>
			            </div>

			            <div className="col-12">
			              <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
			              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" spellCheck="false" data-ms-editor="true" />
			            </div>

			            <div className="col-md-5">
			              <label htmlFor="country" className="form-label">Country</label>
			              <select className="form-select" id="country" required="">
			                <option value="">Choose...</option>
			                <option>United States</option>
			              </select>
			              <div className="invalid-feedback">
			                Please select a valid country.
			              </div>
			            </div>

			            <div className="col-md-4">
			              <label htmlFor="state" className="form-label">State</label>
			              <select className="form-select" id="state" required="">
			                <option value="">Choose...</option>
			                <option>California</option>
			              </select>
			              <div className="invalid-feedback">
			                Please provide a valid state.
			              </div>
			            </div>

			            <div className="col-md-3">
			              <label htmlFor="zip" className="form-label">Zip</label>
			              <input type="text" className="form-control" id="zip" placeholder="" required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Zip code required.
			              </div>
			            </div>
			          </div>

			          <hr className="my-4"/>


			          <div className="form-check">
			            <input type="checkbox" className="form-check-input" id="save-info" />
			            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
			          </div>

			          <hr className="my-4"/>

			          <h4 className="mb-3">Payment</h4>

			          <div className="my-3">
			            <div className="form-check">
			              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
			              <label className="form-check-label" htmlFor="credit"> <i className='fa fa-credit-card me-2'></i>Credit card</label>
			            </div>
			            <div className="form-check">
			              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
			              <label className="form-check-label" htmlFor="debit"><i className='fa fa-cc-visa me-2'></i>Debit card</label>
			            </div>
			            <div className="form-check">
			              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
			              <label className="form-check-label" htmlFor="paypal"><i className='fa fa-cc-paypal me-2'></i>PayPal</label>
			            </div>
			          </div>

			          <div className="row gy-3">
			            <div className="col-md-6">
			              <label htmlFor="cc-name" className="form-label">Name on card</label>
			              <input type="text" className="form-control" id="cc-name" placeholder="" required="" spellCheck="false" data-ms-editor="true" />
			              <small className="text-muted">Full name as displayed on card</small>
			              <div className="invalid-feedback">
			                Name on card is required
			              </div>
			            </div>

			            <div className="col-md-6">
			              <label htmlFor="cc-number" className="form-label">Credit card number</label>
			              <input type="text" className="form-control" id="cc-number" placeholder="" required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Credit card number is required
			              </div>
			            </div>

			            <div className="col-md-3">
			              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
			              <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" spellCheck="false" data-ms-editor="true"/>
			              <div className="invalid-feedback">
			                Expiration date required
			              </div>
			            </div>

			            <div className="col-md-3">
			              <label htmlFor="cc-cvv" className="form-label">CVV</label>
			              <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" spellCheck="false" data-ms-editor="true" />
			              <div className="invalid-feedback">
			                Security code required
			              </div>
			            </div>
			          </div>

			          <hr className="my-4"/>

			          <Link to="/thank" className="w-100 btn btn-primary btn-lg" type="submit" disabled>Process Payment</Link>
			        </form>
			      </div>
			    </div>
				</div>
		</>
		)
}

export default Payments
