import useFetch from "../../hooks/useFetch";
import "./featuredRoutes.css";

const FeaturedRoutes = () => {

const { data, loading } = useFetch("/availTrips/countByDestination?destinations=manila,cebu,boracay,elnido")
  
console.log(data);

  return (
    <div className="fp p-5 m-3">
     {loading ? ("Loading please wait...") : ( <><div className="fpItem">
        <img
          src="https://cdn.pixabay.com/photo/2019/09/25/12/12/manila-4503501__340.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Manila &nbsp;({data[0]})</span>
        <span className="fpCity">Philippine capital with colonial core</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/02/sto-nino-chapel-blessing-01-scaled.jpg?fit=2560%2C1707&ssl=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cebu City &nbsp;({data[1]})</span>
        <span className="fpCity">Cebu City, dive sites and beach resorts</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://a.cdn-hotels.com/gdcs/production174/d1854/94a2dc91-92fe-42d6-abbb-3a2517e9803a.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Boracay &nbsp;({data[2]})</span>
        <span className="fpCity">White Beach and Mount Luho views</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/58/8a/80/caption.jpg?w=600&h=400&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">El Nido &nbsp;({data[3]})</span>
        <span className="fpCity">Beaches, diving and the Bacuit Archipelago</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div></>
        )}
    </div>
  );
};

export default FeaturedRoutes;
