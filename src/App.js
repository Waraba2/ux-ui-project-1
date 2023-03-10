import './App.css';
import {HomePage, Attractions} from "./pages";
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
        </Routes>

    </div>
  );
}

export default App;



