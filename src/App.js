import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login, Signup } from "./containers";

const App = () => {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/login"/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
	);
};

export default App;
