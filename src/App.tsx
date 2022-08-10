import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./projects/Home";
import UsersList from "./projects/UsersList";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/userslist">Userslist</Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userslist" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App
