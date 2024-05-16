import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FoodType from "./Components/FoodType";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/food-items/:name" Component={FoodType} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
