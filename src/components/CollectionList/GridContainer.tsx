import React from "react";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const GridContainer = () => {
  return (
    <Container>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </Container>
  );
};

export default GridContainer;
