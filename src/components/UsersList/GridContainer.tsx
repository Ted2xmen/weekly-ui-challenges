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

const GridContainer: React.FC = () => {
  return (
    <Grid>
      {userData.slice(0, 9).map((user) => {
        return (
          <UserCard
            key={user.id}
            avatar={user.avatar}
            full_name={user.full_name}
            city={user.city}
          />
        );
      })}
    </Grid>
  );
};

export default GridContainer;
