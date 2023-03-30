import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginScreen } from "./components/Login";
import { MainPageScreen } from "./components/Mainpage";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let data = JSON.parse(localStorage.getItem("token") ?? "{}");
      setToken(data);
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen setToken={setToken} />} />
      <Route path={"/"} element={<MainPageScreen />} />
    </Routes>
  );
}

export default App;
