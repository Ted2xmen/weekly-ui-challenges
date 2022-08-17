import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 34px;
`;

const Title = styled.h2`
  font-size: 28px;
  display: flex;
  font-family: serif;
`;

const TagBar = styled.div`
  display: flex;
`;

const Tag = styled.span`
  background-color: #ffffff;
  color: black;
  font-size: 14px;
  padding: 8px;
  border-radius: 10px;
  margin-right: 8px;
  border: none;
`;

const CollectionHeader = () => {
  return (
    <Wrapper>
      <Title>Popular Collections</Title>
      <TagBar>
        <Tag>Profile</Tag>
        <Tag>New York</Tag>
        <Tag>Relaxing</Tag>
        <Tag>Person</Tag>
        <Tag>Fashion</Tag>
      </TagBar>
    </Wrapper>
  );
};

export default CollectionHeader;
