import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth/:Authtype" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
