import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
