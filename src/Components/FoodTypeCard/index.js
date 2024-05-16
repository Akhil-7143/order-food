import "./index.css";

const FoodTypeCard = (props) => {
  const { item} = props;
  const {name}=item
  return (
    <li className="food-item-card">
      <p>{name}</p>
     
    </li>
  );
};

export default FoodTypeCard;
