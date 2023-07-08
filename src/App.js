import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
