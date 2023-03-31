import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginScreen } from "./components/Login";
import { MainPageScreen } from "./components/Mainpage";
import { ProductScreen } from "./components/Product";
import { CartScreen } from "./components/Cart";
import { HistoryScreen } from "./components/History";

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@user")) {
      let data = JSON.parse(localStorage.getItem("@user") ?? "{}");
      setToken(data);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen setToken={setToken} />} />
      <Route path="/" element={<MainPageScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen token={token} />} />
      <Route path="/history" element={<HistoryScreen token={token} />} />
    </Routes>
  );
}

export default App;
