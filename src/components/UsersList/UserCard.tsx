import React from "react";
import styled from "styled-components";

type UserProps = {
  avatar: string;
  full_name: string;
  city: string;
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  border-radius: 15px;
  padding: 20px;
  background-color: #fbfcff;
  &:nth-child(2) {
    border: 1px solid #bfc8e5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  display: block;
  width: 80px;
  border-radius: 50px;
  margin-right: 10px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 120px;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;
const Tag = styled.span`
  border-radius: 25px;
  font-size: 12px;
  color: #516fd4;
  border: 1px solid #516fd4;
  padding: 2px 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: start;
  margin-left: 10px;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 18px;
`
const UserCard = ({ avatar, full_name, city }: UserProps) => {
  return (
    <CardWrapper>
      <Image src={avatar} alt={full_name} />

      <Container>
        <Title>{full_name}</Title>
        <span style={{ fontSize: "14px", fontFamily: "sans-serif" }}> {city} </span>
        <TagWrapper>
          <Tag>tech</Tag>
          <Tag>sport</Tag>
          <Tag>sport</Tag>
          <Tag>nature</Tag>
        </TagWrapper>
      </Container>
    </CardWrapper>
  );
};

export default UserCard;
