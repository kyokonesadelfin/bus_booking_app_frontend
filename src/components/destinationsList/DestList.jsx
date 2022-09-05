import "./destList.css";

const DestList = () => {
  return (
    <div className="dList p-5 m-3">
      <div className="dListItem">
        <img
          src="https://4.bp.blogspot.com/-GvMYI3VlDE4/Vh4P7-j-2cI/AAAAAAAAO8c/kltKXJ3lhOQ/s640/zambo%2B3.jpg"
          alt=""
          className="dListImg"
        />
        <div className="dListTitles">
          <h1>Zamboanga City</h1>
          <h2>3517 km</h2>
        </div>
      </div>
      <div className="dListItem">
        <img
          src="https://www.crowdsourcedexplorer.com/storage/2021/04/Guiguinto-Bulacan-Philippines-102890-1200x900.jpg"
          alt=""
          className="dListImg"
        />
        <div className="dListTitles">
          <h1>Guiguinto, Bulacan</h1>
          <h2>473 km</h2>
        </div>
      </div>
      <div className="dListItem">
        <img
          src="https://live.staticflickr.com/436/32553718950_0e6edbe244_b.jpg"
          alt=""
          className="dListImg"
        />
        <div className="dListTitles">
          <h1>Olongapo</h1>
          <h2>118 km</h2>
        </div>
      </div>
      <div className="dListItem">
        <img
          src="https://media.philstar.com/photos/2020/11/04/h3_2020-11-04_22-39-20.jpg"
          alt=""
          className="dListImg"
        />
        <div className="dListTitles">
          <h1>Batangas City</h1>
          <h2>49 km</h2>
        </div>
      </div>
      <div className="dListItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Villanueva_Building_%28Calle_Real%29_in_Iloilo_City.jpg"
          alt=""
          className="dListImg"
        />
        <div className="dListTitles">
          <h1>Iloilo City</h1>
          <h2>125	km</h2>
        </div>
      </div>
    </div>
  );
};

export default DestList;
