import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px
`;

const Input = styled.input`
  display: flex;
  padding: 15px 30px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Item = styled.li`
  padding: 8px;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  list-style: none;

  &:nth-child(3) {
    background-color: #849fff;
    color: white;
  }
`;

const Title = styled.h1`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif ;
  justify-content: start;
  margin-inline: 30px;
`

const Header = () => {
  return (
    <>
      <Title>Users</Title>
      <Container>
        <Input type="text" placeholder="Search users" />
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
