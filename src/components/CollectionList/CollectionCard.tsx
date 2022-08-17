import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 18px 1px 18px;
`;

const Count = styled.p`
  font-size: 12px;
  color: black;
`;

const SubTitle = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  padding-top: 20px;
  background-color: #ffff;
  border-radius: 20px;
`;

const CollectionCard = () => {
  return (
    <MainCard>
      <CardWrapper>
        <Img
          width="240"
          height="200"
          src="https://source.unsplash.com/700x500/?person"
          alt=""
        />
        <ImgWrapper>
          <Img
            width="70"
            src="https://source.unsplash.com/500x500/?person"
            alt=""
          />
          <Img
            width="70"
            src="https://source.unsplash.com/500x500/?man"
            alt=""
          />
          <Img
            width="70"
            src="https://source.unsplash.com/500x500/?women"
            alt=""
          />
        </ImgWrapper>
      </CardWrapper>
      <SubHeader>
        <SubTitle>Nature</SubTitle>
        <Count>321</Count>
      </SubHeader>
    </MainCard>
  );
};

export default CollectionCard;
