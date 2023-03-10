import './App.css';
import {HomePage, Attractions, Restaurants, Architecture} from "./pages";
import {Routes, Route} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="bg-bubble-1"></div>
        <div className="bg-bubble-2"></div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="attractions" element={<Attractions />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/architecture" element={<Architecture />} />
        </Routes>

    </div>
  );
}

export default App;



