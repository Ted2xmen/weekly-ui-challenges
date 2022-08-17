import React from "react";
import CollectionHeader from "./CollectionHeader";
import GridContainer from "./GridContainer";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #dee2e7;
  display: flex;
  margin: auto;
  margin-top: 20px;
  flex-direction: column;
  justify-content: start;
  border-radius: 20px;
  max-width: 1024px;
  padding: 30px;
`;

const CollectionListContainer = () => {
  return (
    <MainContainer>
      <CollectionHeader />
      <GridContainer />
    </MainContainer>
  );
};

export default CollectionListContainer;
