import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new-workout" exact element={<NewWorkout />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
