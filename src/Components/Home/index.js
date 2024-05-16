import { Component } from "react";
import FoodItems from "../FoodItems";
import "./index.css";

const foodTypesList = [
  {
    id: 1,
    name: "Biscuits",
    altText: "Biscuits",
    imageUrl:
      "https://img.freepik.com/free-photo/sandwich-cookies-filled-with-cream-wooden-plate_114579-48345.jpg?t=st=1715413209~exp=1715416809~hmac=176494d40ebdd118031b1599e5273cddb0fdaa06e6ad6a6b66816dbe4a80f461&w=826",
  },
  {
    id: 2,
    name: "Tea",
    altText: "Tea",
    imageUrl:
      "https://img.freepik.com/premium-photo/two-mugs-masala-tea-are-gray-table-steam-comes-from-them_163994-1256.jpg?w=360",
  },
  {
    id: 3,
    name: "Coffee",
    altText: "Coffee",
    imageUrl:
      "https://img.freepik.com/free-psd/mockup-cup-takeaway-coffee_53876-65814.jpg?w=360&t=st=1715413717~exp=1715414317~hmac=493ba53c42d5983c3972a26961b952cd8a26a2917024db4bb9dc5cbefb6b21bf",
  },
  {
    id: 4,
    name: "CoolDrinks",
    altText: "CoolDrinks",
    imageUrl:
      "https://as1.ftcdn.net/v2/jpg/07/00/35/00/1000_F_700350070_CWIka1iCjLpCbjf7uZrdIzmnT9hBwsRX.jpg",
  },
  {
    id: 5,
    name: "IceCreams",
    altText: "Ice Creams",
    imageUrl:
      "https://img.freepik.com/premium-photo/top-view-tasty-ice-cream-cones-with-topping_198067-534904.jpg?w=826",
  },
  {
    id: 6,
    name: "FastFood",
    altText: "FastFood",
    imageUrl:
      "https://img.freepik.com/premium-photo/schezwan-fried-rice-masala-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-30935.jpg?w=826",
  },
];

class Home extends Component {
  state = { foodList: foodTypesList };
  render() {
    const { foodList } = this.state;

    return (
      <div className="home-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
              alt="logo"
              className="logo"
            />
          </div>
          <button type="button" className="logo-btn">
            Orders
          </button>
        </nav>
        <ul className="items-container">
          {foodList.map((each) => (
            <FoodItems key={each.id} foodItem={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
