import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FoodTypeCard from "../FoodTypeCard";
import "./index.css";

const FoodType = () => {
  const location = useLocation();
  const [foodTypeData, setFoodTypeData] = useState([]);

  useEffect(() => {
    const getFoodTypes = async () => {
      const idName = location.pathname.split("/").pop();
      const url = `http://localhost:3000/food-items/${idName}`;

      try {
        const response = await fetch(url);
        const foodTypesData = await response.json();
        setFoodTypeData(foodTypesData);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getFoodTypes();
  }, [location]);

  return (
    <div className="food-type-container">
      <h1>Food Types</h1>
      <ul>
        {foodTypeData.map((each) => (
          <FoodTypeCard key={each.id} item={each} />
        ))}
      </ul>
    </div>
  );
};

export default FoodType;
