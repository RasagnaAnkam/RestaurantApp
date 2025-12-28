import Home from "./Components/Home";
import Orders from "./Components/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
