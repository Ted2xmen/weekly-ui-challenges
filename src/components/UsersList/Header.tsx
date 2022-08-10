import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  margin: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Input = styled.input`
  position: absolute;
  display: flex;
  padding: 20px 30px 20px 50px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SVG = styled.svg`
  width: 28px;
  z-index: 10;
  margin-left: 10px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
`;

const Item = styled.li`
  padding: 18px;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  list-style: none;

  &:nth-child(2) {
    background-color: #849fff;
    color: white;
  }
`;

const Title = styled.h1`
  display: flex;
  font-size: 34px;
  font-weight: bold;
  justify-content: start;
  margin-inline: 30px;
  margin-top: 50px;
`;

const Header = () => {
  return (
    <>
      <Title>Users</Title>
      <Container>
        <SearchContainer>
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </SVG>
          <Input type="text" placeholder="Search users" />
        </SearchContainer>
        <ListWrapper>
          <Item>Reputation</Item>
          <Item>New Users</Item>
          <Item>Voters</Item>
          <Item>Editors</Item>
          <Item>Moderators</Item>
        </ListWrapper>
      </Container>
    </>
  );
};

export default Header;
