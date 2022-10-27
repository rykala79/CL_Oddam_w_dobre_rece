import React from "react";
import { Route, Routes,  } from "react-router-dom";
import './scss/main.scss';

import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oddaj rzeczy" element={<Form />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/wyloguj" element={<Logout />} />
        <Route path="/rejestracja" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
