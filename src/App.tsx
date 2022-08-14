import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./projects/Home";
import UsersList from "./projects/UsersList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CollectionList from "./projects/CollectionList";

const Navbar = styled.div`
  display: flex;
  padding: 20px 20px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: black;

  a {
    text-decoration: none;
    color: green;
    border-radius: 10px;
    border: 1px solid green;
    padding: 10px;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/userslist">Users list</Link>
        <Link to="/collectionslist">Collections list</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userslist" element={<UsersList />} />
        <Route path="collectionslist" element={<CollectionList />} />
      </Routes>
    </div>
  );
}

export default App;
