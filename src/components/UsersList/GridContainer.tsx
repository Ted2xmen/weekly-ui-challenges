import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import userData from "./userData.json";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
  gap: 20px;
`;



const GridContainer= () => {
  return (
    <Grid>
      {userData.slice(0,6).map((user: any) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </Grid>
  );
};

export default GridContainer;
