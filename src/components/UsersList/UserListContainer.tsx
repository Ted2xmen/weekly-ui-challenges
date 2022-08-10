import React from "react";
import styled from "styled-components";
import GridContainer from "./GridContainer";
import Header from "./Header";

const MainContainter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  /* background-color: #e2e9f9; */
`;

const ProjectContainer = styled.div`
    margin: 50px;
    padding: 70px 50px;
    border: 1px solid #ccc;
    border-radius: 25px;
`

const UserListContainer = () => {
  return (
    <>
      <MainContainter>
        <ProjectContainer>
          <Header />
          <GridContainer />
        </ProjectContainer>
      </MainContainter>
    </>
  );
};

export default UserListContainer;
