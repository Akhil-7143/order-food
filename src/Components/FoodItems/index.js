import { Link } from "react-router-dom";
import "./index.css";

const FoodItems = ({ foodItem }) => {
  const { name, imageUrl, altText } = foodItem;

  return (
    <Link to={`/food-items/${name}`} className="item-card">
      <li className="food-item">
        <img src={imageUrl} alt={altText} className="image" />
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default FoodItems;
