import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginScreen } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
