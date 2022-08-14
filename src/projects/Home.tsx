import React from "react";
import { Container } from "./Home.style";
import projects from "./projects.json";

const Home = () => {
  return (
    <Container>
      <h1>weekly ui projects</h1>
      <ul>
        {projects.map((item) => {
          return (
            <li>
              <a target="_blank" rel="noopener noreferrer" href={item.url}>
                {item.name}
              </a>
              <span> {item.url}</span>
            </li>
          );
        })}
      </ul>
      <h2>from</h2>
      <img
        width="300px"
        src="https://uidesigndaily.com/public/img/uidesigndaily-logo.svg"
        alt=""
      />
    </Container>
  );
};

export default Home;
