import "./Orders.css";
import phones from "../../assets/phones.png";

const Order = () => {
  return (
    <div className="order-wrapper">
      <div className="order-left">
        <img src={phones} alt="phones" />
      </div>

      <div className="order-right">
        <h2>
          Order online with <br /> our simple checkout.
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy text ever since the 1500.
        </p>
        <button>See our FAQ</button>
      </div>
    </div>
  );
};

export default Order;
