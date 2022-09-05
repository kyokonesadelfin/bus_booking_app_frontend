import React, { useState, useEffect } from "react";
import DATA from "../../DATA.jsx";
import { Link } from "react-router-dom";
import "./list.css";
import "./searchItem.css";


const List = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (componentMounted) {
        const res = await DATA;
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProducts = () => {
    return (
      <>
        {DATA.map((product) => {
          return (
            <>
              <div>
                <div className="searchItem" key={product.source}>
                  <img src={product.image} alt="..." className="siImg" />
                  <div className="siDesc">
                    <h1 className="siTitle">{product.busName}</h1>
                    <span className="siDistance">Model: {product.model}</span>
                    <span className="siSubtitle">Desc: {product.desc}</span>
                    <span className="siSubtitle">
                      Trip: {product.source} to {product.destination}, &nbsp;{" "}
                      {product.tripsDates}
                    </span>
                    <span className="siCancelOpSubtitle">
                      Bus Liner: {product.busLiner}
                    </span>
                  </div>
                  <div className="siDetails">
                    <div className="siDetailTexts">
                      <span>Ratings: {product.rating}</span>
                      <span className="siPrice">${product.price}</span>
                      <span className="siTaxOp">Includes taxes and fees</span>
                      <span className="nav-link">
                        <Link
                          className="siCheckButton"
                          type="submit"
                          to={`/seat/${product.id}`}
                        >
                          Book Now!
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
