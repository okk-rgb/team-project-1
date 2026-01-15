import "./Support.css";
import food from "../assets/food.jpg"; 

const Support = () => {
  return (
    <div className="support">
      <div className="support-left">
        <img src={food} alt="food" />
      </div>

      <div className="support-right">
        <h2>
         <span>good food</span>
          <br />
          and local business.
        </h2>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Support;
