import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const state = useSelector((state)=> state.addBooking)

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    alert("Logout Success");
  };

  

  return (
    <div className="navbar m-3">
      <div className="navContainer m-3">
        <Link to="/" style={{ color: "inherit", fontSize: "20px" }}>
          <span className="logo"><FontAwesomeIcon icon={faBus} className="headerIcon fa-lg me-2" style={{color: "fuchsia"}}/>TravelBus Philippines</span>
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="btn btn-outline-info active fw-bold" aria-current="page" to="/featureroutes" >
              Top Routes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-info fw-bolder" to="/destlist" >
              Top City Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-info fw-bolder" to="/discount" >
              Discounts
            </Link>
          </li>

        </ul>

        {user ? (
          <div>
            <span className="nav-item dropdown">
              <li
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
               <span className="badge bg-primary rounded-pill p-2">{state.length}</span> &nbsp;
                {" "}
                {user.email}
              </li>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item fw-bold" to="/payment">
                    My Bookings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/profile">
                    Manage Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/contact">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item fw-bold"
                    to="/logout"
                    onClick={handleClick}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        ) : (
          <div className="navItems">
            <Link
              className="btn btn-outline-danger px-3 py-1 ms-2 fw-bolder"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="btn btn-outline-danger px-3 py-1 ms-2 fw-bolder"
              to="/login"
             data-testid="login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
