import "./discounts.css";

const Discounts = () => {
  return (
    <div className="pList p-5 m-3">
      <div className="pListItem">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/98/03/84/1000_F_398038481_Uacvc83Xu0sE7CLtIjJrHCIDbwfKlUE5.jpg"
          alt="..."
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>USE CODE: 'RIDEONLINE50' TO GET 50% DISCOUNT</h1>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://st4.depositphotos.com/3751403/38031/v/450/depositphotos_380316638-stock-illustration-25-off-discount-promotion-sale.jpg"
          alt="..."
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>USE CODE: 'RIDEONLINE25' TO GET 25% DISCOUNT</h1>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
