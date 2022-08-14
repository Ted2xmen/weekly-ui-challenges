import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;

  h1 {
    font-size: 6rem;
    background: #121fcf;
    background: conic-gradient(
      at 0% 100%,
      rgb(147, 197, 253),
      rgb(245, 208, 254),
      rgb(250, 250, 249)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    color: white;
  }

  ul {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: start;

      span {
    font-style: italic;
    margin-left: 20px;
    background-color: yellow;
    color: black;
    font-size: 0.9rem;
  }

    li {
      padding: 5px;

      a {
        text-decoration: none;
        color: green;
        font-size: 1.6rem;
      }
    }
  }
`;
