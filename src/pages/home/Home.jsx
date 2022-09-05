import "./home.css";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import DATA from "../../DATA";
import { useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");

  const keys = ["source", "destination", "busLiner"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div >
      <div className="p-3 m-3">
        <div className="card text-bg-dark">
          <img
            src="https://media.istockphoto.com/photos/white-bus-traveling-on-the-asphalt-road-in-a-rural-landscape-at-picture-id879364174?k=20&m=879364174&s=612x612&w=0&h=JJ90BcO8di7yr0EuHMelSZ3H8W6RGJ8fSgyBViPcP34="
            className="card-img"
            alt="..."
            style={{ height: "400px" }}
          />
          <div className="card-img-overlay">
            <h2 className="card-title lead display-3 fw-bolder" style={{color: "rgb(136, 248, 243)"}}>Travel Bus App -- Philippines</h2>
            <p className="card-text fw-bold" style={{color: "blue"}}>
             The Super App for Bus Booking --only in the Philippines.</p>
            <p className="card-text" style={{color: "black"}}>Last updated 3 mins ago</p>
            <Link type="button" className="btn btn-danger" to="/list">Book Now!</Link>
          </div> 
        </div>
        <div className="app">
          <p >
            Search 'keywords' like your source, destination or the Bus liner
            name.
          </p>
          {/* <FontAwesomeIcon icon={faBus} className="headerIcon fa-2x" />
                <input
                  type="text"
                  placeholder="Traveling From?"
                  className="search"
                />
                {DATA.map((user)=>
                 <ul className="list">
                    <li className="listItem">{user.source}</li>
                </ul>
                )} */}
          <FontAwesomeIcon icon={faBus} className="headerIcon fa-2x me-2" style={{color: "red"}}/>
          <input
            type="text"
            placeholder="Search for your next bus trip..."
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Table  data={search(DATA)}  />
        </div>
      </div>
    </div>
  );
};

export default Home;
