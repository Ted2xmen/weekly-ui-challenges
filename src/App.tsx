import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./projects/Home";
import UsersList from "./projects/UsersList";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userslist" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App
