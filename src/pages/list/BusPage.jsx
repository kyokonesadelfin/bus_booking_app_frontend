import React from "react";
import "./list.css";
import "./searchItem.css";
import { Link, useParams } from "react-router-dom";
import DATA from "../../DATA";
import { addBooking, delBooking } from "../../redux/actions";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const BusPage = () => {

  const [btn, setBtn] = useState("Book Now")
  const dispatch = useDispatch()

  const handleCart = (product) => {
		if (btn === "Book Now") {
			dispatch(addBooking(product))
			setBtn("Cancel Booking")
			

		} else {
			dispatch(delBooking(product))
			setBtn("Book Now")
		}
	}


  const proid = useParams();
	const proDetail = DATA.filter(x=>x.id == proid.id)
	const product = proDetail[0];
	console.log(product);

  return (
    <div>
      <div className="p-5">
        <div className="searchItem" key={product.source}>
          <img src={product.image} alt="..." className="siImg" style={{width: "400px"}}/>
          <div className="siDesc">
            <h1 className="siTitle">{product.busName}</h1>
            <span className="siDistance">Model: {product.model}</span>
            <span className="siSubtitle">Desc: {product.desc}</span>
            <span className="siSubtitle">
              Trip: {product.source} to {product.destination}, &nbsp;{" "}
              {product.tripsDates}
            </span>
            <span className="siSubtitle">
              Stops: {product.stops} &nbsp;{" "}
            </span>
            <span className="siCancelOpSubtitle">
              Bus Liner: {product.busLiner}
            </span>
            <span className="fw-bold">
              Available Seats: {product.seatsAvail}
            </span>
          </div>
          <div className="siDetails">
            <div className="siDetailTexts">
              <span>Ratings: {product.rating}</span>
              <span className="siPrice">${product.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <span className="nav-link"></span>
              <button onClick={()=>handleCart(product)} className="btn btn-outline-danger">{btn}</button>
              <br/>
              <Link to="/seat" className="btn btn-outline-danger">Choose Seats</Link>
              <br/>
              <Link to="/" className="text-center">Back to HomePage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusPage;
