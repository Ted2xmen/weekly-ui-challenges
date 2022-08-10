import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: 20px;
  background-color: #eceff6;
  &:nth-child(2) {
    border: 1px solid #9b8f8f;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  margin-right: 10px;
  width: 50px;
  background-color: black;
  border-radius: 50px;
`

const UserCard = ({user}: any) => {
  return (
    <CardWrapper>
      <Image src={user.avatar} alt="" />
      <div>{user.full_name}</div>
    </CardWrapper>
  );
};

export default UserCard;
